import React from "react";
import { Checkbox } from "../ui/checkbox";


export interface FilterChecboxProps {
  text: string;
  value: string;
  count?: string;
  onCheckedChange?: (checked: boolean) => void;
  checked?: boolean;
}

export const FilterCheckbox: React.FC<FilterChecboxProps> = ({
  text,
  value,
  count,
  onCheckedChange,
  checked,
}) => {
  return (
    <div className="flex items-center gap-2">
      <Checkbox
        onCheckedChange={onCheckedChange}
        checked={checked}
        value={value}
        id={`checkbox-${String(value)}`}
        className=""
      />
      <label htmlFor={`checkbox-${String(value)}`} >{text}</label>
      <label className="ml-auto text-sm text-muted-foreground">{count}</label>
    </div>
  );
};
