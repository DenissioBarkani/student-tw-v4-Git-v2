"use client";
import {
  Categories,
  Container,
  Filters,
  StudentProfilesList,
  Title,
} from "@/components/shared";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { employersFilters } from '@/lib/config/filters';

// import { Button } from "@/components/ui/button";
// import { Card } from "@/components/ui/card";
// import Link from "next/link";

export default function EmployersPage() {
  return (
    <Container className="mt-10">
      <div className=" mb-8">
        <Title
          text="Найдите талантливых студентов для вашей компании"
          size="lg"
          className="font-extrabold mb-4"
        />
      </div>

      <div className="flex gap-[60px]">
        {/* Фильтрация */}
        <div className="w-[250px]">
          <Filters sections={employersFilters} />
        </div>
        <div className="flex-1">
          <Categories className="mb-8" />

          <div className="mb-5">
            <div className="flex gap-4">
              <Select>
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="Theme" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="light">Light</SelectItem>
                  <SelectItem value="dark">Dark</SelectItem>
                  <SelectItem value="system">System</SelectItem>
                </SelectContent>
              </Select>

              <Select>
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="Theme" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="light">Light</SelectItem>
                  <SelectItem value="dark">Dark</SelectItem>
                  <SelectItem value="system">System</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          <div className="flex flex-col">
            <StudentProfilesList></StudentProfilesList>
          </div>
        </div>
      </div>
    </Container>
  );
}
