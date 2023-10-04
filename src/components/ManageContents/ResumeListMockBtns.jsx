import React from 'react';
import { Button, ListItem, IconButton } from '@mui/material';
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';
import { contentsStyles } from '../../mainTheme/localStyles';

const MockBtns = ({ addMock, deleteMock, resumes, accessList }) => {
  const { BoxStyled } = contentsStyles;
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
        {!accessList() &&
          <IconButton /*onClick={}*/>
            <CloseOutlinedIcon />
          </IconButton>
        }
      </ListItem>
    </BoxStyled>
  );
};

export default MockBtns;
