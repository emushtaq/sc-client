import React from 'react';
import ReactDOM from 'react-dom';

const title = "SC client ready!";

ReactDOM.render(
    <div>{title}</div>,
    document.getElementById('app')
);

module.hot.accept();