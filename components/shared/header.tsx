"use client";
import { cn } from "@/lib/utils";
import React from "react";
import { Container } from "./container";
import Image from "next/image";
import { User } from "lucide-react";
import Link from "next/link";
import { Button } from "../ui";
import { SearchAi } from "./search-ai";
import { SearchAiV2 } from "./search-ai-v2";

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
          <Link href="/" className="hover:text-primary transition-colors">
            Стажировки
          </Link>
          <Link
            href="/employers"
            className="hover:text-primary transition-colors">
            Работодателям
          </Link>
        </div>

        <SearchAiV2></SearchAiV2>

        {/* Правая часть */}
        <div className="flex items-center gap-3">
          <Link href="/auth/login">
            <Button variant="default" className="flex items-center gap-1">
              <User size={16} />
              Войти
            </Button>
          </Link>
        </div>
      </Container>
    </header>
  );
};
