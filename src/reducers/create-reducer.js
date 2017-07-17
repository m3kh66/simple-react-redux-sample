
export default function createReducer(def, initState = {}) {
    return function (state = initState, action) {
        let fn = def[action.type];
        if (typeof fn === 'undefined') return state;
        else return Object.assign({}, state, fn(state, action));
    };
}
