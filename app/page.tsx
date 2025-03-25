import {
  Categories,
  CompanyList,
  Container,
  Filters,
  Title,
} from "@/components/shared";
import { studentsFilters } from '@/lib/config/filters';

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

            <div className="flex flex-col gap-16">
              <CompanyList items={[]}></CompanyList>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
}
