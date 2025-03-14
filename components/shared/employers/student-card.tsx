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
          <header className="grid grid-cols-[140px_1fr] gap-6">
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
              <div>
                <h2 className="text-primary text-2xl font-medium">Frontend</h2>
                <div className="flex gap-2 text-sm text-muted-foreground">
                  <p>Курс 2</p>
                  <p>Направление 00.00.00</p>
                </div>
                <p className="font-medium mt-1">От: 1 500 ₽</p>
              </div>

              <StatusStudent type="looking" className="mt-4" />
            </div>
          </header>

          <div className="grid grid-cols-[140px_1fr] gap-6 border-b pt-4 pb-2">
            <p className="text-muted-foreground">Опыт работы</p>
            <p>2 месяца</p>
          </div>

          <div className="grid grid-cols-[140px_1fr] gap-6 pt-2">
            <dt className="text-muted-foreground">Последнее место работы</dt>
            <div>
              <p className="font-medium">Яндекс</p>
              <div className="flex gap-2 text-sm text-muted-foreground">
                <span>Стажер</span>
                <span>Июнь 2017 — Сентябрь 2017</span>
              </div>
            </div>
          </div>
        </Link>
      </article>
    </div>
  );
};
