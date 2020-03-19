import * as React from 'react';
import {useEffect, useState} from 'react';
import {Project} from "../Project";
import {IProject} from "../types";

const fetchProjects = async () => {
  const response = await fetch('/api/projects');
  const json = await response.json();
  return json.rows;
};


export default () => {
  const [projects, setProjects] = useState([]);
  useEffect(() => {
    fetchProjects().then((projects) => {
      setProjects(projects);
    });
  }, []);

  return (
    <div className="projects">
      <h2>Projects</h2>
      <ul>
        {
          projects.map((project: IProject) => {
            return (
              <li key={project.id}>
                <Project {...project}/>
              </li>
            );
          })
        }
      </ul>
    </div>
  );
};
