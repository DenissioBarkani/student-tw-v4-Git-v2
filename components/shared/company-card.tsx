import Link from "next/link";
import React from "react";
import { Title } from "./title";
import { Button } from "../ui";
import { ArrowRight } from "lucide-react";
import Image from "next/image"; // Импортируем компонент Image
import { cn } from "@/lib/utils";
import { CardHover } from "../ui/card";
import { Tag } from "./tag";

interface CompanyTag {
  id: number;
  text: string;
}

interface Props {
  id: number;
  name: string;
  imageUrl: string;
  description: string;
  tags: CompanyTag[];
  deadline: string;
  places: number;
  className?: string;
}

// const tags = [
//   { id: 1, text: "Оффлайн" },
//   { id: 2, text: "Гибкий график1" },
//   { id: 3, text: "Обучение" },
// ];

export const CompanyCard: React.FC<Props> = ({
  id,
  name,
  imageUrl,
  description,
  tags,
  deadline,
  places,
  className,
}) => {
  return (
    <CardHover className={cn(" ", className)}>
      <article>
        <Link href={`/company/${id}`} className="block hover:no-underline">
          <div className="relative bg-secondary h-56">
            <Image
              src={imageUrl}
              width={1140}
              height={900}
              alt={name}
              className=" h-full object-cover"
            />
          </div>

          <div className="p-3">
            <div className="flex flex-wrap gap-2 mb-2">
              {tags.map((tag) => (
                <Tag
                  className="px-2 py-1 bg-muted rounded-[4px] text-[12px] text-muted-foreground"
                  key={tag.id}
                  variant="default"
                  size="default">
                  {tag.text}
                </Tag>
              ))}
            </div>

            <Title
              text={name}
              size="sm"
              className="text-lg font-medium mb-2.5"
            />

            <p className="text-sm text-muted-foreground line-clamp-4 overflow-hidden mb-3">
              {description}
            </p>

            <time
              dateTime="2023-12-31"
              className="inline-block px-2 py-1 text-[10px] text-time-secondary bg-time-primary rounded-lg">
              Приём заявок до: {deadline}
            </time>

            <div className="flex justify-between items-center">
              <div className="text-base">
                <span className="text-primary font-semibold">{places}</span> мест
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
    </CardHover>
  );
};
