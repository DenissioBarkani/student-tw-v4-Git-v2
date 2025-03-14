import {
  Categories,
  CompanyList,
  Container,
  Filters,
  Title,
} from "@/components/shared";

export default function Home() {
  return (
    <>
      <Container className="mt-10">
        <div className=" mb-8">
          <Title text="Стажировки" size="lg" className="font-extrabold mb-4" />
        </div>
        <div className="flex gap-[60px] mb-10">
          {/* Фильтрация */}
          <div className="w-[250px]">
            <Filters />
          </div>
          <div className="flex-1">
            <Categories className="mb-8" />

            <div className="flex flex-col gap-16">
              <CompanyList title={""} items={[]} categoryId={0}></CompanyList>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
}
