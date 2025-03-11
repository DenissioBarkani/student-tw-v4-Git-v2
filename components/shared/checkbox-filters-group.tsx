import { cn } from "@/lib/utils";
import React from "react";
import { Title } from "./title";

import { FilterCheckbox } from "./filter-checkbox";

interface Props {
  title: string;
  searchInputPlaceholder?: string;
  className?: string;
  limit?: number;
}

export const CheckboxFiltersGroup: React.FC<Props> = ({
  title,
//   items,
//   limit = 5,
  className,
}) => {
  return (
    <div className={cn("", className)}>
      <Title size="sm" className="mb-5 font-bold" text={title} />

      <div className="space-y-2">
        <FilterCheckbox text={"Удаленная"} value={"1"} count={"18 900"} />
        <FilterCheckbox text={"Офисная работа"} value={"2"} count={"7 543"} />
        <FilterCheckbox text={"Гибридный формат"} value={"3"} count={"4 321"} />
        <button className="text-primary mt-2">+ Показать все</button>
      </div>
    </div>
  );
};
