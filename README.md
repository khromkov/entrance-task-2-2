<img src="https://user-images.githubusercontent.com/6161300/44541504-d46d8f80-a712-11e8-8993-9c77b270e57e.png" width="128">

# Задание 2 — сверстать макет

[DEMO](https://khromkov.github.io/entrance-task-2-2/)

## todo

1.  Выпилить шаблоны в продакшене из js
2.  ~~Сделать селект~~
3.  ~~Сделать фильтрацию списка устройств~~
4.  Инициализировать форму изменения параметром работы устройства и сохранять результат

## Описание

В проекте одна зависимость pepjs - чтобы писать кроссплатформенный код для обработки событий.
Использовал es6 шаблонизацию и свой написанный для этого задания костыльный "фреймворк", вдохновленный реактом. Код, конечно, грязноватый получился, на мой взгляд.

### Баги

Для модальных окон, чтобы на ios не прокручивался body, я использовал метод через position: fixed.
Проблема заключается в следующем. При скролле в safari строка адреса становится меньше. И когда мы нажимаем на карточку, body меняет свою высоту на 100vh и position: fixed. И получаем неприятный скачек размера viewport браузера. Решения пока не нашел. Надеюсь получить feedback по этому решению.

### Тестирование

Не смотрел только в edge, так как негде.

### Что не сделано в макете

Не сделал непонятную иконку-стрелку в главном блоке.
![image](https://user-images.githubusercontent.com/6161300/44542365-46df6f00-a715-11e8-9956-47447ae3fec3.png)

Не понял я дизайнерской мысли. Все же и так классно, если нарисовать у этой карточки иконку слева вверху, сразу понятно, что это за сущность и тут можно скролить.
