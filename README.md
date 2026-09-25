# Doodle

Рисуй линии и слушай музыку. Бесплатный визуальный инструмент на $mol, работает офлайн.

Лендинг: https://b-on-g.github.io/doodle/

Приложение: https://b-on-g.github.io/doodle/app/

План в [PLAN.md](PLAN.md).

## Разработка

```bash
cd /path/to/mam && npm start
open http://localhost:9080/bog/doodle/app/-/test.html
```

Сборка: `npx mam bog/doodle/app` и `npx mam bog/doodle/land`. Пуш в `main` собирает оба модуля, кладёт лендинг в корень, приложение в `app/`, пререндерит лендинг и выкладывает на GitHub Pages. Интерфейс по умолчанию на английском (в `view.tree`), русский лежит в `*.locale=ru.json` рядом.
