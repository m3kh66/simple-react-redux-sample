
export const INCREASE = 'INCREASE';
export const DECREASE = 'DECREASE';

export function increase(level) {
    return {
        type: INCREASE,
        level
    };
}

export function decrease(level) {
    return {
        type: DECREASE,
        level
    };
}
