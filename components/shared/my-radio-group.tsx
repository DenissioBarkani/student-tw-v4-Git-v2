import React from "react";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { cn } from "@/lib/utils";
import { Title } from "./title";

interface SalaryOption {
  value: string;
  label: string;
}

interface Props {
  className?: string;
  options: SalaryOption[];
  value: string;
  title: string;
  onValueChange: (value: string) => void;
}

export const MyRadioGroup: React.FC<Props> = ({
  className,
  options,
  value,
  title,
  onValueChange,
}) => {
  return (
    <>
      <Title
        size="sm"
        className="mb-5 font-bold"
        text={title}></Title>

      <RadioGroup value={value} onValueChange={onValueChange}>
        <div className={cn("space-y-2", className)}>
          {options.map((option) => (
            <div key={option.value} className="flex items-center gap-2">
              <RadioGroupItem value={option.value} id={option.value} />
              <span>{option.label}</span>
            </div>
          ))}
        </div>
      </RadioGroup>
    </>
  );
};
