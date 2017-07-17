import React from 'react';
import propTypes from 'prop-types';

export default class NumberInput extends React.Component {

    render() {
        let { onIncrease, onDecrease, value } = this.props;
        return (
            <div>
                <input readOnly={true} value={value} />
                <button onClick={onIncrease}>Up</button>
                <button onClick={onDecrease}>Down</button>
            </div>
        );
    }

}

NumberInput.propTypes = {
    value: propTypes.number,
    onIncrease: propTypes.func.isRequired,
    onDecrease: propTypes.func.isRequired
};