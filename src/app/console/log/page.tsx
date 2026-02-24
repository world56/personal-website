"use client";

import { set } from "date-fns";
import { toast } from "sonner";
import { useState } from "react";
import Card from "@/components/Card";
import Select from "@/components/Select";
import Visits from "@/components/Visits";
import { dateToTime } from "@/lib/format";
import DataTable from "@/components/Table";
import Tooltip from "@/components/Tooltip";
import { useTranslations } from "next-intl";
import { Input } from "@/components/ui/input";
import ClearLogs from "./_components/ClearLogs";
import { Button } from "@/components/ui/button";
import { useQuery } from "@tanstack/react-query";
import PageTurning from "@/components/PageTurning";
import LoadingButton from "@/components/LoadButton";
import DateRangePicker from "@/components/DatePicker";
import { deleteLog, getLogs, getStatLog } from "@/actions/log";
import { SyncOutlined, QuestionCircleOutlined } from "@ant-design/icons";

import type { Log } from "model";
import type { DateRange } from "react-day-picker";
import type { ColumnDef } from "@tanstack/react-table";

import { ENUM_COMMON } from "@/enum/common";

const Log = () => {
  const t = useTranslations("log");
  const tCommon = useTranslations("common");

  const [query, setQuery] = useState<Parameters<typeof getLogs>[number]>({
    current: 1,
    pageSize: 15,
  });

  const visits = useQuery({
    queryKey: ["log-stat"],
    placeholderData: (p) => p,
    queryFn: () => getStatLog(Intl.DateTimeFormat().resolvedOptions().timeZone),
  });

  const logs = useQuery({
    queryKey: ["logs", query],
    placeholderData: (p) => p,
    queryFn: () => getLogs(query),
  });

  async function onDelete(row: Log) {
    const { timeZone } = Intl.DateTimeFormat().resolvedOptions();
    await deleteLog({ id: row.id, timeZone });
    toast.success(tCommon("deleteSuccess"));
    logs.refetch();
    visits.refetch();
  }

  function onPageTurningChange(current: number) {
    setQuery((v) => ({ ...v, current }));
  }

  function onTypeChange(type: ENUM_COMMON.LOG) {
    setQuery((v) => ({ ...v, type, current: 1 }));
  }

  function onIPChange(e: React.ChangeEvent<HTMLInputElement>) {
    setQuery((v) => ({ ...v, current: 1, ip: e.target.value }));
  }

  function onRefresh() {
    logs.refetch();
    visits.refetch();
  }

  function onDeleteAllLogs() {
    setQuery((e) => ({ ...e, current: 1 }));
    onRefresh();
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

  const LOG_ITEMS = [
    { value: ENUM_COMMON.LOG.LOGIN, label: t("signin") },
    { value: ENUM_COMMON.LOG.ACCESS, label: t("access") },
    { value: ENUM_COMMON.LOG.PASSWORD, label: t("password") },
    { value: ENUM_COMMON.LOG.UNAUTHORIZED, label: t("unauth") },
  ];

  const LOG_NAME = {
    [ENUM_COMMON.LOG.LOGIN]: t("signin"),
    [ENUM_COMMON.LOG.ACCESS]: t("access"),
    [ENUM_COMMON.LOG.PASSWORD]: t("password"),
    [ENUM_COMMON.LOG.UNAUTHORIZED]: t("unauth"),
  };

  const columns: ColumnDef<Log>[] = [
    {
      accessorKey: "ip",
      header: () => (
        <Tooltip title={t("IPDesc")}>
          IP <QuestionCircleOutlined className="ml-1" />
        </Tooltip>
      ),
      cell: ({ row }) => <p className="text-center">{row.original.ip}</p>,
    },
    {
      accessorKey: "description",
      size: 80,
      header: t("code"),
      cell: ({ row }) => (
        <p className="text-center">{row.original.description}</p>
      ),
    },
    {
      accessorKey: "type",
      header: t("type"),
      size: 80,
      cell: ({ row }) => (
        <p className="text-center">
          {LOG_NAME[row.original.type as ENUM_COMMON.LOG]}
        </p>
      ),
    },
    {
      accessorKey: "createTime",
      header: t("createTime"),
      size: 100,
      cell: ({ row }) => (
        <p className="text-center py-2">
          {dateToTime(row.original.createTime)}
        </p>
      ),
    },
    {
      accessorKey: "id",
      header: () => (
        <Tooltip title={t("deleteHint")}>
          {tCommon("operate")} <QuestionCircleOutlined className="ml-1" />
        </Tooltip>
      ),
      size: 45,
      cell: ({ row }) => {
        const disabled = row.original.type !== ENUM_COMMON.LOG.ACCESS;
        return (
          <Button
            variant="link"
            disabled={disabled}
            onClick={() => onDelete(row.original)}
            className={`block m-auto ${disabled ? "" : "text-red-500"}`}
          >
            {tCommon("delete")}
          </Button>
        );
      },
    },
  ];

  return (
    <>
      <Visits {...visits.data} />
      <Card
        gap={4}
        className="mb-10"
        title={t("title")}
        description={t("description")}
      >
        <div className="flex">
          <Select
            items={LOG_ITEMS}
            value={query.type}
            placeholder={t("type")}
            onChange={onTypeChange}
          />
          <Input
            className="w-60 ml-3"
            onChange={onIPChange}
            defaultValue={query.ip!}
            placeholder={t("IPPlaceholder")}
          />
          <DateRangePicker onChange={onTimeChange} className="mx-3" />
          <LoadingButton
            icon={SyncOutlined}
            onClick={onRefresh}
            loading={logs.isFetching}
          />
          <ClearLogs onRefresh={onDeleteAllLogs} />
        </div>
        <DataTable
          columns={columns as []}
          loading={logs.isFetching}
          data={logs?.data?.list}
        />
        <PageTurning
          current={query.current}
          pageSize={query.pageSize}
          total={logs?.data?.total}
          onChange={onPageTurningChange}
        />
      </Card>
    </>
  );
};

export default Log;
