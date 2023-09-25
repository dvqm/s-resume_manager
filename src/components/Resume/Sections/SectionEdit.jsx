import { FormGroup, IconButton } from "@mui/material";
import CheckOutlinedIcon from '@mui/icons-material/CheckOutlined';
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';
import DeleteForeverOutlinedIcon from '@mui/icons-material/DeleteForeverOutlined';
import { genericStyles } from "../../../mainTheme/localStyles";
import { createElement } from 'react';

const SectionEdit = ({ editer, titles, field, handleAction, init }) => {
  const { ManageBtnsWrapper } = genericStyles;

  return <form
    onSubmit={(e) => handleAction(e, 'save')}
  >
    <FormGroup>
      <ManageBtnsWrapper>
        <IconButton color='secondary' type='submit'>
          <CheckOutlinedIcon />
        </IconButton>
        {!init && (
          <IconButton
            color='secondary'
            onClick={(e) => handleAction(e, 'cancel')}
          >
            <CloseOutlinedIcon />
          </IconButton>
        )}
        <IconButton
          color='secondary'
          onClick={(e) => handleAction(e, 'delete')}
        >
          <DeleteForeverOutlinedIcon />
        </IconButton>
      </ManageBtnsWrapper>

      {createElement(editer, {
        titles: titles,
        field: field,
        handleAction: handleAction,
      })}
    </FormGroup>
  </form>
}

export default SectionEdit;
