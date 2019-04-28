import {type} from 'os';

//のちにReduser?側でも使うのでexportしておく
export const INCREMENT ='INCREMENT'
export const DECREMENT ='DECREMENT'

//ActionCreator
// export const increment = () => {
//     //typeというKeyと値を宣言
//     return {
//        type: 'INCREMENT';
//     } 
// };


//viewを担当するComponent側で利用するのでexportしておく
// export const decrement = () => {
//     return {
//         type: 'DECREMENT';
//     }
// }


//リファクタリング

export const increment = () => ({
    type: INCREMENT;
});


//viewを担当するComponent側で利用するのでexportしておく
export const decrement = () => ({
    type: DECREMENT;  
})

