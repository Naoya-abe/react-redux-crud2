export const TEXTCHANGE = 'TEXTCHANGE';
// export const TEXTCOUNT = 'TEXTCOUNT';

export const textChange = (textValue, textLength) => {
  return {
    type: TEXTCHANGE,
    textValue: textValue,
    textLength: textLength,
  };
};

// export const textCount = textLength => {
//   return {
//     type: TEXTCOUNT,
//     textLength: textLength,
//   };
// };
