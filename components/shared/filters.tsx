"use client";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Title } from "./title";
import { cn } from "@/lib/utils";
import { CheckboxFiltersGroup } from "./checkbox-filters-group";

interface Props {
  className?: string;
}

export const Filters: React.FC<Props> = ({ className }) => {
  return (
    <div className={cn("space-y-4", className)}>
      {/* Фильтр по зарплате */}
      <div className="">
        <Title
          size="sm"
          className="mb-5 font-bold"
          text={"Уровень дохода"}>
        </Title>

        <RadioGroup value="any">
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <RadioGroupItem value="any" id="any" />
              <span>Не имеет значения</span>
            </div>

            <div className="flex items-center gap-2">
              <RadioGroupItem value="60k" id="60k" />
              <span>от 60 000 ₽</span>
            </div>

            <div className="flex items-center gap-2">
              <RadioGroupItem value="120k" id="120k" />
              <span>от 120 000 ₽</span>
            </div>

            <div className="flex items-center gap-2">
              <RadioGroupItem value="180k" id="180k" />
              <span>от 180 000 ₽</span>
            </div>
          </div>
        </RadioGroup>
      </div>

      {/* Фильтр по тегам */}
      <CheckboxFiltersGroup title={"Тип работы"}/>
    </div>
  );
};

// <Title text="Фильтрация" size="sm" className="mb-5 font-bold" />

// <div className="flex flex-col gap-4">
//   {/* <FilterCheckbox text="Можно собирать" value="1" />
//   <FilterCheckbox text="Новинки" value="2" /> */}
// </div>

// <div className="mt-5 border-y border-y-neutral-100 py-6 pb-7">
//   <p className="font-bold mb-3">Цена от и до:</p>
//   <div className="flex gap-3 mb-5">
//     {/* <Input type="number" placeholder="0" min={0} max={30000} defaultValue={0} />
//     <Input type="number" min={100} max={30000} placeholder="30000" /> */}
//   </div>
//   {/* <RangeSlider min={0} max={5000} step={10} value={[0, 5000]} /> */}
// </div>
// {/*
// <CheckboxFiltersGroup
//   className="mt-5"
//   title="Формат"
//   limit={6}
//   defaultItems={[
//     {
//       text: 'Сырный соус',
//       value: '1',
//     },
//     {
//       text: 'Моццарелла',
//       value: '2',
//     },
//     {
//       text: 'Чеснок',
//       value: '3',
//     },
//     {
//       text: 'Солённые огурчики',
//       value: '4',
//     },
//     {
//       text: 'Красный лук',
//       value: '5',
//     },
//     {
//       text: 'Томаты',
//       value: '6',
//     },
//   ]}
//   items={[
//     {
//       text: 'Сырный соус',
//       value: '1',
//     },
//     {
//       text: 'Моццарелла',
//       value: '2',
//     },
//     {
//       text: 'Чеснок',
//       value: '3',
//     },
//     {
//       text: 'Солённые огурчики',
//       value: '4',
//     },
//     {
//       text: 'Красный лук',
//       value: '5',
//     },
//     {
//       text: 'Томаты',
//       value: '6',
//     },
//     {
//       text: 'Сырный соус',
//       value: '1',
//     },
//     {
//       text: 'Моццарелла',
//       value: '2',
//     },
//     {
//       text: 'Чеснок',
//       value: '3',
//     },
//     {
//       text: 'Солённые огурчики',
//       value: '4',
//     },
//     {
//       text: 'Красный лук',
//       value: '5',
//     },
//     {
//       text: 'Томаты',
//       value: '6',
//     },
//   ]}
// /> */}
