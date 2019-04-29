export const TEXTCHANGE = 'TEXTCHANGE';
export const TEXTCOUNT = 'TEXTCOUNT';

export const textChange = textValue => ({
  type: 'TEXTCHANGE',
  textValue: textValue,
});

export const textCount = textLength => ({
  type: 'TEXTCOUNT',
  textLength: textLength,
});
