import styled from 'styled-components';

/** 
* Добавляет к объектам индексы начиная с нуля
* @param {array} collection
* @return {array} - те же самые объекты, к которым добавляется свойство ind (индекс), начиная с 1
*/

const cssIndex = (collection) => {
    return collection.map((item, index) => ({
        ind: index + 1,
        ...item
    }));
}

/**
* Меняет базис разметки
* @param  {array} layout - список обьектов формата {x: 1, y: 1}
* @returns {array} - layout с базисом в верхнем левом углу
*/

const changeBasis = (layout) => {
    return layout.map((coords, ind) => ({
        ind: ind + 1,
        x: 50 * (1 - coords.x),
        y: 50 * (1 + coords.y)
    }))
}


/**
* Создает React компонент, размещающий потомков по заданным координатам
* @param  {array} layout - список обьектов формата {ind: 1, x: 1, y: 1},
* индексы нумеруются с 1
* @returns {object} - React компонент
*/


const makeBoxWithLayout = layout => {
    return styled.data`
        > * {
            position: absolute;
            transform: translate(-50%, -50%);
        }
        
        ${() => {
            layout.map(seat => `
                > *:nth-child(${seat.ind}) {
                    left: ${seat.x}%;
                    top: ${seat.y}%;
                }`, 
            ).join('\n')
        }};
    `;
}

const createLayout = (generateCoords) => {
    return makeBoxWithLayout(cssIndex(changeBasis(generateCoords())));
}

export default createLayout;