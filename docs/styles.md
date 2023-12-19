# Стилизация

Используется scss и css-модули. Цвета, межбуквенное расстояния и семейству шрифта(`sans` и `serif`).

## !!! Важно !!!

Любые результаты необходимо проверять на всех вариантах тем: разные цвета, отступы, шрифты.

## SCSS-база

Расположение: `/src/shared/ui/theme/scss`

Базовые стили и хелперы для темизации по цветам, типографии, гридам и тд.

## Конкретная тема

Расположение: `src/theme`

Здесь определяются конкретные значения для переменных цветов, типпографии, гридов и тд.
Например, названия доступных цветов можно посмотреть здесь: `src/theme/scss/_colors.scss`.

Названия цветов "обезцвечены" - `primary`, `success`, и тд. В макете в палитре есть соответсвия(
например `Water Blue` => `primary`).

## Гриды

При необходимости можно использоваться сетку. На первых двух брейкпоинтах 12 столбцов, дальше - 24.

В scss есть хелперы `colsWidth`(считаются только внутренние gap's) и `colsOffset`(+1 завершающий gap).

Использовать внутри flex(row) + flex-wrap по желанию. gap установить в `cssVar(grid-gap)`.

## CSS классы

`import cs from '@core.module.scss';`

- Типография: классы `h1`...`h5`, `t1`..`t4`. см. `src/lib/theme/scss/typography/_variables.scss`.
- Алтернативная типография(размер шрифта на xxl такой же как и на xl): добавляем класс `tfn`.
- Кнопка: `btn` + цвета и размеры, см. `src/theme/scss/ui/_button.scss`.
- Ширина в столбцах: `col{1..24}` и `{sm..xxl}Col{1..24}` для разных брейкпоинтов.
- Отступ в столбцах: `colOffset{1..24}` и `{sm..xxl}ColOffset{1..24}`

`import btn from '@/ui/elements/Button/Button.module.scss';`

- Кнопка: `btn`, `circle`, `{md,lg,xxsl}`, `primary` и тд., см. `src/theme/scss/ui/_button.scss`

## SCSS хелперы

`@use '@theme' as *;`

- Цвета: `themeColor`, `withColorsTheme`.
- Типография: `typographyVariant(sm..xxl)`, `withSpacingTheme`, `withFamilyTheme`.
- Media: `mediaUp(sm..xxl)`, `mediaDown(sm..xxl)`, `arrayProps` и `arrayCssVars`.
- Гриды: `colsWidth` и `colsOffset`.
