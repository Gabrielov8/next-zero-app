# :nail_care: Стилизация :nail_care:

#### :memo: Оглавление: :memo:

1. [Общее](#общее)
2. [SCSS-база](#SCSS-база)
3. [Темизация](#темизация)
4. [CSS-классы](#css-классы)
5. [SCSS-хелперы](#использование-scss-хелперов)

## SCSS-база

Расположение: `/src/shared/ui/theme/scss`

Базовые стили и хелперы для темизации по цветам, типографии, гридам и тд.

## Темизация

Расположение: `src/shared/ui/theme`

Здесь определяются конкретные значения для переменных цветов, типографии и тд.
Чтобы поменять цветовую базу требуется задать цвета в JSON-файле: `src/shared/ui/theme/variables/colors.json`.
Чтобы поменять брейкпоинты требуется задать их в JSON-файле: `src/shared/ui/theme/variables/media.json`.

После чего запустить скрипт на генерацию SCSS-переменных `yarn run variables`.

Названия цветов "обезцвечены" - `primary`, `success`, и т.д. В макете в палитре есть соответсвия (
например `Water Blue` => `primary`).

## CSS классы

`import cs from '@core.module.scss';`

- Типография: классы `h1`...`h5`, `t1`..`t4`. см. `src/shared/ui/theme/scss/typography/_variables.scss`.
- Алтернативная типография(размер шрифта на xxl такой же как и на xl): добавляем класс `tfn`.
- Кнопка: `btn` + цвета и размеры, см. `src/theme/scss/ui/_button.scss`.

`import { Button } from '@/shared/ui/components/Button';`

- Кнопка: `btn`, `circle`, `{md,lg,xxsl}`, `primary` и тд., см. `src/shared/ui/components/Button/Button.module.scss`

## Использование SCSS-хелперов

`@use '@theme' as *;`

- Цвета: получить цвет из палитры `getColor(названия_цвета_из_палитры)`.
- Типография: `typographyVariant(sm..xxl)`.
- Media: `mediaUp(sm..xxl)`, `mediaDown(sm..xxl)`, `arrayProps` и `arrayCssVars`.
