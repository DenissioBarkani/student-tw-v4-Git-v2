/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";

import { CompanyCard, CompanyProps } from "@/components/shared/company-card";
import { PaginationWithLinks } from "@/components/ui/pagination-with-links";
import fetchCompany from "@/lib/api";
import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import { Categories, Container, Filters, Title } from "@/components/shared";
import { studentsFilters } from "@/data/filters";
import { useCompanyContext } from "@/lib/hooks/CompanyContext";

import { X } from "lucide-react";

interface PaginationData {
  pages: number;
  totalItems: number;
}

export default function Home() {
  const searchParams = useSearchParams();

  const [loading, setLoading] = useState(true);
  const currentPage = parseInt(searchParams.get("page") || "1");
  const perPage = 12;

  // const [products, setProducts] = useState<CompanyProps[]>([]);
  const { companies, setCompanies, search, setSearch } = useCompanyContext();

  // const [perPage, setPerPage] = useState(12);
  // const perPage = parseInt(searchParams.get("pageSize") || "9");
  const [paginationData, setPaginationData] = useState<PaginationData>({
    pages: 0,
    totalItems: 0,
  });

  // useEffect(() => {
  //   setPaginationData({
  //     pages: Math.ceil(companies.length / 12),
  //     totalItems: companies.length,
  //   });
  // }, [companies]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const data = await fetchCompany(currentPage, perPage);
        console.log(data);

        setCompanies(data.companyData);
        setPaginationData({
          pages: data.pages,
          totalItems: data.items,
        });
        setSearch(false);
      } catch (error) {
        console.error("Error loading products:", error);
        setCompanies([]);
        setSearch(false);
      } finally {
        setLoading(false);
      }
    };
    if (!search) {
      fetchData();
    }
  }, [currentPage, search, setCompanies, setSearch]);

  return (
    <Container className="mt-10">
      <div className="mb-8">
        <Title text="Стажировки" size="lg" className="font-extrabold mb-4" />
      </div>
      <div className="flex gap-15 mb-10">
        <div className="w-[250px]">
          <Filters sections={studentsFilters} />
        </div>
        <div className="flex-1">
          {/* <Categories className="mb-8" /> */}

          {/* <Select 
            defaultValue="9"
            onValueChange={(value) => setPerPage(Number(value))}>
            <SelectTrigger size="sm">
              <SelectValue placeholder="Количество профилей" />
            </SelectTrigger>
            <SelectContent className="min-w-[3rem]" >
              <SelectItem   value="9">9</SelectItem>
              <SelectItem value="12">12</SelectItem>
              <SelectItem value="15">15</SelectItem>
            </SelectContent>
          </Select> */}

          <div className="flex flex-col gap-8">
            {loading && <div className="h-screen">loading...</div>}

            {search && (
              <>
                <div className="flex items-end justify-between">
                  <div className="text-muted-foreground">
                    Найдено результатов: {companies.length}
                  </div>
                  <button
                    onClick={() => setSearch(false)}
                    className="flex items-center gap-2 px-3 py-2 rounded-md bg-secondary hover:bg-secondary-foreground/10 text-secondary-foreground/70 transition-colors"
                    title="Сбросить поиск">
                    <X size={16} />
                    Сбросить поиск
                  </button>
                </div>
              </>
            )}
            {!loading && (
              <div className="grid grid-cols-3 gap-[14px]">
                {companies.map((company, index) => (
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
            )}

            {!search && paginationData && paginationData.pages > 1 && (
              <PaginationWithLinks
                page={currentPage}
                pageSize={perPage}
                totalCount={paginationData.totalItems}
                // pageSizeSelectOptions={{
                //   pageSizeOptions: [9, 12, 15],
                // }}
              />
            )}
          </div>
        </div>
      </div>
    </Container>
  );
}
