import React from 'react';
import { Chip, Stack } from '@mui/material';
import LabelImportantOutlinedIcon from '@mui/icons-material/LabelImportantOutlined';
import { expertiseStyles } from './../../../mainTheme/localStyles';

const { TextStyled } = expertiseStyles;

export const EditExpertise = ({ titles, field, handleAction }) => {
  const handleChange = (key, e) => {
    handleAction(e, 'update', key);
  };

  return (
    <>
      <TextStyled
        type='text'
        placeholder={titles.placeholder}
        value={field.title}
        onChange={(e) => handleChange('title', e, field.id)}
      />

      <TextStyled
        multiline
        rows={8}
        placeholder={titles.tip}
        value={field.labels}
        onChange={(e) => handleChange('labels', e, field.id)}
      />
    </>
  );
}

export const ViewExpertise = ({ titles, field }) => {
  const labelsParse = (labelsStr) => {
    if (labelsStr) return labelsStr.split(', ');
    else return [];
  };

  const labels = labelsParse(field.labels);

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
