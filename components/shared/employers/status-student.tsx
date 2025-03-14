import { cn } from "@/lib/utils";

export type StudentStatusType = "not_looking" | "looking" | "test";

interface StatusStudentProps {
  type: StudentStatusType;
  className?: string;
}


const STATUS_TEXT = {
  not_looking: "Web-разработчик",
  looking: "Повар",
  test: "Тестировщик",
} as const;

export const StatusStudent = ({ type, className }: StatusStudentProps) => {
  return (
    <span
      className={cn(
        "text-sm px-2 py-1 rounded w-fit bg-primary/80 text-primary-foreground",
        className
      )}>
      {STATUS_TEXT[type]}
    </span>
  );
};
