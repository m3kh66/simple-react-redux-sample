export const INCREASE = 'INCREASE';
export const DECREASE = 'DECREASE';

export const increase = level => ({ type: INCREASE, level });
export const decrease = level => ({ type: DECREASE, level });