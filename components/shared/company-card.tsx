import Link from "next/link";
import React from "react";
import { Title } from "./title";
import { Button } from "../ui";
import { ArrowRight } from "lucide-react";
import Image from "next/image"; // Импортируем компонент Image
import { cn } from "@/lib/utils";

interface Props {
  // id: number;
  // name: string;
  // price: number;
  // imageUrl: string;
  className?: string;
}

export const CompanyCard: React.FC<Props> = ({
  // id,
  // name,
  // price,
  // imageUrl,
  className,
}) => {
  return (
    <div
      className={cn(
        "w-full rounded-2xl border-2 bg-card text-card-foreground shadow-sm overflow-hidden",
        className
      )}>
      <article>
        <Link href={`/product/1`} className="block hover:no-underline">
          <div className="relative bg-secondary h-56">
            <Image
              src="/company/sapka_dlia_kataloga_small.png"
              width={1140}
              height={900}
              alt="Озон"
              className=" h-full object-cover"
            />
          </div>

          <div className="p-3">
            <div className="flex flex-wrap gap-2 mb-2">
              {["Удаленка", "Гибкий график", "Оффлайн"].map((tag) => (
                <span
                  key={tag}
                  className="inline-block px-2 py-1 bg-muted rounded-[4px] text-[10px] not-last:font-normal text-muted-foreground"
                  aria-label={`Особенность: ${tag}`}>
                  {tag}
                </span>
              ))}
            </div>

            <Title
              text={"Озон"}
              size="sm"
              className="text-lg font-medium mb-2.5"
            />

            <p className="text-sm text-muted-foreground line-clamp-4 overflow-hidden mb-3">
              Стань частью крупнейшей IT-экосистемы страны, участвуй в реальных
              задачах, решение которых принесет пользу клиентам и нашим сотрудникам
            </p>

            <time
              dateTime="2023-12-31"
              className="inline-block px-2 py-1 text-[10px] text-time-secondary bg-time-primary rounded-lg">
              Приём заявок до: 31 декабря
            </time>

            <div className="flex justify-between items-center">
              <div className="text-base">
                <span className="text-primary font-semibold">10</span> мест
              </div>

              <Button
                variant="link"
                size={"link"}
                textSize={"lg"}
                className="gap-1 text-lg">
                Подробнее
                <ArrowRight size={18} className="shrink-0" />
              </Button>
            </div>
          </div>
        </Link>
      </article>
    </div>
  );
};
