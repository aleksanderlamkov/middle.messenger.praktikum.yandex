# Chatty Box
Приложение-мессенджер для аутентифицированных пользователей

## Статус проекта на момент окончания первого спринта:
- Реализован прототип интерфейса в [Figma](https://www.figma.com/file/X6gpLBwpIw0qiFh7bs9p4K/Messenger-UI-Kit?node-id=0%3A1&t=QekbQWmKP3BYQ8MO-1);
- Настроена сборка проекта через Parcel;
- Интегрирован шаблонизатор разметки EJS;
- Настроен постпроцессор стилей PostCSS;
- Реализована базовая структура приложения (верстка), за исключением страницы с чатами;
- Настроен Express-сервер с раздачей статики;
- Произведена синхронизация репозитория с Netlify;

## Текущий статус проекта (второй спринт):
- Произведена замена EJS на кастомный а-ля JSX шаблонизатор через jsxFactory;
- Добавлены классы 'EventBus' и 'Block' для генерации компонентов со стейтом;
- Интегрирован TypeScript;
- Компоненты ещё больше декомпозированы и стандартизированы под единый формат согласно [архитектурной методологии FSD](https://feature-sliced.design/ru/);
- Реализовна базовая версия страницы с чатами;
- Добавлена валидация полей форм на события 'focus', 'blur' и валидация форм на событие 'submit';
- Добавлен класс для работы с запросами 'HTTPTransport' на основе базового XHR JS API;
- Добавлены линтеры:
    - [eslint](https://www.npmjs.com/package/@atlascommunity/eslint-config) (являюсь актуальным мейнтейнером либы)
    - [prettier](https://www.npmjs.com/package/@atlascommunity/prettier-config) (являюсь актуальным мейнтейнером либы)
    - stylelint
- Добавлены алиасы для директорий основных используемых слоев FSD; 
- Реализован базовый роутинг.

## Полезные ссылки
- [Прототип макета в Figma](https://www.figma.com/file/X6gpLBwpIw0qiFh7bs9p4K/Messenger-UI-Kit?node-id=0%3A1&t=QekbQWmKP3BYQ8MO-1)
- [Развернутое приложение на сервисе Netlify](https://chatty-box.netlify.app/)

## Инициализация и запуск
Порядок выполнения команд:
- `yarn` — установка зависимостей
- `yarn build` — сборка стабильной версии
- `yarn start` — запуск express-сервера и parcel
- `yarn run dev` — запуск express-сервера и parcel в dev-режиме
- `yarn run lint` — запуск линтеров
