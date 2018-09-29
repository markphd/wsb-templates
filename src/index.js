import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import data from './data/db.json'

const Datastore = require('nedb')
const db = new Datastore({});

var doc = data.templates;

doc.map(template => db.insert(template, (err, docs) => err))

db.find({'categories': ['food_and_hospitality']}, function(err, docs) {
  console.log(docs)
})

db.find({'name': 'Family Album'}, function(err, docs) {
  console.log(docs)
})

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
