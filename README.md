# reactBeeJee

# pythonBeeJee

Данный репозиторий - часть тестового задания (frontend).
[Репозиторий backend](https://github.com/mkhaikin/pythonBeeJee)

Стек: js, react.

## Тестовое задание.
Необходимо создать приложение-задачник (ToDo list).
Backend на Python (Flask), frontend на React c использованием центрального хранилища (redux, mobx или context provider). К дизайну особых требований нет, должно быть аккуратно.

Задачи состоят из:
- имени пользователя;
- е-mail;
- текста задачи. 

[Полное описание](docs/taskBeeJee.md).


## Тестирование решения.
На момент сдачи проект развернут [self-hosted](https://beejee2.khaykin.app).


### Переменные среды:
Для запуска и тестирования проекта, требуется создать файл `.env` с переменными окружения.\
Пример файла: [`.env.example`](.env.example)

- `VITE_API_PROTOCOL`
- `VITE_API_HOST`
- `VITE_API_PORT`
- `VITE_API_PATH`


### Запуск через docker:
```sh
docker-compose up -d
```
Перед выполнением создайте файл переменных окружения (`.env`).\
Пример файла см. [Переменные среды](#Переменные-среды).
