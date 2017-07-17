
import { createReducer } from 'reducers';
import { INCREASE, DECREASE } from 'actions';

const control = createReducer({
    [INCREASE]: (state, { value }) => ({ value: state.value + value }),
    [DECREASE]: (state, { value }) => ({ value: state.value - value })
}, { value: 0 });

export default control;
