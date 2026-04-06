"use client";

import { set } from "date-fns";
import { toast } from "sonner";
import { useState } from "react";
import Card from "@/components/Card";
import Select from "@/components/Select";
import { dateToTime } from "@/lib/format";
import DataTable from "@/components/Table";
import Confirm from "@/components/Confirm";
import Tooltip from "@/components/Tooltip";
import { useTranslations } from "next-intl";
import Details from "./_components/Details";
import { Button } from "@/components/ui/button";
import { SyncOutlined } from "@ant-design/icons";
import PageTurning from "@/components/PageTurning";
import LoadingButton from "@/components/LoadButton";
import DateRangePicker from "@/components/DatePicker";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import { deleteMessage, getMessages, messageRead } from "@/actions/message";

import type { Message } from "model";
import type { DateRange } from "react-day-picker";
import type { ColumnDef } from "@tanstack/react-table";

const Contact = () => {
  const t = useTranslations();
  const queryClient = useQueryClient();

  const [message, setMessage] = useState<Message>();
  const [deleteId, setDeleteId] = useState<Message["id"]>();

  const [query, setQuery] = useState<
    Parameters<Awaited<typeof getMessages>>[number]
  >({ current: 1, pageSize: 15 });

  const { data, isFetching } = useQuery({
    queryKey: ["messages", query],
    queryFn: () => getMessages(query),
    placeholderData: (p) => p,
  });

  async function onDelete(id?: Message["id"]) {
    if (id) {
      await deleteMessage({ id });
      toast.success(t("common.deleteSuccess"));
      queryClient.invalidateQueries({ queryKey: ["messages"] });
    }
    setDeleteId(undefined);
  }

  async function onRead(row: Message) {
    await messageRead({ id: row.id });
    toast.success(t("messages.tag"));
    queryClient.invalidateQueries({ queryKey: ["messages"] });
  }

  function onConfirmDelete(row: Message) {
    setDeleteId(row.id);
  }

  function onSelectRead(read: boolean) {
    setQuery((s) => ({ ...s, current: 1, read }));
  }

  function onTimeChange(e?: DateRange) {
    const { from, to } = e || {};
    const endTime = to
      ? set(to, { hours: 23, minutes: 59, seconds: 59 })
      : undefined;
    setQuery((s) => ({
      ...s,
      current: 1,
      startTime: from?.toISOString(),
      endTime: endTime?.toISOString(),
    }));
  }

  function onPageTurningChange(current: number) {
    setQuery((v) => ({ ...v, current }));
  }

  function onClose() {
    setMessage(undefined);
    queryClient.invalidateQueries({ queryKey: ["messages"] });
  }

  const columns: ColumnDef<Message>[] = [
    {
      accessorKey: "name",
      header: t("messages.leaverMessage"),
      cell: ({ row }) => (
        <Tooltip
          maxWidth="15rem"
          className="truncate"
          title={row.original.name}
        >
          {row.original.name}
        </Tooltip>
      ),
    },
    {
      accessorKey: "content",
      header: t("messages.information"),
      cell: ({ row }) => (
        <Tooltip className="w-71.25 truncate" title={row.original.content}>
          {row.original.content}
        </Tooltip>
      ),
    },
    {
      accessorKey: "read",
      size: 50,
      header: t("messages.status"),
      cell: ({ row }) => {
        const { read } = row.original;
        const color = read ? "dark:text-muted-foreground" : "text-red-500";
        return (
          <Tooltip
            type="button"
            disabled={read}
            onClick={() => onRead(row.original)}
            className={`mx-auto block p-0 ${color}`}
            title={read ? undefined : t("messages.readClick")}
          >
            {read ? t("messages.read") : t("messages.unread")}
          </Tooltip>
        );
      },
    },
    {
      accessorKey: "createTime",
      header: t("messages.time"),
      size: 80,
      cell: ({ row }) => (
        <p className="text-center">{dateToTime(row.original.createTime)}</p>
      ),
    },
    {
      accessorKey: "id",
      header: t("common.operate"),
      size: 80,
      cell: ({ row }) => (
        <div className="flex justify-center">
          <Button
            variant="link"
            className="p-"
            onClick={() => setMessage(row.original)}
          >
            {t("common.preview")}
          </Button>
          <Button
            variant="link"
            className="p-2 text-red-500"
            onClick={() => onConfirmDelete(row.original)}
          >
            {t("common.delete")}
          </Button>
        </div>
      ),
    },
  ];

  const SELECT_ITEMS = [
    { value: "true", label: t("messages.read") },
    { value: "false", label: t("messages.unread") },
  ];

  return (
    <Card
      gap={4}
      title={t("messages.title")}
      description={t("messages.description")}
    >
      <div className="flex">
        <Select
          value={query.read}
          items={SELECT_ITEMS}
          onChange={onSelectRead}
          placeholder={t("messages.status")}
        />
        <DateRangePicker onChange={onTimeChange} className="mx-3" />
        <LoadingButton
          onClick={onClose}
          icon={SyncOutlined}
          loading={isFetching}
        />
      </div>
      <DataTable
        data={data?.list}
        loading={isFetching}
        columns={columns as []}
      />
      <PageTurning
        total={data?.total}
        current={query.current}
        pageSize={query.pageSize}
        onChange={onPageTurningChange}
      />
      <Details data={message} onClose={onClose} />
      <Confirm id={deleteId} onOk={onDelete} onCancel={onDelete} />
    </Card>
  );
};

export default Contact;
