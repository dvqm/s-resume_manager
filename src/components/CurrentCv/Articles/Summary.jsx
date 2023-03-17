import React from 'react';
import { TextField } from '@mui/material';
import { currentCvStyles } from '../../../mainTheme/localStyles.js';

export class EditSummary extends React.Component {
  constructor(props) {
    super(props);

    this.key = props.keyName;

    this.handleChange = props.helper.onChange;
  }

  render() {
    return (
      <TextField
        label={this.props.static.summary}
        minRows={10}
        fullWidth
        size='small'
        multiline
        value={this.props.dynamic.summary}
        onChange={(e) => this.handleChange(this.key, 'summary', e)}
      />
    );
  }
}

export class ViewSummary extends React.Component {
  render() {
    const { TextBlock } = currentCvStyles;
    return (
      <TextBlock variant='body1' component='pre'>
        {this.props.dynamic.summary}
      </TextBlock>
    );
  }
}
