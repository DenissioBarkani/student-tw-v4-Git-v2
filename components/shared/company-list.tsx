
"use client";
import React from "react";
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
import { companiesData } from '@/lib/config/company';

interface Props {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  // items: any[];
  className?: string;
  listClassName?: string;
}




export const CompanyList: React.FC<Props> = ({
  listClassName,
  className,
}) => {
  return (
    <div className={className}>
      <div className={cn("grid grid-cols-3 gap-[14px]", listClassName)}>
        {companiesData.map((company, index) => (
          <CompanyCard key={index} id={company.id} name={company.name} imageUrl={company.imageUrl} description={company.description} tags={company.tags} deadline={company.deadline} places={company.places} />
         ))}
        
        
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
