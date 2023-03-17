import React from 'react';
import { Chip, TextField, Stack } from '@mui/material';
import LabelImportantOutlinedIcon from '@mui/icons-material/LabelImportantOutlined';

export class EditExpertise extends React.Component {
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
          type='text'
          size='small'
          placeholder={this.props.static.placeholder}
          value={this.props.section.title}
          onChange={(e) => this.handleChange(this.key, 'title', e, this.id)}
        />

        <TextField
          size='small'
          multiline
          rows={8}
          placeholder={this.props.static.tip}
          value={this.props.section.labels}
          onChange={(e) => this.handleChange(this.key, 'labels', e, this.id)}
        />
      </>
    );
  }
}

export class ViewExpertise extends React.Component {
  labelsParse(labelsStr) {
    return labelsStr.split(', ');
  }

  render() {
    const labels = this.labelsParse(this.props.section.labels);

    return (
      <Stack direction='row' sx={{ flexWrap: 'wrap' }}>
        {labels.map((label, index) => (
          <Chip
            variant='skill'
            color='secondary'
            key={index}
            icon={<LabelImportantOutlinedIcon sx={{ fontSize: '1.5em' }} />}
            label={label}
            sx={{ mx: 1, my: 1 }}
          />
        ))}
      </Stack>
    );
  }
}
