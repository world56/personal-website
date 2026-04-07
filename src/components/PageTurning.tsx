"use client";

import { cn } from "@/lib/utils";
import {
  Pagination,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationContent,
  PaginationEllipsis,
  PaginationPrevious,
} from "./ui/pagination";

interface PaginationWithLinksProps {
  current: number;
  pageSize: number;
  total?: number;
  radius?: boolean;
  className?: string;
  onChange?(current: number): void;
}

const PaginationWithLinks: React.FC<PaginationWithLinksProps> = ({
  radius,
  current,
  pageSize,
  onChange,
  className = "",
  total = 0,
}) => {
  const totalPageCount = Math.ceil(total / pageSize);
  const style = cn("cursor-pointer", radius && "rounded-full");

  const renderPageNumbers = () => {
    const items: React.ReactNode[] = [];
    const maxVisiblePages = 5;

    if (totalPageCount <= maxVisiblePages) {
      for (let i = 1; i <= totalPageCount; i++) {
        items.push(
          <PaginationItem key={i}>
            <PaginationLink 
              isActive={current === i} 
              className={style}
              onClick={() => onChange?.(i)} // onClick 必须在这里
            >
              {i}
            </PaginationLink>
          </PaginationItem>,
        );
      }
    } else {
      // 1. 第一页
      items.push(
        <PaginationItem key={1}>
          <PaginationLink isActive={current === 1} className={style} onClick={() => onChange?.(1)}>1</PaginationLink>
        </PaginationItem>,
      );

      if (current > 3) {
        items.push(<PaginationItem key="ellipsis-start"><PaginationEllipsis /></PaginationItem>);
      }

      // 2. 中间页
      const start = Math.max(2, current - 1);
      const end = Math.min(totalPageCount - 1, current + 1);
      for (let i = start; i <= end; i++) {
        items.push(
          <PaginationItem key={i}>
            <PaginationLink isActive={current === i} className={style} onClick={() => onChange?.(i)}>{i}</PaginationLink>
          </PaginationItem>,
        );
      }

      if (current < totalPageCount - 2) {
        items.push(<PaginationItem key="ellipsis-end"><PaginationEllipsis /></PaginationItem>);
      }

      // 3. 最后一页
      items.push(
        <PaginationItem key={totalPageCount}>
          <PaginationLink isActive={current === totalPageCount} className={style} onClick={() => onChange?.(totalPageCount)}>
            {totalPageCount}
          </PaginationLink>
        </PaginationItem>,
      );
    }
    return items;
  };

  return (
<Pagination className={className}>
      <PaginationContent>
        <PaginationItem>
          <PaginationPrevious
            // 关键点：w-9 h-9 强制图标居中，[&>span]:hidden 隐藏文字
            className={cn(style, "w-9 h-9 p-0 [&>span]:hidden", current === 1 && "pointer-events-none opacity-50")}
            onClick={() => current > 1 && onChange?.(current - 1)}
          />
        </PaginationItem>
        
        {renderPageNumbers()}
        
        <PaginationItem>
          <PaginationNext
            // 同理
            className={cn(style, "w-9 h-9 p-0 [&>span]:hidden", current === totalPageCount && "pointer-events-none opacity-50")}
            onClick={() => current < totalPageCount && onChange?.(current + 1)}
          />
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  );
};

export default PaginationWithLinks;