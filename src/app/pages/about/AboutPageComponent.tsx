import { Typography } from '@material-ui/core';
import { PureComponent, ReactNode } from 'react';
import * as React from 'react';
import { AboutPageComponentProps } from './typings';


export default class AboutPageComponent extends PureComponent<AboutPageComponentProps> {
  public render = () : ReactNode => {
    return (
      <React.Fragment>
          <Typography variant="h5" component="h3" style={{ paddingBottom: "1em" }}>
            {this.props.t("title", { ns: "AboutPage", defaultValue: "About us" })}
          </Typography>
          <Typography component="p">
            {this.props.t("text", { ns: "AboutPage", defaultValue: "..." })}
          </Typography>
      </React.Fragment>
    )
  }
}

