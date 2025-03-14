/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";
import React from "react";
import { Title } from "./title";
import { cn } from "@/lib/utils";
import { CompanyCard } from "./company-card";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationPrevious,
  PaginationLink,
  PaginationEllipsis,
  PaginationNext,
} from "../ui/pagination";
// import { useIntersection } from "react-use";
// import { useCategoryStore } from "@/store/category";

interface Props {
  title: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  items: any[];
  listClassName?: string;
  className?: string;
  categoryId: number;
}

export const CompanyList: React.FC<Props> = ({
  title,
  items,
  listClassName,
  categoryId,
  className,
}) => {
  // const setActiveCategoryId = useCategoryStore((state) => state.setActiveId);
  // const intersectionRef = React.useRef<HTMLDivElement>(null!);
  // const intersection = useIntersection(intersectionRef, {
  //   threshold: 0.4,
  // });

  // React.useEffect(() => {
  //   if (intersection?.isIntersecting) {
  //     setActiveCategoryId(categoryId);
  //   }
  // }, [categoryId, intersection?.isIntersecting, title]);

  return (
    <div className={className}>
      <div className={cn("grid grid-cols-3 gap-[14px]", listClassName)}>
        <CompanyCard />
        <CompanyCard />
        <CompanyCard />
        <CompanyCard />
        <CompanyCard />
        <CompanyCard />
        <CompanyCard />
        <CompanyCard />
        <CompanyCard />
        <CompanyCard />
      </div>
      <Pagination className="mt-10">
        <PaginationContent>
          <PaginationItem>
            <PaginationPrevious href="#" />
          </PaginationItem>
          <PaginationItem>
            <PaginationLink href="#" isActive>
              1
            </PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationLink href="#">2</PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationLink href="#">3</PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationEllipsis />
          </PaginationItem>
          <PaginationItem>
            <PaginationNext href="#" />
          </PaginationItem>
        </PaginationContent>
      </Pagination>
    </div>
  );
};
