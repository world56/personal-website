"use client";

import {
  FormItem,
  FormField,
  FormControl,
  FormMessage,
} from "@/components/ui/form";
import DataTable from ".";
import { Button } from "../ui/button";
import Tooltip from "@/components/Tooltip";
import { useTranslations } from "next-intl";
import { Input } from "@/components/ui/input";
import Upload from "@/components/Upload/Image";
import { useFieldArray, useFormContext } from "react-hook-form";
import { PlusCircleOutlined, QuestionCircleOutlined } from "@ant-design/icons";

import type { Tag } from "model";
import type { ColumnDef } from "@tanstack/react-table";

type TagFormValues = Record<"items" | "skills", Partial<Tag>[]>;

interface TypeTableEditProps<T extends TagFormValues = TagFormValues> {
  name: keyof T;
}

function onBlur(e: React.FocusEvent<HTMLInputElement>) {
  e.stopPropagation();
  e.preventDefault();
  e.nativeEvent.stopImmediatePropagation();
}

const TableEdit: React.FC<TypeTableEditProps> = ({ name }) => {
  const t = useTranslations("tag");
  const tCommon = useTranslations("common");

  const form = useFormContext();

  const { fields, move, remove, append } = useFieldArray({
    name,
    control: form.control,
  });

  function onInsert() {
    append({ icon: "", name: "", url: "", description: "" });
  }

  function onClickEvent(e?: React.MouseEvent<HTMLButtonElement>) {
    e?.preventDefault();
  }

  const columns: ColumnDef<Omit<Tag, "id" | "type" | "index">>[] = [
    {
      accessorKey: "icon",
      header: () => (
        <Tooltip
          onClick={onClickEvent}
          className="w-full flex items-center justify-center"
          title={
            <>
              <p>{t("iconRemark")}</p>
              <p>{t("iconRemarkDesc")}</p>
            </>
          }
        >
          {t("icon")} <QuestionCircleOutlined className="ml-1" />
        </Tooltip>
      ),
      size: 30,
      cell: ({ row }) => (
        <FormField
          name={`${name}.${row.index}.icon`}
          control={form.control}
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Upload {...field} size="small" className="m-auto" />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
      ),
    },
    {
      accessorKey: "name",
      header: t("name"),
      size: 100,
      cell: ({ row }) => (
        <FormField
          name={`${name}.${row.index}.name`}
          control={form.control}
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input
                  {...field}
                  className="h-8"
                  onBlur={onBlur}
                  onFocus={onBlur}
                  placeholder={t("namePlaceholder")}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
      ),
    },
    {
      accessorKey: "description",
      header: t("desc"),
      size: 100,
      cell: ({ row }) => (
        <FormField
          name={`${name}.${row.index}.description`}
          control={form.control}
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input
                  {...field}
                  className="h-8"
                  placeholder={t("descPlaceholder")}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
      ),
    },
    {
      accessorKey: "url",
      header: () => (
        <Tooltip
          onClick={onClickEvent}
          className="w-full flex items-center justify-center"
          title={
            <>
              <p>{t("linkHint")}</p>
              <p>{t("linkHintContent")}</p>
            </>
          }
        >
          {t("link")} <QuestionCircleOutlined className="ml-1" />
        </Tooltip>
      ),
      size: 100,
      cell: ({ row }) => (
        <FormField
          name={`${name}.${row.index}.url`}
          control={form.control}
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input
                  {...field}
                  className="h-8"
                  placeholder={t("linkPlaceholder")}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
      ),
    },
    {
      accessorKey: "email",
      header: tCommon("operate"),
      size: 55,
      cell: ({ row: { index } }) => (
        <div className="text-right">
          {index ? (
            <Button
              type="button"
              variant="link"
              className="p-0 mr-3"
              onClick={() => move(index, index - 1)}
            >
              {t("top")}
            </Button>
          ) : null}
          {index + 1 === fields.length ? null : (
            <Button
              type="button"
              variant="link"
              className="p-0 mr-3"
              onClick={() => move(index, index + 1)}
            >
              {t("bottom")}
            </Button>
          )}
          <Button
            type="button"
            variant="link"
            onClick={() => remove(index)}
            className="p-0 mr-1 text-red-500"
          >
            {tCommon("delete")}
          </Button>
        </div>
      ),
    },
  ];

  return (
    <>
      <DataTable columns={columns as []} data={fields} />
      <Button
        type="button"
        variant="link"
        onClick={onInsert}
        className="p-0 mr-auto cursor-pointer"
      >
        <PlusCircleOutlined /> {t("insert")}
      </Button>
    </>
  );
};

export default TableEdit;
