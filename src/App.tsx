import { useState } from "react";
import { promises, tags } from "./data";

function Section({
  id,
  children,
  className = "",
}: {
  id?: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <section id={id} className={`mx-auto w-full max-w-5xl px-5 py-14 sm:py-20 ${className}`}>
      {children}
    </section>
  );
}

export default function App() {
  const [active, setActive] = useState("Все");
  const list = active === "Все" ? promises : promises.filter((p) => p.tag === active);

  return (
    <div className="min-h-screen bg-[#fbf9f5] text-stone-800 antialiased">
      {/* nav */}
      <header className="sticky top-0 z-20 border-b border-stone-200/70 bg-[#fbf9f5]/85 backdrop-blur">
        <div className="mx-auto flex max-w-5xl items-center justify-between px-5 py-3">
          <a href="#top" className="font-semibold tracking-tight">
            Алан Дюшембаев
          </a>
          <nav className="hidden gap-6 text-sm text-stone-600 sm:flex">
            <a className="hover:text-stone-900" href="#about">О кандидате</a>
            <a className="hover:text-stone-900" href="#program">Программа</a>
            <a className="hover:text-stone-900" href="#kpop">K-pop</a>
            <a className="hover:text-stone-900" href="#final">Почему я</a>
          </nav>
        </div>
      </header>

      {/* hero */}
      <Section id="top" className="pt-12 sm:pt-16">
        <div className="grid items-center gap-10 sm:grid-cols-[1.2fr_1fr]">
          <div>
            <p className="mb-4 inline-block rounded-full border border-stone-300 bg-white px-3 py-1 text-xs uppercase tracking-widest text-stone-500">
              Выборы президента школы
            </p>
            <h1 className="text-4xl font-semibold leading-tight tracking-tight text-stone-900 sm:text-6xl">
              Алан <br className="hidden sm:block" />
              Дюшембаев
            </h1>
            <p className="mt-5 max-w-lg text-lg leading-relaxed text-stone-600">
              Я не обещаю «изменить школу до неузнаваемости». Я обещаю сделать
              конкретные вещи, которые каждый почувствует: от интернета в
              кабинете до нормальной еды и зеркал в туалетах.
            </p>
            <div className="mt-7 flex flex-wrap gap-3">
              <a
                href="#program"
                className="rounded-xl bg-stone-900 px-5 py-3 text-sm font-medium text-white transition hover:bg-stone-700"
              >
                Посмотреть программу
              </a>
              <a
                href="#about"
                className="rounded-xl border border-stone-300 bg-white px-5 py-3 text-sm font-medium text-stone-700 transition hover:border-stone-400"
              >
                Немного обо мне
              </a>
            </div>
          </div>

          <div className="relative">
            <div className="rounded-3xl border border-stone-200 bg-white p-7 shadow-sm">
              <div className="mb-5 flex h-40 items-center justify-center rounded-2xl bg-gradient-to-br from-amber-100 via-rose-100 to-sky-100 text-6xl">
                🗳️
              </div>
              <dl className="space-y-3 text-sm">
                <div className="flex justify-between border-b border-dashed border-stone-200 pb-2">
                  <dt className="text-stone-500">Кандидат</dt>
                  <dd className="font-medium">Алан Дюшембаев</dd>
                </div>
                <div className="flex justify-between border-b border-dashed border-stone-200 pb-2">
                  <dt className="text-stone-500">Пунктов программы</dt>
                  <dd className="font-medium">{promises.length}</dd>
                </div>
                <div className="flex justify-between">
                  <dt className="text-stone-500">Главный принцип</dt>
                  <dd className="font-medium">Прозрачность</dd>
                </div>
              </dl>
            </div>
          </div>
        </div>
      </Section>

      {/* about */}
      <Section id="about">
        <div className="grid gap-8 sm:grid-cols-[auto_1fr] sm:gap-12">
          <h2 className="text-2xl font-semibold tracking-tight text-stone-900 sm:w-56">
            О кандидате
          </h2>
          <div className="max-w-2xl space-y-4 text-[17px] leading-relaxed text-stone-600">
            <p>
              Привет. Меня зовут Алан, и я такой же ученик, как и ты: тоже стою
              в очереди в столовой, тоже сижу в душном кабинете в мае и тоже
              обхожу школу кругом, потому что старый вход закрыт.
            </p>
            <p>
              Я иду в президенты не ради строчки в резюме. Мне просто надоело
              слышать «ну так уж заведено». Многое из того, что мешает нам
              каждый день, решается разговором с администрацией, нормальной
              организацией и парой недель упорства.
            </p>
            <p>
              Я не смогу сделать всё сразу — и честно об этом говорю. Но я буду
              каждый месяц публиковать отчёт: что получилось, что нет и почему.
              Вы всегда будете знать, чем занимается парламент.
            </p>
          </div>
        </div>
      </Section>

      {/* program */}
      <Section id="program">
        <div className="mb-8">
          <h2 className="text-2xl font-semibold tracking-tight text-stone-900">
            Программа
          </h2>
          <p className="mt-2 text-stone-600">
            16 конкретных пунктов. Никакой воды — можно проверить по каждому.
          </p>
        </div>

        <div className="mb-8 flex flex-wrap gap-2">
          {tags.map((t) => (
            <button
              key={t}
              onClick={() => setActive(t)}
              className={`rounded-full border px-4 py-1.5 text-sm transition ${
                active === t
                  ? "border-stone-900 bg-stone-900 text-white"
                  : "border-stone-300 bg-white text-stone-600 hover:border-stone-400"
              }`}
            >
              {t}
            </button>
          ))}
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          {list.map((p) => (
            <article
              key={p.title}
              className="rounded-2xl border border-stone-200 bg-white p-5 transition hover:-translate-y-0.5 hover:shadow-md"
            >
              <div className="mb-3 flex items-start justify-between gap-3">
                <span className="text-2xl">{p.emoji}</span>
                <span className="rounded-full bg-stone-100 px-2.5 py-1 text-[11px] uppercase tracking-wide text-stone-500">
                  {p.tag}
                </span>
              </div>
              <h3 className="font-semibold text-stone-900">{p.title}</h3>
              <p className="mt-2 text-[15px] leading-relaxed text-stone-600">{p.text}</p>
            </article>
          ))}
        </div>
      </Section>

      {/* kpop */}
      <Section id="kpop">
        <div className="overflow-hidden rounded-3xl border border-rose-200 bg-gradient-to-br from-rose-50 via-fuchsia-50 to-violet-50 p-7 sm:p-10">
          <div className="grid gap-8 sm:grid-cols-[1fr_auto] sm:items-center">
            <div>
              <p className="mb-3 inline-block rounded-full bg-white/70 px-3 py-1 text-xs uppercase tracking-widest text-rose-500">
                Отдельная графа
              </p>
              <h2 className="text-2xl font-semibold tracking-tight text-stone-900">
                Насколько Алан любит K-pop
              </h2>
              <div className="mt-4 max-w-2xl space-y-3 text-[17px] leading-relaxed text-stone-700">
                <p>
                  Честно? Очень. Настолько, что утро начинается не с будильника,
                  а с плейлиста, а дорога до школы — это всегда один и тот же
                  трек на репите.
                </p>
                <p>
                  Алан знает разницу между линиями в группе, помнит даты
                  камбэков лучше, чем даты контрольных, и может за минуту
                  объяснить, почему конкретный бридж — гениальный. Споры о том,
                  кто лучший вокалист, у него длятся дольше, чем урок.
                </p>
                <p>
                  И это не просто хобби: именно из любви к K-pop выросла идея
                  делать в школе больше живых событий — концертов, танцевальных
                  номеров, ковер-баттлов и клубов, где людям не стыдно
                  показывать то, что они любят.
                </p>
              </div>

              <div className="mt-6">
                <div className="mb-2 flex justify-between text-sm text-stone-600">
                  <span>Уровень любви к K-pop</span>
                  <span className="font-medium text-rose-600">99%</span>
                </div>
                <div className="h-3 w-full overflow-hidden rounded-full bg-white/70">
                  <div className="h-full w-[99%] rounded-full bg-gradient-to-r from-rose-400 to-violet-400" />
                </div>
                <p className="mt-2 text-xs text-stone-500">
                  Оставшийся 1% — это сон, и то под саундтрек.
                </p>
              </div>
            </div>
            <div className="text-7xl sm:text-8xl">🎧</div>
          </div>
        </div>
      </Section>

      {/* final */}
      <Section id="final">
        <div className="rounded-3xl bg-stone-900 px-7 py-12 text-center text-stone-100 sm:px-12">
          <h2 className="text-2xl font-semibold tracking-tight text-white sm:text-3xl">
            Голосуй за Алана Дюшембаева
          </h2>
          <p className="mx-auto mt-4 max-w-xl leading-relaxed text-stone-300">
            Школа — это не только уроки. Это место, где мы проводим большую
            часть дня. Давай сделаем его нормальным: тёплым, честным и живым.
          </p>
          <p className="mt-6 text-sm text-stone-400">
            Есть идея, которой нет в программе? Подойди и скажи — правда, добавлю.
          </p>
        </div>
      </Section>

      <footer className="border-t border-stone-200 py-8 text-center text-sm text-stone-500">
        Предвыборная страница · Алан Дюшембаев · Выборы президента школы
      </footer>
    </div>
  );
}
