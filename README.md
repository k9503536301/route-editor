# Редактор маршрутов
---

* Новая точка маршрута добавляется с помощью ввода ее названия в текстовом
поле и нажатия Enter. После этого:
  * введенная точка маршрута отображается в конце списка уже добавленных
точек;
  * в текущем центре карты появляется маркер, обозначающий новую точку
маршрута.
* Напротив каждой точки маршрута в списке находится кнопка удаления, при ее
нажатии точка маршрута пропадает из списка, а с карты пропадает ее маркер.
* Порядок точек маршрута в списке можно изменять перетаскиванием как мышью, так и с помощью клавиатуры.
* При удалении точек в списке маршрут на карте автоматически перерисовывается.
* По маркерам на карте проложен маршрут, первая точка в списке — начало маршрута, последняя — конец маршрута.

### Запуск проекта

1. Клонирование репозитория
```sh
git clone https://github.com/k9503536301/route-editor.git
```
2. Установка npm зависимостей
```sh
npm install
```

3. запуск приложения
```sh
npm start
```