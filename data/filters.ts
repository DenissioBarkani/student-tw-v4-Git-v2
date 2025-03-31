import { FilterSection } from "@/components/shared/filters";

// Конфигурация для страницы работодателей (поиск студентов)
export const employersFilters: FilterSection[] = [
  {
    title: "Уровень образования",
    type: "radio",
    options: [
      { value: "default", label: "Любой" },
      { value: "bachelor", label: "Бакалавриат" },
      { value: "master", label: "Магистратура" },
      { value: "specialist", label: "Специалитет" },
    ],
  },
  {
    title: "Курс обучения",
    type: "radio",
    options: [
      { value: "default", label: "Любой" },
      { value: "1-2", label: "1-2 курс" },
      { value: "3-4", label: "3-4 курс" },
      { value: "graduate", label: "Выпускник" },
    ],
  },
  {
    title: "Направление",
    type: "checkbox",
    options: [
      { text: "Frontend", value: "frontend" },
      { text: "Backend", value: "backend" },
      { text: "DevOps", value: "devops" },
      { text: "Android", value: "android" },
      { text: "iOS", value: "ios" },
      { text: "Data Science", value: "data-science" },
    ],
  },
  {
    title: "Формат работы",
    type: "checkbox",
    options: [
      { text: "Удаленная работа", value: "remote" },
      { text: "Офис", value: "office" },
      { text: "Гибридный", value: "hybrid" },
    ],
  },
];

// Конфигурация для страницы студентов (поиск компаний)
export const studentsFilters: FilterSection[] = [
  {
    title: "Уровень зарплаты",
    type: "radio",
    options: [
      { value: "default", label: "Любая" },
      { value: "paid-intern", label: "Оплачиваемая стажировка" },
      { value: "40k", label: "от 40 000 ₽" },
      { value: "60k", label: "от 60 000 ₽" },
      { value: "80k", label: "от 80 000 ₽" },
    ],
  },
  {
    title: "Размер компании",
    type: "radio",
    options: [
      { value: "default", label: "Любой" },
      { value: "startup", label: "Стартап (до 50 человек)" },
      { value: "medium", label: "Средняя (50-500 человек)" },
      { value: "large", label: "Крупная (500+ человек)" },
    ],
  },
  {
    title: "Технологии",
    type: "checkbox",
    options: [
      { text: "React", value: "react" },
      { text: "Vue", value: "vue" },
      { text: "Angular", value: "angular" },
      { text: "Node.js", value: "nodejs" },
      { text: "Python", value: "python" },
      { text: "Java", value: "java" },
      { text: "Kotlin", value: "kotlin" },
      { text: "Swift", value: "swift" },
    ],
  },
  {
    title: "Дополнительные условия",
    type: "checkbox",
    options: [
      { text: "Гибкий график", value: "flexible" },
      { text: "Наставничество", value: "mentoring" },
      { text: "Корпоративное обучение", value: "education" },
      { text: "ДМС", value: "insurance" },
    ],
  },
];
