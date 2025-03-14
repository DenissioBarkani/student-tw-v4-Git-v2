import { cn } from "@/lib/utils";

export type StudentStatusType = "not_looking" | "looking";

interface StatusStudentProps {
  type: StudentStatusType;
  className?: string;
}

const STATUS_STYLES = {
  not_looking: "bg-orange-50 text-orange-700",
  looking: "bg-green-50 text-green-700",
} as const;

const STATUS_TEXT = {
  not_looking: "Не ищет стажировку",
  looking: "В поиске стажировки",
} as const;

export const StatusStudent = ({ type, className }: StatusStudentProps) => {
  return (
    <span
      className={cn(
        "text-sm px-2 py-1 rounded w-fit",
        STATUS_STYLES[type],
        className
      )}>
      {STATUS_TEXT[type]}
    </span>
  );
};
