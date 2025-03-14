"use client";
import {
  Categories,
  Container,
  Filters,
  StudentVacanciesList,
  Title,
} from "@/components/shared";
// import { Button } from "@/components/ui/button";
// import { Card } from "@/components/ui/card";
// import Link from "next/link";

export default function EmployersPage() {
  return (
    <Container className="mt-10">
      <div className=" mb-8">
      <Title text="Найдите талантливых студентов для вашей компании" size="lg" className="font-extrabold mb-4" />
      </div>

      <div className="flex gap-[60px] mb-10">
        {/* Фильтрация */}
        <div className="w-[250px]">
          <Filters />
        </div>
        <div className="flex-1">
          <Categories className="mb-8" />

          <div className="flex flex-col gap-16">
            <StudentVacanciesList></StudentVacanciesList>
            
          </div>
        </div>
      </div>
    </Container>
  );
}