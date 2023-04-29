import React from 'react';
import {
  Checkbox,
  Typography,
  Box,
  TextField,
  FormControlLabel,
} from '@mui/material';
import { genericStyles } from '../../../mainTheme/localStyles.js';

export class EditExperiences extends React.Component {
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
          label={this.props.static.title}
          size='small'
          type='text'
          InputLabelProps={{
            shrink: true,
          }}
          placeholder='dd/mm/yyyy'
          value={this.props.section.title}
          onChange={(e) => this.handleChange(this.key, 'title', e, this.id)}
        />

        <TextField
          label={this.props.static.startDate}
          size='small'
          InputLabelProps={{
            shrink: true,
          }}
          placeholder='dd/mm/yyyy'
          type='date'
          value={this.props.section.startDate}
          onChange={(e) => this.handleChange(this.key, 'startDate', e, this.id)}
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

        {!this.props.section.currentlyWork && (
          <TextField
            label={this.props.static.endDate}
            size='small'
            type='date'
            InputLabelProps={{
              shrink: true,
            }}
            placeholder='dd/mm/yyyy'
            value={this.props.section.endDate}
            onChange={(e) => this.handleChange(this.key, 'endDate', e, this.id)}
          />
        )}

        <TextField
          label={this.props.static.company}
          size='small'
          type='text'
          value={this.props.section.company}
          onChange={(e) => this.handleChange(this.key, 'company', e, this.id)}
        />

        <TextField
          label={this.props.static.employmentType}
          size='small'
          select
          value={this.props.section.employmentType}
          onChange={(e) =>
            this.handleChange(this.key, 'employmentType', e, this.id)
          }
          SelectProps={{
            native: true,
          }}
        >
          <option value='Full-time'>Full-time</option>
          <option value='Part-time'>Part-time</option>
          <option value='Contract'>Contract</option>
        </TextField>

        <TextField
          label={this.props.static.location}
          size='small'
          type='text'
          value={this.props.section.location}
          onChange={(e) => this.handleChange(this.key, 'location', e, this.id)}
        />

        <TextField
          label={this.props.static.contractType}
          size='small'
          select
          value={this.props.section.contractType}
          onChange={(e) =>
            this.handleChange(this.key, 'contractType', e, this.id)
          }
          SelectProps={{
            native: true,
          }}
        >
          <option value='On-site'>On-site</option>
          <option value='Hybrid'>Hybrid</option>
          <option value='Remote'>Remote</option>
        </TextField>

        <TextField
          label={this.props.static.description}
          size='small'
          multiline
          minRows={4}
          value={this.props.section.description}
          onChange={(e) =>
            this.handleChange(this.key, 'description', e, this.id)
          }
        />
      </>
    );
  }
}

export class ViewExperiences extends React.Component {
  render() {
    const { StackRow, PreBlock } = genericStyles;
    return (
      <>
        <Typography variant='h5'>{this.props.section.company}</Typography>

        <Box>
          <StackRow>
            <Typography variant='subtitle1'>
              {this.props.static.employmentType}
            </Typography>
            <Typography variant='body1'>
              {this.props.section.employmentType}
            </Typography>
          </StackRow>

          <StackRow>
            <Typography variant='subtitle1'>
              {this.props.static.contractType}
            </Typography>
            <Typography variant='body1'>
              {this.props.section.contractType}
            </Typography>
          </StackRow>
        </Box>

        <StackRow>
          <Typography variant='body1'>
            {this.props.section.startDate}
          </Typography>
          {this.props.section.currentlyWork ? (
            <>
              <Typography variant='body1'>-</Typography>
              <Typography variant='body1'>Currently work</Typography>
            </>
          ) : (
              <>
                <Typography variant='body1'>-</Typography>
                <Typography variant='body1'>
                  {this.props.section.endDate}
                </Typography>
              </>
            )}
        </StackRow>

        {this.props.section.location.length > 0 && (
          <StackRow>
            <Typography variant='subtitle1'>
              {this.props.static.location}
            </Typography>
            <Typography variant='subtitle1'>
              {this.props.section.location}
            </Typography>
          </StackRow>
        )}

        <Box>
          <Typography variant='subtitle1'>
            {this.props.static.description}
          </Typography>
          <PreBlock component='pre'>{this.props.section.description}</PreBlock>
        </Box>
      </>
    );
  }
}
