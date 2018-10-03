import React, { Component } from 'react';
import Fade from 'react-reveal/Fade';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import templateOrder from './TemplateOrder';

const find = id => templateOrder.find(p => p.id == id);

const Person = ({ match }) => {
  const person = find(match.params.id);

  return (
    <div>
      <h3>{person.name}’s Friends</h3>
      <ul>
        {person.friends.map(id => (
          <li key={id}>
            <Link to={`${match.url}/${id}`}>{find(id).name}</Link>
          </li>
        ))}
      </ul>
      <Route path={`${match.url}/:id`} component={Person} />
    </div>
  );
};

export class Preview extends Component {
    render() {
        return (
            <div></div>
        );
    }
}
