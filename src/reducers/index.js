
import createReducer from 'reducers/define';
import { INCREASE, DECREASE } from 'actions';

const control = createReducer({

    [INCREASE]: (state, { value }) =>
        Object.assign({}, state, { value: state.value + value }),

    [DECREASE]: (state, { value }) =>
        Object.assign({}, state, { value: state.value - value })

}, { value: 0 });

export default control;
