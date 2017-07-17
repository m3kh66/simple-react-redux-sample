import { createReducer } from 'reducers';
import { INCREASE, DECREASE } from 'actions';

const control = createReducer({
    [INCREASE]: ({ value }, { level }) => ({ value: value + level }),
    [DECREASE]: ({ value }, { level }) => ({ value: value - level })
}, { value: 0 });

export default control;