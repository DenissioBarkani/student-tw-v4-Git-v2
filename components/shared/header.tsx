"use client";
import { cn } from "@/lib/utils";
import React from "react";
import { Container } from "./container";
import Image from "next/image";

import { Search, User } from "lucide-react";
// import { SearchInput } from "./search-input";
import Link from "next/link";
import { Button } from "../ui";;

interface Props {
  className?: string;
}

export const Header: React.FC<Props> = ({ className }) => {
  return (
    <header className={cn("border border-b", className)}>
      <Container className="flex items-center justify-between py-8">
        {/* Левая часть */}
        <div className="flex items-center gap-5">
          <Link href="/">
            <div className="flex items-center gap-2">
              <Image src="/logo.png" alt="Logo" width={35} height={35} />
              <div>
                <h1 className="text-2xl uppercase font-black">Практикс тут</h1>
              </div>
            </div>
          </Link>
          <a href="#">Работодателям</a>
          <a href="#">Студентам</a>
        </div>

        <div className="mx-10 flex-1">
          <div
            className={
              "flex rounded-2xl flex-1 justify-between h-11 z-30 relative"
            }>
            <Search className="absolute top-1/2 translate-y-[-50%] left-3 h-5 text-gray-400" />
            <input
              className="rounded-2xl outline-none w-full bg-gray-100 pl-11"
              type="text"
              placeholder="Найти пиццу..."
              defaultValue=""
            />
          </div>
        </div>

        {/* Правая часть */}
        <div className="flex items-center gap-3">
          <Button variant="default" className="flex items-center gap-1">
            <User size={16} />
            Войти
          </Button>
        </div>
      </Container>
    </header>
  );
};
