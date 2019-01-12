import { Typography } from '@material-ui/core';
import axios from 'axios';
import { PureComponent, ReactNode } from 'react';
import * as React from 'react';
import { HomePageComponentProps } from './typings';

export default class HomePageComponent extends PureComponent<HomePageComponentProps, any> {

  public render = () : ReactNode => {
    return (
      <React.Fragment>
        <Typography variant="h5" component="h3" style={{ paddingBottom: "1em" }}>
            {this.props.t("title", { ns: "HomePage", defaultValue: "Home page" })}
          </Typography>
      </React.Fragment>
    )
  }

  public componentDidMount = () : void => {
    for(let i = 0;i < 3; i++){
      axios.get("./data/tasks.json");
    }
  }
}
