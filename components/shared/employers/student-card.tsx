import Link from "next/link";
import React from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { StatusStudent } from "./status-student";

interface Props {
  className?: string;
}

export const StudentCard: React.FC<Props> = ({ className }) => {
  return (
    <div
      className={cn(
        "w-full rounded-2xl border bg-card text-card-foreground shadow-sm overflow-hidden p-4",
        className
      )}>
      <article className="student-profile">
        <Link href={`/product/1`} className="block hover:no-underline">
          <div className="grid grid-cols-[140px_1fr] gap-6">
            <div className="h-24">
              <Image
                src="/company/sapka_dlia_kataloga_small.png"
                width={100}
                height={100}
                className="rounded-lg h-full object-cover"
                alt="Фото профиля студента"
              />
            </div>

            <div className="min-h-[96px] flex flex-col justify-between">
              <div className="">
                <h2 className=" text-xl font-medium">Янькин Олег Никитович</h2>
                <div className="text-sm text-muted-foreground">
                  <p>Донской государственный технический университет</p>
                  <div className="flex gap-1">
                    <p>Курс 2 -</p>
                    <p>Направление 00.00.00</p>
                  </div>
                </div>
                <p className="font-medium">От: 10 500 ₽</p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-[140px_1fr] gap-6 pt-4 border-t-1 mt-4">
            <p className="text-sm text-muted-foreground flex items-center">Желаемые вакансии</p>
            <div className="flex flex-wrap gap-4">
              <StatusStudent type="looking" />
              <StatusStudent type="not_looking" />
            </div>
          </div>
          <div className="grid grid-cols-[140px_1fr] gap-6 pt-4 border-t-1 mt-4">
            <p className="text-sm text-muted-foreground flex items-center">Навыки</p>
            <div className="flex flex-wrap gap-4">
              <span className="text-sm px-2 py-1 rounded w-fit bg-chart-6 text-primary-foreground">C ++</span>
              <span className="text-sm px-2 py-1 rounded w-fit bg-chart-6 text-primary-foreground">Командная работа</span>
              <span className="text-sm px-2 py-1 rounded w-fit bg-chart-6 text-primary-foreground">NextJS</span>
            </div>
          </div>
        </Link>
      </article>
    </div>
  );
};
