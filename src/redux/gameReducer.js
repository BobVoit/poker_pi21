import B2 from '../images/cards/2B.png';
import C2 from '../images/cards/2C.png';
import K2 from '../images/cards/2K.png';
import P2 from '../images/cards/2P.png';
import B3 from '../images/cards/3B.png';
import C3 from '../images/cards/3C.png';
import K3 from '../images/cards/3K.png';
import P3 from '../images/cards/3P.png';
import B4 from '../images/cards/4B.png';
import C4 from '../images/cards/4C.png';
import K4 from '../images/cards/4K.png';
import P4 from '../images/cards/4P.png';
import B5 from '../images/cards/5B.png';
import C5 from '../images/cards/5C.png';
import K5 from '../images/cards/5K.png';
import P5 from '../images/cards/5P.png';
import B6 from '../images/cards/6B.png';
import C6 from '../images/cards/6C.png';
import K6 from '../images/cards/6K.png';
import P6 from '../images/cards/6P.png';
import B7 from '../images/cards/7B.png';
import C7 from '../images/cards/7C.png';
import K7 from '../images/cards/7K.png';
import P7 from '../images/cards/7P.png';
import B8 from '../images/cards/8B.png';
import C8 from '../images/cards/8C.png';
import K8 from '../images/cards/8K.png';
import P8 from '../images/cards/8P.png';
import B9 from '../images/cards/9B.png';
import C9 from '../images/cards/9C.png';
import K9 from '../images/cards/9K.png';
import P9 from '../images/cards/9P.png';
import B10 from '../images/cards/10B.png';
import C10 from '../images/cards/10C.png';
import K10 from '../images/cards/10K.png';
import P10 from '../images/cards/10P.png';
import BJ from '../images/cards/JB.png';
import CJ from '../images/cards/JC.png';
import KJ from '../images/cards/JK.png';
import PJ from '../images/cards/JP.png';
import BQ from '../images/cards/QB.png';
import CQ from '../images/cards/QC.png';
import KQ from '../images/cards/QK.png';
import PQ from '../images/cards/QP.png';
import BK from '../images/cards/KB.png';
import CK from '../images/cards/KC.png';
import KK from '../images/cards/KK.png';
import PK from '../images/cards/KP.png';
import BA from '../images/cards/AB.png';
import CA from '../images/cards/AC.png';
import KA from '../images/cards/AK.png';
import PA from '../images/cards/AP.png';

import { tablesAPI, gameAPI } from '../api/api';


let initialState = {
  cards: [
    {rank: 2, suit: 'B', img: B2},
    {rank: 2, suit: 'C', img: C2},
    {rank: 2, suit: 'K', img: K2},
    {rank: 2, suit: 'P', img: P2},

    {rank: 3, suit: 'B', img: B3},
    {rank: 3, suit: 'C', img: C3},
    {rank: 3, suit: 'K', img: K3},
    {rank: 3, suit: 'P', img: P3},

    {rank: 4, suit: 'B', img: B4},
    {rank: 4, suit: 'C', img: C4},
    {rank: 4, suit: 'K', img: K4},
    {rank: 4, suit: 'P', img: P4},

    {rank: 5, suit: 'B', img: B5},
    {rank: 5, suit: 'C', img: C5},
    {rank: 5, suit: 'K', img: K5},
    {rank: 5, suit: 'P', img: P5},

    {rank: 6, suit: 'B', img: B6},
    {rank: 6, suit: 'C', img: C6},
    {rank: 6, suit: 'K', img: K6},
    {rank: 6, suit: 'P', img: P6},
    
    {rank: 7, suit: 'B', img: B7},
    {rank: 7, suit: 'C', img: C7},
    {rank: 7, suit: 'K', img: K7},
    {rank: 7, suit: 'P', img: P7},

    {rank: 8, suit: 'B', img: B8},
    {rank: 8, suit: 'C', img: C8},
    {rank: 8, suit: 'K', img: K8},
    {rank: 8, suit: 'P', img: P8},

    {rank: 9, suit: 'B', img: B9},
    {rank: 9, suit: 'C', img: C9},
    {rank: 9, suit: 'K', img: K9},
    {rank: 9, suit: 'P', img: P9},

    {rank: 10, suit: 'B', img: B10},
    {rank: 10, suit: 'C', img: C10},
    {rank: 10, suit: 'K', img: K10},
    {rank: 10, suit: 'P', img: P10},

    {rank: 11, suit: 'B', img: BJ},
    {rank: 11, suit: 'C', img: CJ},
    {rank: 11, suit: 'K', img: KJ},
    {rank: 11, suit: 'P', img: PJ},

    {rank: 12, suit: 'B', img: BQ},
    {rank: 12, suit: 'C', img: CQ},
    {rank: 12, suit: 'K', img: KQ},
    {rank: 12, suit: 'P', img: PQ},

    {rank: 13, suit: 'B', img: BK},
    {rank: 13, suit: 'C', img: CK},
    {rank: 13, suit: 'K', img: KK},
    {rank: 13, suit: 'P', img: PK},

    {rank: 14, suit: 'B', img: BA},
    {rank: 14, suit: 'C', img: CA},
    {rank: 14, suit: 'K', img: KA},
    {rank: 14, suit: 'P', img: PA},
  ],
  activePlayers: [],
};




const gameReducer = (state = initialState, action) => {
    switch (action.type) { 
        default: 
            return state;
    }
}



export default gameReducer;


