import React from 'react';
import {
  Box,
  Checkbox,
  Chip,
  FormControlLabel,
  TextareaAutosize,
  TextField,
  Typography,
} from '@mui/material';
import { genericStyles } from '../../../mainTheme/localStyles.js';
import OpenInNewOutlinedIcon from '@mui/icons-material/OpenInNewOutlined';

const { StackRow, PreBlock } = genericStyles;

export class EditProjects extends React.Component {
  constructor(props) {
    super(props);

    this.fields = props.fields;

    this.key = props.keyName;

    this.id = props.section.id;

    this.handleChange = props.helper.onChange;
  }

  render() {
    return (
      <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
        <TextField
          label={this.props.static.title}
          size='small'
          value={this.props.section.title}
          onChange={(e) => this.handleChange(this.key, 'title', e, this.id)}
        />

        <FormControlLabel
          control={
            <Checkbox
              size='small'
              checked={this.props.section.currentlyWork}
              onChange={(e) =>
                this.handleChange(this.key, 'currentlyWork', e, this.id)
              }
            />
          }
          label={this.props.static.currentlyWork}
        />

        <TextField
          type='date'
          label={this.props.static.startDate}
          size='small'
          value={this.props.section.startDate}
          onChange={(e) => this.handleChange(this.key, 'startDate', e, this.id)}
        />

        {!this.props.section.currentlyWork && (
          <TextField
            type='date'
            label={this.props.static.endDate}
            size='small'
            value={this.props.section.endDate}
            onChange={(e) => this.handleChange(this.key, 'endDate', e, this.id)}
          />
        )}

        <TextField
          label={this.props.static.deployUrl}
          size='small'
          value={this.props.section.deployUrl}
          onChange={(e) => this.handleChange(this.key, 'deployUrl', e, this.id)}
        />

        <TextField
          label={this.props.static.sourceUrl}
          size='small'
          value={this.props.section.sourceUrl}
          onChange={(e) => this.handleChange(this.key, 'sourceUrl', e, this.id)}
        />

        <TextareaAutosize
          minRows={4}
          label={this.props.static.technologies}
          size='small'
          value={this.props.section.technologies}
          onChange={(e) =>
            this.handleChange(this.key, 'technologies', e, this.id)
          }
        />

        <TextareaAutosize
          minRows={8}
          label={this.props.static.description}
          size='small'
          value={this.props.section.description}
          onChange={(e) =>
            this.handleChange(this.key, 'description', e, this.id)
          }
        />
      </Box>
    );
  }
}

export class ViewProjects extends React.Component {
  render() {
    return (
      <>
        {this.props.section.startDate ||
        this.props.section.endDate ||
        this.props.section.currentlyWork ? (
          <StackRow>
            <Typography variant='body1'>
              {this.props.section.startDate}
            </Typography>
            {(this.props.section.currentlyWork ||
              this.props.section.endDate) && (
              <Typography variant='body1'> - </Typography>
            )}
            <Typography variant='body1'>
              {this.props.section.currentlyWork
                ? this.props.static.currentlyWork
                : this.props.section.endDate}
            </Typography>
          </StackRow>
        ) : (
          ''
        )}

        {this.props.section.technologies && (
          <StackRow>
            <Typography variant='subtitle1'>
              {this.props.static.technologies}
            </Typography>

            <Typography variant='body1'>
              {this.props.section.technologies}
            </Typography>
          </StackRow>
        )}

        <StackRow>
          <Typography variant='subtitle1'>
            {this.props.static.description}
          </Typography>

          <PreBlock variant='body1' component='pre'>
            {this.props.section.description}
          </PreBlock>
        </StackRow>
        {this.props.section.deployUrl || this.props.section.sourceUrl ? (
          <StackRow>
            {this.props.section.deployUrl ? (
              <Chip
                variant='link'
                color='info'
                label={this.props.static.deployUrl}
                component='a'
                href={this.props.section.deployUrl}
                target='_blank'
                rel='noreferrer noopener'
                icon={<OpenInNewOutlinedIcon sx={{ fontSize: 15 }} />}
                clickable
              />
            ) : (
              ''
            )}

            {this.props.section.sourceUrl ? (
              <Chip
                variant='link'
                color='info'
                label={this.props.static.sourceUrl}
                component='a'
                href={this.props.section.sourceUrl}
                target='_blank'
                rel='noreferrer noopener'
                icon={<OpenInNewOutlinedIcon sx={{ fontSize: 15 }} />}
                clickable
              />
            ) : (
              ''
            )}
          </StackRow>
        ) : (
          ''
        )}
      </>
    );
  }
}
