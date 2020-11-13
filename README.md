# Описание проекта shirabe.ru
## Участники проекта: 
| Имя | Роли | Github | VK | 
| --- | --- | --- |--- | 
| Григоренко Сергей | Руководитель, Разработчик, Архитектор | [miraigajettolab](https://github.com/miraigajettolab) | [donotatme](https://vk.com/donotatme) | 
| Дружинин Владислав  | Работа с документами, Писатель | [TheVaultBoy](https://github.com/TheVaultBoy) | [the_vault_boy](https://vk.com/the_vault_boy) | 
| Магомедов Артур | Написание тестов, Писатель | | [mag.artur](https://vk.com/mag.artur) |

## Определение проблемы:
- Японский - один из самых сложных для изучения языков, особенно учитывая непохожесть его на наш язык. Один из ключевых моментов в изучении языка это изучение слов. Однако, учитывая сложную структуру письменности японского языка для изучения слова нужно сперва изучить знаки (кандзи, 
хирагана, катакана) из которых оно состоит, сами знаки также состоят из более простых элементов.

## Требования: 
* **1)** Разработать систему которая разбивает процесс изучения большого количества кандзи(иероглифов) и слов на последовательный список простых действий: изучение и повторение, используя систему интервального повторения (Spaced Repetition System) и мнемоники. 
* **2)** Для повторения слов также необходимо разработать систему транслитерации кириллицы в хирагану (в ней возможно записать любую последовательность звуков в японском языке). Этот пункт будет модификацией уже существующей библиотеки транслитерации латиницы в хирагану (транслитерация будет по схеме кириллица -> хирагана, а не кириллица -> латиница -> хирагана)
     * *[С репозиторием можно ознакомиться здесь](https://github.com/miraigajettolab/kikana)*
     * [Попробовать транскрипцию можно тут](https://kikana-dev-test.surge.sh) *(В форму вводится кириллица, хирагана появляется в шапке страницы)*
* **3)** Необходимо заполнить разработанную в 1) систему некоторым количеством реальных слов кандзи и радикалов (кандзи состоят из радикалов).

## Архитектура:
[Сейчас неформальную архитектуру можно посмотреть тут](https://github.com/miraigajettolab/Shiraberu/tree/master/Architecture)
##### Используемые технологии:
* Backend будет реализован на ифраструктуре google firebase используя firestore(nosql database) в качестве БД и cloud functions для API
* Пользовательский фронт будет доступен по адресу: https://shirabe.ru
---
