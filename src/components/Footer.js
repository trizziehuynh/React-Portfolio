import React from "react";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

const Footer = () => {
  return (
    <>
      <Grid container justifyContent={"center"} spacing={2} padding={2}>
        <Grid item>
          <a href="https://github.com/trizziehuynh" target="_blank">
            <GitHubIcon />
          </a>
        </Grid>
        <Grid item>
          <a href="https://www.linkedin.com/" target="_blank">
            <LinkedInIcon />
          </a>
        </Grid>
      </Grid>
    </>
  );
};

export default Footer;
