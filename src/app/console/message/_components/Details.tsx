import {
  Dialog,
  DialogTitle,
  DialogFooter,
  DialogHeader,
  DialogContent,
  DialogDescription,
} from "@/components/ui/dialog";
import { useEffect } from "react";
import { dateToTime } from "@/lib/format";
import { useTranslations } from "next-intl";
import { Button } from "@/components/ui/button";
import { messageRead } from "@/actions/message";
import { FieldTimeOutlined } from "@ant-design/icons";
import { CardDescription, CardTitle } from "@/components/ui/card";

import type { Message } from "model";

interface TypeContactDetailsProps {
  data?: Message;
  onClose(): void;
}

/**
 * @name Details 留言详情
 */
const Details: React.FC<TypeContactDetailsProps> = ({ data, onClose }) => {
  const t = useTranslations("messageDetails");

  useEffect(() => {
    if (!data?.id) return;
    const { id, read } = data;
    read || (id && messageRead({ id }));
  }, [data, data?.read]);

  return (
    <Dialog open={Boolean(data?.id)} onOpenChange={() => onClose()}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle className="text-xl">{t("title")}</DialogTitle>
          <DialogDescription>
            <FieldTimeOutlined className="mr-1 mb-2 mt-1" />
            {dateToTime(data?.createTime)}
          </DialogDescription>
        </DialogHeader>

        <CardTitle className="select-none">{t("name")}</CardTitle>
        <CardDescription>{data?.name}</CardDescription>

        {data?.telephone ? (
          <>
            <CardTitle className="select-none">{t("phone")}</CardTitle>
            <CardDescription>{data?.telephone}</CardDescription>
          </>
        ) : null}

        {data?.email ? (
          <>
            <CardTitle className="select-none">{t("email")}</CardTitle>
            <CardDescription>{data?.email}</CardDescription>
          </>
        ) : null}

        <CardTitle className="select-none">{t("message")}</CardTitle>
        <CardDescription>{data?.content}</CardDescription>

        <DialogFooter>
          <Button onClick={onClose}>{t("back")}</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default Details;
