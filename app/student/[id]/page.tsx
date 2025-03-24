"use client";

import { Container, HardSkillsChart, Tag, Title } from "@/components/shared";
import Image from "next/image";
import Link from "next/link";
import {
  Github,
  Mail,
  Phone,
  GraduationCap,
  Building2,
  BookOpen,
  FileText,
  Calendar,
  ExternalLink,
} from "lucide-react";
import { Button } from "@/components/ui";

export default function StudentProfile() {
  return (
    <Container className="mt-10">
      <div className="flex gap-15">
        {/* Правая колонка с навыками и проектами */}
        <div className="flex-1 min-w-0 ">
          <div className="rounded-lg border bg-white p-6 shadow-sm space-y-8">
            <div className="">
              <Title text="О себе" size="sm" className="mb-4" />
              <p className="text-gray-500 mb-6">
                Увлеченный разработчик, специализирующийся на создании
                веб-приложений. Имею опыт работы с современными технологиями и
                фреймворками. Активно изучаю новые инструменты разработки и
                всегда готов к новым вызовам.
              </p>
            </div>

            <div className="">
              <Title
                text="Основные навыки на анализе портфолио"
                size="sm"
                className="mb-4"
              />

              <div className="grid grid-cols-2 gap-6">
                <div>
                  <h3 className="text-sm mb-2">Soft Skills</h3>
                  {/* <SoftSkillsChart /> */}
                </div>
                <div>
                  <h3 className="text-sm mb-2">Hard Skills</h3>
                  <HardSkillsChart />
                </div>
              </div>
            </div>

            <div className="">
              <Title text="Резюме" size="sm" className="mb-4" />
              <div className="grid grid-cols-3 gap-4">
                <div className="rounded-lg border bg-white p-6 transition-all hover:shadow-md flex flex-col">
                  <div className="flex gap-3 mb-4">
                    <div>
                      <div className="p-2 bg-blue-50 rounded-lg">
                        <FileText className="w-5 h-5 text-blue-600  bg-blue-50 rounded-lg" />
                      </div>
                    </div>

                    <div>
                      <h3 className="font-medium">Web-Разработчик</h3>
                      <div className="flex items-center gap-2 text-sm text-gray-600">
                        <span>От: 20 000₽</span>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-600 mb-4">
                    <Calendar className="w-4 h-4" />
                    <span>Опыт: 2 месяц</span>
                  </div>

                  <Button
                    size={"sm"}
                    variant={"outline"}
                    className="mt-auto text-sm font-mono rounded-lg">
                    Посмотреть
                  </Button>
                </div>
                <div className="rounded-lg border bg-white p-6 transition-all hover:shadow-md flex flex-col">
                  <div className="flex gap-3 mb-4">
                    <div>
                      <div className="p-2 bg-blue-50 rounded-lg">
                        <FileText className="w-5 h-5 text-blue-600  bg-blue-50 rounded-lg" />
                      </div>
                    </div>

                    <div>
                      <h3 className="font-medium">Повар</h3>
                      <div className="flex items-center gap-2 text-sm text-gray-600">
                        <span>От: 10 000₽</span>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-600 mb-4">
                    <Calendar className="w-4 h-4" />
                    <span>Опыт: 1 месяц</span>
                  </div>
                  <Button
                    size={"sm"}
                    variant={"outline"}
                    className="mt-auto text-sm font-mono rounded-lg">
                    Посмотреть
                  </Button>
                </div>
                <div className="rounded-lg border bg-white p-6 transition-all hover:shadow-md flex flex-col">
                  <div className="flex gap-3 mb-4">
                    <div>
                      <div className="p-2 bg-blue-50 rounded-lg">
                        <FileText className="w-5 h-5 text-blue-600  bg-blue-50 rounded-lg" />
                      </div>
                    </div>

                    <div>
                      <h3 className="font-medium">Тестирвщик</h3>
                      <div className="flex items-center gap-2 text-sm text-gray-600">
                        <span>От: 14 000₽</span>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-600 mb-4">
                    <Calendar className="w-4 h-4" />
                    <span>Опыт: 1 месяц</span>
                  </div>

                  <Button
                    size={"sm"}
                    variant={"outline"}
                    className="mt-auto text-sm font-mono rounded-lg">
                    Посмотреть
                  </Button>
                </div>
              </div>
            </div>

            <div className="">
              <Title text="Владение языками" size="sm" className="mb-4" />
              <div className="flex items-center gap-6">
                <div className="flex items-center gap-2">
                  <span className="font-medium">Русский</span>
                  <span className="text-sm text-gray-500">— Родной язык</span>
                </div>
                <div className="h-4 w-px bg-gray-200" />
                <div className="flex items-center gap-2">
                  <span className="font-medium">Английский</span>
                  <span className="text-sm text-blue-600 font-medium">
                    — A1
                  </span>
                </div>
              </div>
            </div>

            <div className="">
              <Title text="Портфолио" size="sm" className="mb-4" />
              <div className="space-y-6">
                <div className="rounded-lg border bg-white p-6 hover:shadow-md transition-all">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="font-semibold text-lg mb-2">
                        Веб-приложение для управления задачами
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        Разработка полнофункционального веб-приложения для
                        управления проектами и задачами. Реализована система
                        авторизации, создание и редактирование задач,
                        отслеживание прогресса.
                      </p>
                    </div>
                    <a
                      href="#"
                      className="p-2 text-muted-foreground hover:text-muted-foreground-dark hover:bg-muted-foreground/5 rounded-lg">
                      <ExternalLink className="w-5 h-5" />
                    </a>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    <Tag variant="blue">React</Tag>
                    <Tag variant="blue">TypeScript</Tag>

                    <Tag variant="blue">NextJS</Tag>
                  </div>
                </div>

                <div className="rounded-lg border bg-white p-6 hover:shadow-md transition-all">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="font-semibold text-lg mb-2">
                        Мобильное приложение для фитнеса
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        Создание мобильного приложения для отслеживания
                        тренировок и питания. Включает в себя создание программ
                        тренировок, отслеживание прогресса и статистику.
                      </p>
                    </div>
                    <a
                      href="#"
                      className="p-2 text-muted-foreground hover:text-muted-foreground-dark hover:bg-muted-foreground/5 rounded-lg">
                      <ExternalLink className="w-5 h-5" />
                    </a>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    <Tag variant="blue">React Native</Tag>
                    <Tag variant="blue">Firebase</Tag>
                    <Tag variant="blue">Redux</Tag>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Левая колонка с основной информацией */}
        <div className="flex-[0_0_300px]">
          <div className="rounded-lg border bg-white p-6 shadow-sm sticky top-4">
            <div className="">
              <div className="relative h-[250] mb-6 rounded-xl overflow-hidden">
                <Image
                  src="/company/sapka_dlia_kataloga_small.png"
                  alt="Фото студента"
                  className="object-cover"
                  fill
                />
              </div>

              {/* Основная информация */}
              <div className="space-y-6">
                {/* ФИО и учебная информация */}
                <div className="space-y-4">
                  <Title text="Янькин Олег Никитович" size="sm" />

                  <div className="space-y-2 text-sm">
                    <div className="flex items-start gap-2 text-gray-600">
                      <Building2 className="w-4 h-4 text-blue-600 shrink-0 mt-0.5" />
                      <span>
                        Донской государственный технический университет
                      </span>
                    </div>
                    <div className="flex items-center gap-2 text-gray-600">
                      <BookOpen className="w-4 h-4 text-blue-600 shrink-0" />
                      <span>Направление 09.03.04</span>
                    </div>
                    <div className="flex items-center gap-2 text-gray-600">
                      <GraduationCap className="w-4 h-4 text-blue-600 shrink-0" />
                      <span>2 курс</span>
                    </div>
                  </div>
                </div>

                {/* Разделитель */}
                <div className="h-px bg-gray-100" />

                {/* Контактная информация */}
                <div className="space-y-4">
                  <div className="">
                    <Title
                      text={"Предпочтительный способ связи"}
                      size="xs"></Title>
                    <Link
                      href="https://t.me/ffasaasdada"
                      target="_blank"
                      className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary">
                      <svg
                        className="w-4 h-4"
                        viewBox="0 0 24 24"
                        fill="currentColor">
                        <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.562 8.161c-.18 1.897-.962 6.502-1.359 8.627-.168.9-.5 1.201-.82 1.23-.697.064-1.226-.461-1.901-.903-1.056-.692-1.653-1.123-2.678-1.799-1.185-.781-.417-1.21.258-1.911.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.041-.041-.249-.024c-.106.024-1.793 1.139-5.062 3.345-.479.329-.913.489-1.302.481-.428-.008-1.252-.241-1.865-.44-.752-.244-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.831-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635.099-.002.321.023.465.141.12.098.153.228.166.331.032.259.019.839-.006 1.461z" />
                      </svg>
                      @ffasaasdada
                    </Link>
                  </div>

                  <div className="space-y-2">
                    <Link
                      href="tel:+79188551358"
                      className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary">
                      <Phone className="w-4 h-4" />
                      +7 (918) 855-1358
                    </Link>

                    <Link
                      href="mailto:yankint@gmail.com"
                      className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary">
                      <Mail className="w-4 h-4" />
                      yankint@gmail.com
                    </Link>

                    <Link
                      href="https://github.com/yankint"
                      target="_blank"
                      className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary">
                      <Github size={16} />
                      github.com/yankint
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
}
