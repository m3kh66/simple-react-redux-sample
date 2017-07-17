import { connect } from 'react-redux';
import { increase, decrease } from 'actions';
import NumberInput from 'components/number-input';

const mapStateToProps = state => ({ value: state.value });

const mapDispatchToProps = (dispatch, props) => ({
    onIncrease: () => dispatch(increase(props.level || 1)),
    onDecrease: () => dispatch(decrease(props.level || 1))
})

const Number = connect(
    mapStateToProps,
    mapDispatchToProps
)(NumberInput);

export default Number;