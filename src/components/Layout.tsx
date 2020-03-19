import * as React from 'react';
import '../styles/components/layout.scss';

interface IProps {
  children?: React.ReactNode,
  sideBar: React.ReactNode,
  content: React.ReactNode,
}

export default (props: IProps) => {
  return (
    <div className="layout">
      <div className="layout-sidebar">
        {props.sideBar}
      </div>
      <div className="layout-content">
        {props.content}
      </div>
    </div>
  );
};
