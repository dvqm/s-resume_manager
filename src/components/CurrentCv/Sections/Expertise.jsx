import React from 'react';
import { Chip, Stack } from '@mui/material';
import LabelImportantOutlinedIcon from '@mui/icons-material/LabelImportantOutlined';
import { expertiseStyles } from './../../../mainTheme/localStyles';

const { TextStyled } = expertiseStyles;

export const EditExpertise = ({ component, titles, values, helper }) => {

  return (
    <>
      <TextStyled
        type='text'
        placeholder={titles.placeholder}
        value={values.title}
        onChange={(e) => helper.onChange(component, 'title', e, values.id)}
      />

      <TextStyled
        multiline
        rows={8}
        placeholder={titles.tip}
        value={values.labels}
        onChange={(e) => helper.onChange(component, 'labels', e, values.id)}
      />
    </>
  );
}

export const ViewExpertise = ({ values }) => {
  const labelsParse = (labelsStr) => {
    return labelsStr.split(', ');
  };

  const labels = labelsParse(values.labels);

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
