"use client";
import {
  Categories,
  CompanyCard,
  Container,
  Filters,
  Title,
} from "@/components/shared";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationPrevious,
  PaginationLink,
  PaginationEllipsis,
  PaginationNext,
} from "@/components/ui/pagination";
import { companiesData } from "@/lib/config/company";
import { studentsFilters } from "@/lib/config/filters";

export default function Home() {
  return (
    <>
      <Container className="mt-10">
        <div className=" mb-8">
          <Title text="Стажировки" size="lg" className="font-extrabold mb-4" />
        </div>
        <div className="flex gap-15 mb-10">
          {/* Фильтрация */}
          <div className="w-[250px]">
            <Filters sections={studentsFilters} />
          </div>
          <div className="flex-1">
            <Categories className="mb-8" />

            <div className="flex flex-col gap-8">
              <div className="grid grid-cols-3 gap-[14px]">
                {companiesData.map((company, index) => (
                  <CompanyCard
                    key={index}
                    id={company.id}
                    name={company.name}
                    imageUrl={company.imageUrl}
                    description={company.description}
                    tags={company.tags}
                    deadline={company.deadline}
                    places={company.places}
                  />
                ))}
              </div>
              <Pagination className=" ">
                <PaginationContent>
                  <PaginationItem>
                    <PaginationPrevious href="#" />
                  </PaginationItem>
                  <PaginationItem>
                    <PaginationLink href="#" isActive>
                      1
                    </PaginationLink>
                  </PaginationItem>
                  <PaginationItem>
                    <PaginationLink href="#">2</PaginationLink>
                  </PaginationItem>
                  <PaginationItem>
                    <PaginationLink href="#">3</PaginationLink>
                  </PaginationItem>
                  <PaginationItem>
                    <PaginationEllipsis />
                  </PaginationItem>
                  <PaginationItem>
                    <PaginationNext href="#" />
                  </PaginationItem>
                </PaginationContent>
              </Pagination>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
}
