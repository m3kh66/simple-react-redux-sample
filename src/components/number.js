
import { connect } from 'react-redux';
import { increase, decrease } from 'actions';
import NumberInput from 'components/number-input';

const mapStateToProps = state => ({ value: state.value });

const mapDispatchToProps = (dispatch, props) => ({
    onIncrease: () => dispatch(increase(1)),
    onDecrease: () => dispatch(decrease(1))
})

const Number = connect(
    mapStateToProps,
    mapDispatchToProps
)(NumberInput);

export default Number;
