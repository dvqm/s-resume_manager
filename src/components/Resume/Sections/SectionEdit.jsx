import { FormGroup, IconButton } from "@mui/material";
import CheckOutlinedIcon from '@mui/icons-material/CheckOutlined';
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';
import DeleteForeverOutlinedIcon from '@mui/icons-material/DeleteForeverOutlined';
import { genericStyles } from "../../../mainTheme/localStyles";
import { createElement } from 'react';

const SectionEdit = ({ init, editer, titles, article, update, save, restore, remove}) => {
  const { ManageBtnsWrapper } = genericStyles;

  return <form
    onSubmit={save}
  >
    <FormGroup>
      <ManageBtnsWrapper>
        <IconButton color='secondary' type='submit'>
          <CheckOutlinedIcon />
        </IconButton>
        {!init && (
          <IconButton
            color='secondary'
            onClick={restore}
          >
            <CloseOutlinedIcon />
          </IconButton>
        )}
        <IconButton
          color='secondary'
          onClick={remove}
        >
          <DeleteForeverOutlinedIcon />
        </IconButton>
      </ManageBtnsWrapper>

      {createElement(editer, {
        titles: titles,
        article: article,
        update: update,
      })}
    </FormGroup>
  </form>
}

export default SectionEdit;
