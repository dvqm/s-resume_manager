import React from 'react';
import { Chip, Stack } from '@mui/material';
import LabelImportantOutlinedIcon from '@mui/icons-material/LabelImportantOutlined';
import { expertiseStyles } from './../../../mainTheme/localStyles';

const { TextStyled } = expertiseStyles;

export const EditExpertise = ({ titles, article, update }) => {
  return (
    <>
      <TextStyled
        type='text'
        placeholder={titles.placeholder}
        value={article.title}
        onChange={(e) => update('title', e)}
      />

      <TextStyled
        multiline
        rows={8}
        placeholder={titles.tip}
        value={article.labels}
        onChange={(e) => update('labels', e)}
      />
    </>
  );
}

export const ViewExpertise = ({ article }) => {
  const labelsParse = (labelsStr) => {
    if (labelsStr) return labelsStr.split(', ');
    else return [];
  };

  const labels = labelsParse(article.labels);

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
