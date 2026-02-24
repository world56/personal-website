import { toast } from "sonner";
import Script from "next/script";
import Loading from "../Loading";
import { useTheme } from "next-themes";
import { useTranslations } from "next-intl";
import { upload } from "@/actions/resource";
import { loadStylesheet } from "@/lib/utils";
import { useEffect, useRef, useState } from "react";
import { getTinymceLanguage } from "@/lib/language";
import { getFileType, getUploadFiles } from "@/lib/filter";

import CONFIG from "./config";
import TEMPLATE from "./template";
import { ENUM_COMMON } from "@/enum/common";

import type { Editor } from "tinymce";

interface TypeTxtEditorProps<T = string> {
  /**
   * @param height 编辑器高度
   */
  height?: number;
  /**
   * @param value 文本内容
   */
  value?: string;
  /**
   * @name onChange 内容监听器
   */
  onChange?(value?: T): void;
}

const TextEditor: React.FC<TypeTxtEditorProps> = ({
  onChange,
  value = "",
  height = 780,
}) => {
  const { systemTheme } = useTheme();
  const t = useTranslations("textEditor");

  const edit = useRef<Editor>(null);

  const [loading, setLoading] = useState(true);

  function onCreate() {
    window.tinymce?.init({
      ...CONFIG,
      ...getTinymceLanguage(),
      height,
      selector: `#editor`,
      init_instance_callback: (editor) => {
        edit.current = editor;
        edit.current?.on("change", () =>
          onChange?.(edit.current?.getContent()),
        );
        setLoading(false);
      },
      setup(editor) {
        editor.on("SkinLoaded", () => {
          const doc = editor.getDoc();
          if (doc) {
            const script = doc.createElement("script");
            script.src = `/lib/tinymce/mount/index.js`;
            doc.head.appendChild(script);
          }
        });
        editor.ui.registry.addButton("codetag", {
          icon: "sourcecode",
          tooltip: t("sourcecode"),
          onAction: () => editor.execCommand("mceToggleFormat", false, "code"),
        });
        editor.ui.registry.addButton("title", {
          icon: "permanent-pen",
          tooltip: t("insertTitle"),
          onAction: () => editor?.insertContent(TEMPLATE.getTitle()),
        });
        editor.ui.registry.addButton("upload", {
          icon: "upload",
          tooltip: t("upload"),
          onAction: () => uploadFile(editor),
        });
        editor.ui.registry.addButton("remove-ele", {
          icon: "remove",
          tooltip: t("removeTitle"),
          onAction: () => {
            const node = editor.selection.getNode();
            if (node.className === "main-title") {
              node?.parentNode?.removeChild(node);
            }
          },
        });
        editor.ui.registry.addButton("player-left", {
          icon: "align-left",
          tooltip: t("left"),
          onAction: () => changeAlign(editor, "left"),
        });
        editor.ui.registry.addButton("player-center", {
          icon: "align-center",
          tooltip: t("center"),
          onAction: () => changeAlign(editor, "center"),
        });
        editor.ui.registry.addButton("player-right", {
          icon: "align-right",
          tooltip: t("right"),
          onAction: () => changeAlign(editor, "right"),
        });
        editor.ui.registry.addButton("player-zoom-in", {
          icon: "zoom-in",
          tooltip: t("zoomIn"),
          onAction: () => changeWidth(editor, "ADD"),
        });
        editor.ui.registry.addButton("player-zoom-out", {
          icon: "zoom-out",
          tooltip: t("zoomOut"),
          onAction: () => changeWidth(editor, "REDUCE"),
        });

        editor.ui.registry.addContextToolbar("Format", {
          predicate: (e) =>
            !edit.current?.selection.isCollapsed() &&
            !/(\btiny-pageembed\b|\bplayer-media\b)/.test(e.className) &&
            !["BODY", "PRE", "IMG"].includes(e.tagName),
          position: "selection",
          scope: "node",
          items: "bold strikethrough removeformat codetag blockquote link",
        });

        editor.ui.registry.addContextToolbar("Location", {
          predicate: (e) =>
            !edit.current?.selection.isCollapsed() &&
            !/(\btiny-pageembed\b|\bplayer-media\b)/.test(e.className) &&
            !["BODY", "PRE"].includes(e.tagName),
          position: "selection",
          scope: "node",
          items: "alignleft aligncenter alignright",
        });

        editor.ui.registry.addContextToolbar("player", {
          predicate: (e) => e.className === "player-media",
          items:
            "player-left player-center player-right | player-zoom-in player-zoom-out",
          position: "node",
          scope: "node",
        });
        editor.ui.registry.addContextToolbar("delete", {
          predicate: (e) =>
            /(\btiny-pageembed\b|\bplayer-media\b|\blanguage-\b)/.test(
              e.className,
            ),
          items: "remove",
          position: "node",
          scope: "node",
        });
        editor.ui.registry.addContextToolbar("remove-ele", {
          predicate: (e) => /(\bmain-title\b)/.test(e.className),
          items: "remove-ele",
          position: "node",
          scope: "node",
        });
      },
    });
  }

  async function uploadFile(editor: Editor) {
    const files = await getUploadFiles(
      ".svg, .jpg, .jpeg, .png, .webp, .mp4, .mp3, .aac, .m4a",
      true,
    );
    let num = 0;
    toast.promise(
      async () => {
        let html = "";
        for await (const file of files) {
          try {
            const { path } = await upload(file);
            num++;
            const type = getFileType(path);
            const url = `/api/resource/${path}`;
            switch (type) {
              case ENUM_COMMON.RESOURCE.IMAGE:
                html += TEMPLATE.getImage(url);
                break;
              case ENUM_COMMON.RESOURCE.VIDEO:
                html += TEMPLATE.getVideo(url);
                break;
              case ENUM_COMMON.RESOURCE.AUDIO:
                html += TEMPLATE.getAudio(url);
                break;
            }
          } catch (error) {
            console.log("@-upload-error", error);
          }
        }
        edit?.current?.execCommand("mceInsertContent", false, html);
        editor.dispatch("change");
        return Promise.resolve(files);
      },
      {
        loading: t("uploadLod"),
        error: () => t("uploadError"),
        success: () => `${num} ${t("uploadSuccess")}`,
      },
    );
  }

  function changeAlign(editor: Editor, type: "left" | "center" | "right") {
    editor.dom.setStyle(editor.selection.getNode(), "justify-content", type);
    editor.dispatch("change");
  }

  function changeWidth(editor: Editor, type: "ADD" | "REDUCE") {
    const ele = editor?.selection.getNode().children[0] as HTMLElement;
    const num = Number(ele.style.width.slice(0, -1));
    if (type === "ADD" && num === 100) {
      return toast.warning(t("maxSize"));
    } else if (type === "REDUCE") {
      const IS_AUDIO = ele.hasAttribute("audio");
      if ((IS_AUDIO && num === 50) || (!IS_AUDIO && num === 40)) {
        return toast.warning(t("minSize"));
      }
    }
    const width = `${type === "ADD" ? num + 10 : num - 10}%`;
    editor.dom.setStyle(ele, "width", width);
    editor.dispatch("change");
  }

  useEffect(() => {
    if (!loading) {
      if (edit.current?.getContent() !== value) {
        let index = edit.current?.selection?.getBookmark?.(2)!;
        edit.current?.setContent?.(value);
        edit.current?.selection?.moveToBookmark?.(index);
      }
    }
  }, [loading, value]);

  useEffect(() => {
    onCreate();
    return () => {
      if (window?.tinymce && edit.current) {
        window.tinymce?.remove?.(edit.current!);
      }
    };
  }, []);

  useEffect(
    () =>
      loadStylesheet(
        `/lib/tinymce/skins/ui/oxide${
          systemTheme === "dark" ? "-dark" : ""
        }/skin.min.css`,
        "oxide",
      ),
    [systemTheme],
  );

  return (
    <Loading>
      <div id="editor" style={{ minHeight: 780 }} />
      <Script onReady={onCreate} src="/lib/tinymce/tinymce.min.js" />
    </Loading>
  );
};

export default TextEditor;
