import React from 'react';

import chip from '../../images/ico-chip1.png';
import poker1 from '../../images/poker1.png';
import poker2 from '../../images/poker2.png';
import poker3 from '../../images/poker3.png';
import poker4 from '../../images/poker4.png';
import poker5 from '../../images/poker5.png';
import poker6 from '../../images/poker6.png';
import poker7 from '../../images/poker7.png';
import poker8 from '../../images/poker8.png';
import poker9 from '../../images/poker9.png';
import poker10 from '../../images/poker10.png';



const About = (props) => {
    return (
        <div className="about-container">
        <div className="about-container_window">
            <div className="about-container_header">
            <div className="rules">
                Правила игры
                </div>
                <div className="info">
                    <h1>Ставки в покере</h1>
                    <div className = "chip">
                        <img src={chip} alt="chip"/>
                    </div>
                    <div className = "head"> 
                        В игре может участвовать от 4 до 7 человек. Каждому игроку раздается по две карты.
                        После раздачи начинается торговля, которая проходит в несколько раундов.
                        Два игрока по левую руку от дилера делают обязательные ставки, которые взимаются еще до начала торгов. Это делается для того, чтобы стимулировать игроков на активную игру. Эти обязательные ставки называются блайндами. Таковы правила игры в покер.
                        Если вы начинающий игрок, то знайте, что во время раздачи выгоднее иметь позднюю позицию, чтобы отслеживать шаги своих соперников. Это не правила игры в покер, а скорее своеобразный тактический ход.
                        После того, как игроки поставили блайнды, начинается первый этап торговли.
                    </div>
                    <p>
                        Правила игры в покер подразумевают наличие определенных действий, которые игрок совершает в процессе торговли:
                        <li>
                            <b>Поставить</b> – сделать ставку
                        </li>
                        <li>
                            <b>Ответить</b> – поставить столько же, сколько поставил соперник – уравнять
                        </li>
                        <li>
                             <b>Поднять</b>– увеличить ставку – поставить больше, чем соперники
                        </li>
                        <li>
                            <b>Cбросить</b> карты – отказаться от дальнейшего участия в игре и сбросить карты
                        </li>
                        <li>
                            <b>Пропустить</b> – в ситуациях, когда ставка уже была сделана или ставки не были сделаны соперниками – не добавлять ничего в банк, оставить «как есть»
                        </li>
                    </p>
                    <p>    
                    Круг торговли заканчивается тогда, когда все игроки сделали равные ставки или сбросили карты.
                    Если и после этого раунда в раздаче остается больше одного человека, то кладут еще одну общую карту, которую называют терном. Аналогично флопу, после сдачи терна проводится еще один круг торговли.
                    После терна, если это необходимо, кладут последнюю общую карту – ривер.
                    После ривера следует еще один раунд торговли, и если после него на банк претендует два или более игроков, то происходит вскрытие.
                    Комбинации по правилам покера составляются из пяти общих карт и двух закрытых. Когда была осуществлена и уравнена последняя ставка, все оставшиеся в игре люди по очереди начинают открывать для противников свои карты. Из них составляются и оцениваются итоговые выигрышные комбинации. 
                    </p>
                </div>
                <h2>Комбинации покера</h2>
                <div className = "combination">
                    <b>
                        Роял Флэш (Royal flush)
                    </b><p>
                        <p><img src={poker1} className = "img" alt="img"/></p>
                        Высшая комбинация в Покере, пять карт от десяти до туза одной масти
                    </p>
                    <b>
                        Стрит Флэш (Straight-flush)
                    </b><p>
                        <p><img src={poker2} className = "img" alt="img"/></p>
                        Пять последовательных карт одной масти
                    </p>
                    <b>
                        Каре (Four of a Kind)
                    </b><p>
                        <p><img src={poker3} className = "img" alt="img"/></p>
                        Четыре карты одного достоинства
                    </p>
                    <b>
                        Фул Хаус (Full House)
                    </b><p>
                        <p><img src={poker4} className = "img" alt="img"/></p>
                        Три карты одного достоинства и две другого достоинства
                    </p>
                    <b>
                        Флэш (Flush)
                    </b><p>
                        <p><img src={poker5} className = "img" alt="img"/></p>
                        Любые пять карт одной масти
                    </p>
                    <b>
                        Стрит (Straight)
                    </b><p>
                        <p><img src={poker6} className = "img" alt="img"/></p>
                        Пять последовательных карт
                    </p>
                    <b>
                        Сет или тройка (Three of a Kind)
                    </b><p>
                        <p><img src={poker7} className = "img" alt="img"/></p>
                        Три карты одного достоинства
                    </p>
                    <b>
                        Две пары (Two pairs)
                    </b><p>
                        <p><img src={poker8} className = "img" alt="img"/></p>
                        Две карты одного достоинства и две другого достоинства
                    </p>
                    <b>
                        Пара (One Pair)
                    </b><p>
                        <p><img src={poker9} className = "img" alt="img"/></p>
                        Пара из карт одного достоинства
                    </p>
                    <b>
                        Старшая карта (High Card)
                    </b><p>
                        <p><img src={poker10} className = "img" alt="img"/></p>
                        Выигрывает рука с наивысшей картой. В случае, если у двух или более игроков одинаковая комбинация: пара, две пары, тройка или каре, старшая карта или «кикер» в руке игрока определяют победителя. Например: Игрок А выиграл с комбинацией Две пары» по старшей карте Дама.     
                        Правила игры в покер предусматривают десять комбинаций. Наиболее часто встречаются комбинации с 1 по 8. Стрит Флеш и Роял Флеш – достаточно редкие. Собрать Роял Флеш – это настоящая удача. Настолько, что в жизни далеко не каждого игрока такое случается хотя бы раз, ведь вероятность собрать за покерным столом Рояль Флеш равна 1 к 650 000.
                    </p>
                </div>
            </div>
        </div>
    </div>
    )
}

export default About;