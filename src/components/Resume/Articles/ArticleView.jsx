import React from "react";
import { genericStyles } from "./../../../mainTheme/localStyles";
import { Divider, Typography, IconButton } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";

const ArticleView = ({ titles, edit, resume, viewer }) => {
  const { StackRow } = genericStyles;

  return (
    <article style={{ marginBottom: "1rem" }}>
      <StackRow>
        <Typography variant="h2">{titles.header}</Typography>
        <IconButton color="secondary" onClick={edit}>
          <EditIcon />
        </IconButton>
      </StackRow>
      <Divider sx={{ borderBottom: "1px solid", mb: 5 }} />

      {React.createElement(viewer, {
        resume: resume,
        titles: titles,
      })}
    </article>
  );
};

export default ArticleView;
