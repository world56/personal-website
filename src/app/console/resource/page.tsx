"use client";

import { toast } from "sonner";
import { useState } from "react";
import { filesize } from "filesize";
import Card from "@/components/Card";
import Select from "@/components/Select";
import { dateToTime } from "@/lib/format";
import Tooltip from "@/components/Tooltip";
import DataTable from "@/components/Table";
import Confirm from "@/components/Confirm";
import { useTranslations } from "next-intl";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useQuery } from "@tanstack/react-query";
import { SyncOutlined } from "@ant-design/icons";
import PageTurning from "@/components/PageTurning";
import LoadingButton from "@/components/LoadButton";
import { deleteResource, getResources } from "@/actions/resource";

import { ENUM_COMMON } from "@/enum/common";
import { API_RESOURCE } from "@/config/common";

import type { Resource } from "model";
import type { ColumnDef } from "@tanstack/react-table";

const Resoruce = () => {
  const t = useTranslations("resource");
  const tCommon = useTranslations("common");

  const [deleteId, setDeleteId] = useState<Resource["id"]>();

  const [query, setQuery] = useState<Parameters<typeof getResources>[number]>({
    current: 1,
    pageSize: 15,
  });

  const { data, isFetching, refetch } = useQuery({
    placeholderData: (p) => p,
    queryKey: ["resource", query],
    queryFn: () => getResources(query),
  });

  async function onDelete(id?: Resource["id"]) {
    if (id) {
      await deleteResource({ id });
      toast.success(tCommon("deleteSuccess"));
      refetch();
    }
    setDeleteId(undefined);
  }

  function onPreview(row: Resource) {
    window.open(`${API_RESOURCE}${row.path}`);
  }

  function onNameChange(e: React.ChangeEvent<HTMLInputElement>) {
    setQuery((v) => ({ ...v, current: 1, name: e.target.value }));
  }

  function onConfirmDelete(row: Resource) {
    setDeleteId(row.id);
  }

  function onTypeChange(type: ENUM_COMMON.RESOURCE) {
    setQuery((v) => ({ ...v, type, current: 1 }));
  }

  function onChangeSize(size: "asc" | "desc") {
    setQuery((v) => ({ ...v, size, current: 1 }));
  }

  function onPageTurningChange(current: number) {
    setQuery((v) => ({ ...v, current }));
  }

  const RESOURCE_TYPE = [
    { value: ENUM_COMMON.RESOURCE.IMAGE, label: t("image") },
    { value: ENUM_COMMON.RESOURCE.AUDIO, label: t("audio") },
    { value: ENUM_COMMON.RESOURCE.VIDEO, label: t("video") },
  ];

  const SIZE_SORT = [
    { value: "asc", label: t("minToMax") },
    { value: "desc", label: t("maxToMin") },
  ];

  const RESOURCE_NAME = {
    [ENUM_COMMON.RESOURCE.AUDIO]: t("audio"),
    [ENUM_COMMON.RESOURCE.VIDEO]: t("video"),
    [ENUM_COMMON.RESOURCE.IMAGE]: t("image"),
    [ENUM_COMMON.RESOURCE.UNKNOWN]: t("other"),
  };

  const columns: ColumnDef<Resource>[] = [
    {
      accessorKey: "name",
      header: t("name"),
      cell: ({ row }) => (
        <Tooltip
          maxWidth="23.625rem"
          className="text-left"
          title={row.original.name}
        >
          {row.original.name}
        </Tooltip>
      ),
    },
    {
      size: 50,
      header: t("type"),
      cell: ({ row }) => (
        <p className="text-center py-2">
          {RESOURCE_NAME[row.original.type as ENUM_COMMON.RESOURCE]}
        </p>
      ),
    },
    {
      accessorKey: "size",
      size: 50,
      header: t("occupied"),
      cell: ({ row }) => (
        <p className="text-center py-2">{filesize(row.original.size)}</p>
      ),
    },
    {
      accessorKey: "createTime",
      header: t("createTime"),
      size: 70,
      cell: ({ row }) => (
        <p className="text-center py-2">
          {dateToTime(row.original.createTime)}
        </p>
      ),
    },
    {
      accessorKey: "id",
      header: tCommon("operate"),
      size: 65,
      cell: ({ row }) => (
        <div className="flex justify-center">
          <Button
            variant="link"
            className="p-3"
            onClick={() => onPreview(row.original)}
          >
            {tCommon("preview")}
          </Button>
          <Button
            variant="link"
            className="text-red-500 p-3"
            onClick={() => onConfirmDelete(row.original)}
          >
            {tCommon("delete")}
          </Button>
        </div>
      ),
    },
  ];

  return (
    <Card title={t("title")} gap={4} description={t("description")}>
      <div className="flex">
        <Select
          value={query.type}
          items={RESOURCE_TYPE}
          placeholder={t("type")}
          onChange={onTypeChange}
        />
        <Select
          className="mx-3"
          items={SIZE_SORT}
          value={query.size}
          placeholder={t("size")}
          onChange={onChangeSize}
        />
        <Input
          className="w-60 mr-3"
          onChange={onNameChange}
          placeholder={t("nameDesc")}
        />
        <LoadingButton
          icon={SyncOutlined}
          loading={isFetching}
          onClick={() => refetch()}
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
      <Confirm
        id={deleteId}
        onOk={onDelete}
        onCancel={onDelete}
        description={t("deleteHint")}
      />
    </Card>
  );
};

export default Resoruce;
