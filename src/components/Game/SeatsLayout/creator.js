import styled from 'styled-components';

/**
 * Добавляет к объектам индексы, начиная с нуля
 * 
 * @param  {array} collection - список объектов
 * @returns {array} - те же с объекты со свойством ind - индексом, начиная с 1
 */
function cssIndex(collection) {
  return collection.map((item, index) => ({
    ind: index + 1,
    ...item,
  }));
}

/**
 * Меняет базис разметки
 * 
 * @param  {array} layout - список обьектов формата {x: 1, y: 1}
 * @returns {array} - layout с базисом в верхнем левом углу
 */
function changeBasis(layout) {
  return layout.map((coords, ind) => ({
    ind: ind + 1,
    x: 69 * (1 - coords.x),
    y: 70 * (1 + coords.y),
  }));
}

/**
 * Создает React компонент, размещающий потомков по заданным координатам
 * 
 * @param  {array} layout - список обьектов формата {ind: 1, x: 1, y: 1},
 * индексы нумеруются с 1
 * @returns {object} - React компонент
 */
function makeBoxWithLayout(layout) {
  return styled.div`
    > * {
      position: absolute;
      transform: translate(-200%, -130%);
    }

    ${() =>
    layout
      .map(
        seat => `
      > *:nth-child(${seat.ind}) {
        left: ${seat.x}%;
        top: ${seat.y}%;
      }
      `,
      )
      .join('\n')};
  `;
}

export default function createLayout(generateCoords) {
  return makeBoxWithLayout(cssIndex(changeBasis(generateCoords())));
}
