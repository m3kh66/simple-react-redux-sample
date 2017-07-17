import React from 'react';
import propTypes from 'prop-types';

export default class NumberInput extends React.Component {

    render() {
        let { onIncrease, onDecrease, value, level } = this.props;
        return (
            <div>
                <input readOnly={true} value={value} />
                <button onClick={onIncrease}>+{level}</button>
                <button onClick={onDecrease}>-{level}</button>
            </div>
        );
    }

}

NumberInput.propTypes = {
    value: propTypes.number,
    onIncrease: propTypes.func.isRequired,
    onDecrease: propTypes.func.isRequired
};