import React from 'react';
import ReactDOM from 'react-dom';
import Stream from './components/Stream';
import StreamStateful from './components/Stream-stateful';

const title = "SC client ready!";
const tracks = [
  {
    title: 'Some track'
  },
  {
    title: 'Some other track'
  }
];

ReactDOM.render(
    <div>
        <Stream tracks={tracks} />
        <StreamStateful tracks={tracks}/>
    </div>,
    document.getElementById('app')
);

module.hot.accept();