"use client";
import { cn } from "@/lib/utils";
// import { useCategoryStore } from "@/store/category";
import React from "react";

interface Props {
  className?: string;
}

const cats = [
  { id: 1, name: "IT" },
  { id: 2, name: "RT" },
  { id: 3, name: "BIM" },
  //  {id: 4, name: "Коктейли"},
  //  {id: 5, name: "Кофе" },
  //  {id: 6, name: "Напитки" },
  //  {id: 7, name:  "Десерты"},
  //  {id: 8, name: "Десерты" },
];

export const Categories: React.FC<Props> = ({ className }) => {
  // const categoryActiveId = useCategoryStore((state) => state.activeId);
  const activeIndex = 1;
  return (
    <div
      className={cn(
        "inline-flex gap-1 bg-gray-50 px-1 rounded-2xl h-14 items-center",
        className
      )}>
      {cats.map(({ name, id }, index) => (
        <a
          className={cn(
            "flex items-center font-bold h-11 rounded-2xl px-5",
            activeIndex == id &&
              "bg-white shadow-md shadow-gray-200 text-primary"
          )}
          href={`/#${name}`}
          key={index}>
          <button>{name}</button>
        </a>
      ))}
    </div>
  );
};
