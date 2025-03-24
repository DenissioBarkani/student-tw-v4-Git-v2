import { Container, Title } from "@/components/shared";
import { Button } from "@/components/ui";

export default function ProductPage() {
  return (
    <div>
      <Container className="mt-10">
        <div className="rounded-xl border shadow p-12 mb-12">
          <Title
            className="font-extrabold mb-5"
            size="lg"
            text={"Начни карьеру вместе с МТС Финтех"}></Title>
          <p className="mb-5">
            Получай востребованный опыт, задавай тренды и находи новые решения
            на оплачиваемой стажировке в МТС Финтех
          </p>
          <Button size={"lg"}>Подать заявку</Button>
        </div>

        <div className="p-12 w-full rounded-xl border shadow flex flex-col">
          <Title
            className="font-extrabold mb-8"
            size="lg"
            text={"Реализуй себя в одном из направлений"}></Title>

          <div className="flex flex-row min-h-[400px] max-h-[525px]">
            {/* Вакансии */}
            <ul className="gap-1 flex flex-col min-w-[240px] pr-4 border-r overflow-y-auto custom-scrollbar-left transform scale-x-[-1]"> {/* Добавлен скролл */}
              <li className="p-5 bg-secondary-foreground text-secondary rounded-3xl hover:bg-secondary-foreground/90 transform scale-x-[-1]">
                <h4>Экономика и финансы</h4>
                <span>Ростов на дону</span>
              </li>
              <li className="p-5 rounded-3xl hover:bg-accent transform scale-x-[-1]">
                <h4>Экономика и финансы</h4>
                <span>Ростов на дону</span>
              </li>
              <li className="p-5 rounded-3xl hover:bg-accent transform scale-x-[-1]">
                <h4>Экономика и финансы</h4>
                <span>Ростов на дону</span>
              </li>
              <li className="p-5 rounded-3xl hover:bg-accent transform scale-x-[-1]">
                <h4>Экономика и финансы</h4>
                <span>Ростов на дону</span>
              </li>
              {Array.from({ length: 10 }).map((_, index) => (
                <li key={index} className="p-5 rounded-3xl hover:bg-accent transform scale-x-[-1]">
                  <h4>Экономика и финансы {index + 1}</h4>
                  <span>Ростов на дону</span>
                </li>
              ))}
            </ul>

            {/* Описание */}
            <div className="flex-1 flex flex-col pl-8">
              <div className="mb-7 flex-1 overflow-y-auto custom-scrollbar">
                <div className="mb-5">
                  <h3>Научная деятельность</h3>
                  <span className="text-sm text-muted-foreground">Москва</span>
                </div>
                <p>
                  <b>В этом направлении тебе предстоит заниматься:</b>
                </p>
                <p>
                  - разработкой новых продуктов (смазочные и битумные материалы)
                </p>
                <p>
                  - обеспечением технического развития продуктового ассортимента
                  компании
                </p>
                <p>
                  - проведением переговоров с партнерами по предоставлению
                  технологий
                </p>
                <p>
                  - проведением НИОКР по перспективным направлениям развития
                </p>
                <p>- проведением испытаний продуктов</p>
                <p>
                  <b>Требования:</b>
                </p>
                <p>- высшее химическое образование</p>
                <p>- знание английского языка на уровне не ниже Intermediate</p>
                <p>- готовность работать полный день в офисе</p>
                {/* Добавьте больше текста для тестирования скролла */}
                {Array.from({ length: 10 }).map((_, index) => (
                  <p key={index}>
                    Дополнительный текст для тестирования скролла {index + 1}.
                  </p>
                ))}
              </div>

              {/* Кнопка с фиксированным позиционированием */}
              <div className="bottom-0 pt-4">
                <Button
                  size={"lgx2"}
                  textSize={"lg"}
                  className="w-auto">
                  Подать заявку
                </Button>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}