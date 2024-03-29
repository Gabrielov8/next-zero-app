# :building_construction: Архитектура :building_construction:

#### :memo: Оглавление: :memo:

1. [Общее](#общее)
2. [Структура](#структура-проекта)
3. [Полезные ссылки](#полезные-ссылки)

## Общее

- Архитектура приложения спроектирована по принципу [FSD-архитектуры](https://feature-sliced.design/ru/) с
  использованием app-роутинга NextJS 14+ версии.

<sup>[[оглавление]](#оглавление)</sup>

## Структура проекта

Директории:

- Уровень роутинга: `src/app` - app-роутинг NextJS;
- Уровень фич: `src/features` - пользователские сценарии, бизнес-логика (например, авторизация, изменение пароля,
  добавление в корзину/избранное, отправка отзыва и т.п.);
- Уровень бизнес-объектов: `src/entities` - сущности с бизнес-логикой из features (например, продукт, корзина, пользователь и тд);
- Уровень виджетов: `src/widgets` - комбинация с бизнес-логикой из features + сущностями из entities (например, листинг
  продуктов(карточек), отзывы);
- Уровень приложения: `src/shared` - настройки приложения, стили, провайдеры, утилиты, хуки. Всё, что может
  использоваться на всех уровнях приложения.

<sup>[[оглавление]](#оглавление)</sup>

## Полезные ссылки

1. https://feature-sliced.design/ru/docs/get-started/overview
2. https://habr.com/ru/companies/inDrive/articles/693768/
3. https://habr.com/ru/companies/piter/articles/744824/
