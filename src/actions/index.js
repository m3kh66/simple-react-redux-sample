
export const INCREASE = 'INCREASE';
export const DECREASE = 'DECREASE';

export function increase(value) {
    return {
        type: INCREASE,
        value
    };
}

export function decrease(value) {
    return {
        type: DECREASE,
        value
    };
}
