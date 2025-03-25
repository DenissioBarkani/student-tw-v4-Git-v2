import { cn } from "@/lib/utils";
import { StudentProjectCard } from "./student-project-card";

interface Props {
  className?: string;
}

export function StudentPortfolioList({ className }: Props) {
  return (
    <div className={cn("space-y-6", className)}>
      <StudentProjectCard title={""} description={""} link={""} tags={[]}></StudentProjectCard>
      <StudentProjectCard title={""} description={""} link={""} tags={[]}></StudentProjectCard>
    </div>
  );
}
