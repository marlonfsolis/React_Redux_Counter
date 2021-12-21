import React, { useState } from 'react';

import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement } from '../../store/reducers/counterSlice';

import CounterControl from '../../components/CounterControl/CounterControl';
import CounterOutput from '../../components/CounterOutput/CounterOutput';

const CounterRedux = () => {

    const counterResult = useSelector(state => state.counter.value);


    return (
        <div>
            <h1>Counter Application</h1>
            <p>Counter application to count numbers.</p>

            <CounterOutput value={counterResult} />

            <CounterControl label='Count 1' onClick={increment} />
            <CounterControl label='Subtract 1' onClick={decrement} />
            {/*<CounterControl label='Count 5' onClick={countFive} />*/}
            {/*<CounterControl label='Subtract 5' onClick={subtractFive} />*/}
        </div>
    );
};

export default CounterRedux;