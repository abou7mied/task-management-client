import * as React from 'react';
import {Link} from "react-router-dom";

const routes = [
  {
    to: '/users',
    label: 'Users',
  },
  {
    to: '/projects',
    label: 'Projects',
  }
];

export default () => {
  return (
    <ul>
      {
        routes.map((route) => (
          <li key={route.to}><Link to={route.to}>{route.label}</Link></li>
        ))
      }
    </ul>
  );
};
