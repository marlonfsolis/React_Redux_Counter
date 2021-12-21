import React, { useState } from 'react';

import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement, incrementByAmount } from '../../store/reducers/counterSlice';

import CounterControl from '../../components/CounterControl/CounterControl';
import CounterOutput from '../../components/CounterOutput/CounterOutput';

const CounterRedux = () => {

    const dispatch = useDispatch();
    const counterResult = useSelector(state => state.counter.value);


    return (
        <div>
            <h1>Counter Application</h1>
            <p>Counter application to count numbers.</p>

            <CounterOutput value={counterResult} />

            <CounterControl label='Count 1' onClick={() => dispatch(increment())} />
            <CounterControl label='Subtract 1' onClick={() => dispatch(decrement())} />
            <CounterControl label='Count 5' onClick={() => dispatch(incrementByAmount(5))} />
            <CounterControl label='Subtract 5' onClick={() => dispatch(incrementByAmount(-5))} />
        </div>
    );
};

export default CounterRedux;