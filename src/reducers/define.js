
export default function reducer(def, initState = {}) {
    return function (state = initState, action) {
        let fn = def[action.type];
        if (typeof fn === 'undefined') return state;
        else return fn(state, action);
    };
}
