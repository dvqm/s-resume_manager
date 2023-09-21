import React from 'react';
import { genericStyles } from './../../../mainTheme/localStyles';
import { Divider, Typography, IconButton } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';

const ArticleView = ({ titles, handle, fields, viewer }) => {
  const { StackRow } = genericStyles;

  return <article>
    <StackRow>
      <Typography variant='h2'>{titles.header}</Typography>
      <IconButton color='secondary' onClick={handle.edit} >
        <EditIcon />
      </IconButton>
    </StackRow>
    <Divider sx={{ borderBottom: '1px solid', mb: 5 }} />

    {React.createElement(viewer, {
      fields: fields,
    })}
  </article>
}

export default ArticleView;
