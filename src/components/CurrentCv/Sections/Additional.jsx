import React from 'react';
import { TextField, Typography } from '@mui/material';
import { currentCvStyles } from '../../../mainTheme/localStyles.js';

export class EditAdditional extends React.Component {
  constructor(props) {
    super(props);

    this.key = props.keyName;

    this.id = props.section.id;

    this.handleChange = props.helper.onChange;
  }

  render() {
    return (
      <>
        <TextField
          fullWidth
          label={this.props.static.title}
          size='small'
          value={this.props.section.title}
          onChange={(e) => this.handleChange(this.key, 'name', e, this.id)}
        />

        <TextField
          multiline
          minRows={8}
          size='small'
          label={this.props.static.description}
          value={this.props.section.description}
          onChange={(e) =>
            this.handleChange(this.key, 'description', e, this.id)
          }
        />
      </>
    );
  }
}

export class ViewAdditional extends React.Component {
  render() {
    const { TextBlock } = currentCvStyles;
    return (
      <>
        <TextBlock variant='body1' component='pre'>
          {this.props.section.description}
        </TextBlock>
      </>
    );
  }
}
