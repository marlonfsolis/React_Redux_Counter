import React from 'react';

import './CounterControl.css';

const counterControl = ({ label, onClick }) => (
    <div className="CounterControl" onClick={onClick}>
        {label}
    </div>
);

export default counterControl;