"use client";
import { cn } from "@/lib/utils";
import { CheckboxFiltersGroup } from "./checkbox-filters-group";
import { MyRadioGroup } from "./my-radio-group";
import React from "react";
import { FilterCheckboxProps } from "./filter-checkbox";

// Типы для опций фильтров
interface RadioOption {
  value: string;
  label: string;
}

export interface FilterSection {
  title: string;
  type: "radio" | "checkbox";
  options: RadioOption[] | FilterCheckboxProps[];
}

interface Props {
  className?: string;
  sections: FilterSection[];
}

export const Filters: React.FC<Props> = ({ className, sections = [] }) => {
  const [radioValues, setRadioValues] = React.useState<Record<number, string>>({

  });


  return (
    <div className={cn("space-y-4", className)}>
      {sections.map((section, index) => (
        <div key={index}>
          {section.type === "radio" ? (
            <MyRadioGroup
              options={section.options as RadioOption[]}
              value={radioValues[index] || "default"}
              onValueChange={(value) =>
                setRadioValues((prev) => ({
                  ...prev,
                  [index]: value,
                }))
              }
              title={section.title}
            />
          ) : (
            <CheckboxFiltersGroup
              title={section.title}
              items={section.options as FilterCheckboxProps[]}
            />
          )}
        </div>
      ))}
    </div>
  );
};
