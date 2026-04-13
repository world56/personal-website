"use client";

import { toast } from "sonner";
import { useState } from "react";
import Card from "@/components/Card";
import Select from "@/components/Select";
import { dateToTime } from "@/lib/format";
import Confirm from "@/components/Confirm";
import Tooltip from "@/components/Tooltip";
import DataTable from "@/components/Table";
import { useRouter } from "next/navigation";
import { useTranslations } from "next-intl";
import { Input } from "@/components/ui/input";
import { Switch } from "@/components/ui/switch";
import { Button } from "@/components/ui/button";
import { SyncOutlined } from "@ant-design/icons";
import { useClientLang, usePosts } from "@/hooks";
import PageTurning from "@/components/PageTurning";
import LoadingButton from "@/components/LoadButton";
import { PlusCircleOutlined } from "@ant-design/icons";
import { deletePost, updatePostStatus } from "@/actions/post";

import { ENUM_COMMON } from "@/enum/common";

import type { Post } from "model";
import type { ColumnDef } from "@tanstack/react-table";

const Posts = () => {
  const router = useRouter();
  const t = useTranslations();

  const lang = useClientLang();

  const { query, path, data, title, loading, onRefresh, setQuery } = usePosts();

  const [deleteId, setDeleteId] = useState<Post["id"]>();

  function onEdit(row?: Post) {
    router.push(`/console/post/${path}/${row?.id || -1}`);
  }

  async function onStatus({ id }: Post, status: boolean) {
    await updatePostStatus({ id, status: Number(status) });
    toast.success(t("common.saveSuccess"));
    onRefresh();
  }

  function onSelectStatus(status: Post["status"]) {
    setQuery((v) => ({ ...v, current: 1, status }));
  }

  function onTitleChange(e: React.ChangeEvent<HTMLInputElement>) {
    setQuery((v) => ({ ...v, current: 1, title: e.target.value }));
  }

  async function onConfirmDelete(row: Post) {
    setDeleteId(row.id);
  }

  function onSkip(row: Post) {
    window.open(`/${path}/${row.id}`);
  }

  async function onDelete(id?: Post["id"]) {
    if (id) {
      await deletePost({ id });
      toast.success(t("common.deleteSuccess"));
      onRefresh();
    }
    setDeleteId(undefined);
  }

  function onPageTurningChange(current: number) {
    setQuery((v) => ({ ...v, current }));
  }

  const SELECT_ITEMS = [
    { value: ENUM_COMMON.STATUS.ENABLE, label: t("postTable.statusTrue") },
    { value: ENUM_COMMON.STATUS.DISABLE, label: t("postTable.statusFalse") },
  ];

  const columns: ColumnDef<Post>[] = [
    {
      accessorKey: "title",
      header: t("postTable.title"),
      size: 265,
      cell: ({ row }) => (
        <Tooltip
          maxWidth="29rem"
          className="text-left"
          title={row.original.title}
        >
          {row.original.title}
        </Tooltip>
      ),
    },
    {
      accessorKey: "status",
      header: t("postTable.status"),
      size: 60,
      cell: ({ row }) => (
        <Switch
          className="m-auto block"
          onCheckedChange={(bol) => onStatus(row.original, bol)}
          checked={row.original.status === ENUM_COMMON.STATUS.ENABLE}
        />
      ),
    },
    {
      accessorKey: "createTime",
      header: t("postTable.createTime"),
      size: 100,
      cell: ({ row }) => (
        <p className="text-center">{dateToTime(row.original.createTime)}</p>
      ),
    },
    {
      accessorKey: "id",
      header: t("common.operate"),
      size: 100,
      cell: ({ row }) => {
        const { status } = row.original;
        return (
          <div className="flex justify-center">
            <Tooltip
              type="button"
              disabled={!status}
              onClick={() => onSkip(row.original)}
              title={status ? undefined : t("common.deleteDesc")}
              className={`p-2 ${status ? "cursor-pointer!" : "dark:text-gray-500"}`}
            >
              {t("common.preview")}
            </Tooltip>

            <Button
              variant="link"
              className="p-2"
              onClick={() => onEdit(row.original)}
            >
              {t("common.update")}
            </Button>
            <Button
              variant="link"
              className="p-2 text-red-500"
              onClick={() => onConfirmDelete(row.original)}
            >
              {t("common.delete")}
            </Button>
          </div>
        );
      },
    },
  ];

  return (
    <Card
      gap={4}
      title={title}
      description={`${t("postTable.description")}${lang === "en" ? " " : ""}${title}`}
    >
      <div className="flex justify-between">
        <div className="flex">
          <Select
            value={query.status}
            items={SELECT_ITEMS}
            placeholder={t("postTable.status")}
            onChange={onSelectStatus}
          />
          <Input
            className="w-60 mx-3"
            onChange={onTitleChange}
            defaultValue={query.title}
            placeholder={t("postTable.titlePlaceholder")}
          />
          <LoadingButton
            loading={loading}
            icon={SyncOutlined}
            onClick={onRefresh}
          />
        </div>
        <Button className="cursor-pointer" onClick={() => onEdit()}>
          <PlusCircleOutlined />
          {t("postTable.insert")}
        </Button>
      </div>
      <DataTable data={data?.list} loading={loading} columns={columns as []} />
      <PageTurning
        total={data?.total}
        current={query.current}
        pageSize={query.pageSize}
        onChange={onPageTurningChange}
      />
      <Confirm id={deleteId} onOk={onDelete} onCancel={onDelete} />
    </Card>
  );
};

export default Posts;
