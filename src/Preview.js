import React, { Component } from 'react';
import Fade from 'react-reveal/Fade';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import templateOrder from './TemplateOrder';

const find = id => templateOrder.find(p => p.id == id);

const TemplatePreview = () => (
  	<div>
  		<h1>Nothing to see here</h1>
  	</div>
);

export default TemplatePreview