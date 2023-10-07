import React from 'react';
import { Button, ListItem } from '@mui/material';
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';
import { contentsStyles } from '../../mainTheme/localStyles';

const MockBtns = ({ addMock, deleteMock, resumes, accessManualList }) => {
  const { BoxStyled, IconButtonStyled } = contentsStyles;
  const styles = {
    btn: {
      border: 'none',
      fontSize: 10,
      '&:hover': {
        border: 'none',
      },
    },
    listItem: {
      display: 'flex',
      flexDirection: 'row',
      flexWrap: 'nowrap',
      justifyContent: 'space-between',
    },
  };

  return (
    <BoxStyled>
      <ListItem sx={styles.listItem}>
        {resumes.some((resume) => resume.mock) ? (
          <Button
            sx={styles.btn}
            variant='outlined'
            color='primary'
            size='small'
            onClick={deleteMock}
          >
            Delete Demo
          </Button>
        ) : (
          <Button
            sx={styles.btn}
            variant='outlined'
            color='primary'
            size='small'
            onClick={addMock}
          >
            Load Demo
          </Button>
        )}
        <IconButtonStyled onClick={() => accessManualList(prev => !prev)}>
          <CloseOutlinedIcon />
        </IconButtonStyled>
      </ListItem>
    </BoxStyled>
  );
};

export default MockBtns;
