import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Fade from 'react-reveal/Fade';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import templateOrder from './TemplateOrder';


class App extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
      currentTemplate: '',
      isPreview: false
    }
    this.onPreviewTemplate = this.onPreviewTemplate.bind(this)
    this.handleMobileClick = this.handleMobileClick.bind(this)
    this.handleDesktopClick = this.handleDesktopClick.bind(this)
  }

  onPreviewTemplate(template) {
    template.persist()
    console.log("Preview Active", template.target.attributes['data-template'])
    console.log(this.state.currentTemplate)
    this.setState( (state) => {
      state.currentTemplate = template.target.attributes['data-template'],
      state.isPreview = !this.state.isPreview
    })
    console.log(this.state.isPreview)
  }

  handleMobileClick()  {
      let templateFrame = document.querySelector('iframe')
      templateFrame.setAttribute('style', 'width: 350px; height: 560px;')
      console.log("clicked")
    }

    handleDesktopClick() {
      let templateFrame = document.querySelector('iframe')
      templateFrame.setAttribute('style', 'width: 100%;')
    }

  render() {

    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
          <div className="PreviewContainer">
            {this.state.currentTemplate.value}
          </div>
        </header>
        <p className="App-intro">
        </p>
        <div className="TemplateContainer">
          <ul className="TemplateList">
            {templateOrder.map( (item) => {
              return <Fade><li key={item.pageId} className="TemplateListItem"><Fade><p>{item.name}</p></Fade><img onClick={this.onPreviewTemplate} src={`img/${item.pageId}.png`} data-template={`${item.pageId}`}/></li></Fade>
            })}
          </ul>
        </div>
      </div>
    );
  }
}

export default App;