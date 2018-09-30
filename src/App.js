import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import data from './data/db.json'


class App extends Component {
  componentWillMount() {
    const Datastore = require('nedb')
    const db = new Datastore({})  
    var doc = data.templates;

    doc.map(template => db.insert(template, (err, templates) => err))

    db.find({}, (err, templates) => this.setState( (state) => state = {templates} ))
  }


  componentDidMount() {
    console.log("mounted")
  }

  constructor(props) {
    super(props);
    this.state = {
      templates: [{}]
    }
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          {this.state.templates.map( (item) => {
            return <p>{item.name}, {item.id}</p>
          }) }
        </p>
      </div>
    );
  }
}

export default App;