import { Divider, IconButton, Typography } from "@mui/material";
import EditIcon from '@mui/icons-material/Edit';
import { genericStyles } from "../../../mainTheme/localStyles";
import { createElement } from 'react';

const SectionView = ({ viewer, field, titles, handleAction }) => {
  const { ArticleStyled, StackRow } = genericStyles;
  return <ArticleStyled>
    <StackRow>
      <Typography variant='h3'>{field.title}</Typography>

      <IconButton
        color='secondary'
        size='medium'
        onClick={(e) => handleAction(e, 'edit')}
      >
        <EditIcon />
      </IconButton>
    </StackRow>

    {createElement(viewer, {
      titles: titles,
      field: field,
    })}
    <Divider light variant='inset' />
  </ArticleStyled>
}

export default SectionView;
