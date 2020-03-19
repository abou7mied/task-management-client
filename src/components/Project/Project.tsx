import * as React from 'react';
import {Link} from "react-router-dom";
import {IProps} from "./types";
import '../../styles/components/project.scss';

export default (props: IProps) => {
  return (
    <div>
        <Link className="name" to={'/projects/' + props.id}>{props.name}</Link>
        <div className="body">{props.body}</div>
        <div className="status">{props.status}</div>
    </div>
  );
};
