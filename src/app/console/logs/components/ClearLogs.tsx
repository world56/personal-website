import { toast } from "sonner";
import { useState } from "react";
import Confirm from "@/components/Confirm";
import { useTranslations } from "next-intl";
import { deleteAllAccessLogs } from "@/app/api";
import { Button } from "@/components/ui/button";
import { DeleteOutlined } from "@ant-design/icons";

interface TypeClearLogsProps {
  onRefresh(): void;
}

/**
 * @name ClearLogs 清空日志
 */
const ClearLogs: React.FC<TypeClearLogsProps> = ({ onRefresh }) => {
  const t = useTranslations("log");
  const tCommon = useTranslations("common");

  const [id, setId] = useState<number>();

  async function onConfirm() {
    await deleteAllAccessLogs();
    onState();
    onRefresh();
    toast.success(tCommon("deleteSuccess"));
  }

  function onState() {
    setId((b) => Number(!b));
  }

  return (
    <>
      <Button variant="outline" className="ml-3" onClick={onState}>
        <DeleteOutlined />
        {t("clearLogs")}
      </Button>
      <Confirm
        id={id}
        onOk={onConfirm}
        onCancel={onState}
        description={t("clearLogsHint")}
      />
    </>
  );
};

export default ClearLogs;
