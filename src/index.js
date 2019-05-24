import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';

const FILES = [
    {"fileType": "jpg", "size": "4.3MB", "name": "hobo-on-skis.jpg", "status": "Synced"},
    {"fileType": "mov", "size": "1.3GB", "name": "kitten-bowl.mov", "status": "Uploaded"},
    {"fileType": "txt", "size": "0.9KB", "name": "santas-list.txt", "status": "Uploaded"},
    {"fileType": "mp3", "size": "3.4MB", "name": "chuck-mangione.mp3", "status": "New"},
]

ReactDOM.render(<App files={FILES} />, document.getElementById('root'));