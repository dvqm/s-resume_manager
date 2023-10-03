import { Divider, IconButton, Typography } from "@mui/material";
import EditIcon from '@mui/icons-material/Edit';
import { genericStyles } from "../../../mainTheme/localStyles";
import { createElement } from 'react';

const SectionView = ({ viewer, article, titles, edit }) => {
  const { ArticleStyled, StackRow } = genericStyles;
  return <ArticleStyled>
    <StackRow>
      <Typography variant='h3'>{article.title}</Typography>

      <IconButton
        color='secondary'
        size='medium'
        onClick={edit}
      >
        <EditIcon />
      </IconButton>
    </StackRow>

    {createElement(viewer, {
      titles: titles,
      article: article,
    })}
    <Divider light variant='inset' />
  </ArticleStyled>
}

export default SectionView;
