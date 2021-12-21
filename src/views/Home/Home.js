import React, { useState } from 'react';

import CounterControl from '../../components/CounterControl/CounterControl';
import CounterOutput from '../../components/CounterOutput/CounterOutput';

const Home = () => {

    const [ counterResult, setCounterResult ] = useState(0);

    const countOne = () => {
        setCounterResult(counterResult + 1);
    };

    const subtractOne = () => {
        setCounterResult(counterResult - 1);
    };

    const countFive = () => {
        setCounterResult(counterResult + 5);
    };

    const subtractFive = () => {
        setCounterResult(counterResult - 5);
    };

    return (
        <div>
            <h1>Counter Application</h1>
            <p>Counter application to count numbers.</p>

            <CounterOutput value={counterResult} />

            <CounterControl label='Count 1' onClick={countOne} />
            <CounterControl label='Subtract 1' onClick={subtractOne} />
            <CounterControl label='Count 5' onClick={countFive} />
            <CounterControl label='Subtract 5' onClick={subtractFive} />
        </div>
    );
};

export default Home;