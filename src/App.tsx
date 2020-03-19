import * as React from 'react';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import "./styles/app.scss";
import ProjectList from "./components/ProjectList";
import Layout from "./components/Layout";
import SideBar from './components/SideBar';


const Content = () => {
  return (
    <React.Fragment>
      <Switch>
        <Route path="/projects">
          <ProjectList/>
        </Route>
      </Switch>
    </React.Fragment>
  );
};


export const App = () => {
  return (
    <div>
      <Router>
        <Layout sideBar={(<SideBar/>)} content={<Content/>}/>
      </Router>
    </div>
  );
};

export default App;
