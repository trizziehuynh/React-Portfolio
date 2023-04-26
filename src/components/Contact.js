import React, { useState } from "react";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/FormControl";
import Input from "@mui/material/Input";
import Alert from "@mui/material/Alert";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";

function Contact() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: "",
    nameRequired: false,
    messageRequired: false,
    emailValidation: false,
  });

  const handleInputChange = ({ target: { name, value } }) => {
    setFormState({ ...formState, [name]: value });
  };

  const handleNameBlur = () => {
    if (formState.name === "") {
      setFormState({
        ...formState,
        nameRequired: true,
        messageRequired: false,
      });
    }
  };

  const handleMessageBlur = () => {
    if (formState.message === "") {
      setFormState({
        ...formState,
        nameRequired: false,
        messageRequired: true,
      });
    }
  };

  const isValidEmail = (val) => {
    const regEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (val.match(regEmail)) {
      return true;
    } else {
      return false;
    }
  };

  const handleEmailBlur = () => {
    if (isValidEmail(formState.email) === true) {
      console.log("Email is valid.");
    } else {
      setFormState({
        ...formState,
        nameRequired: true,
        messageRequired: false,
        emailValidation: false,
      });
    }
  };

  return (
    <>
      <Paper elevation={7} style={{ margin: "5px 5px 15px 5px" }}>
        <Grid container justifyContent={"center"} padding={2}>
          <Typography gutterBottom variant="h5" component="div">
            Contact
          </Typography>
        </Grid>

        <Grid container justifyContent={"Center"} spacing={2}>
          <Grid item xs={12} md={8} lg={6} padding={2} marginLeft={1}>
            <FormControl fullWidth>
              <InputLabel htmlFor="my-input">Name</InputLabel>
              <Input
                name="name"
                onChange={handleInputChange}
                onBlur={handleNameBlur}
                id="my-input"
                aria-describedby="my-helper-text"
              />
            </FormControl>
          </Grid>

          <Grid item xs={12} md={8} lg={6} marginLeft={1}>
            <FormControl fullWidth>
              <InputLabel htmlFor="my-input">Email address</InputLabel>
              <Input
                name="email"
                onChange={handleInputChange}
                onBlur={handleEmailBlur}
                id="my-input"
                aria-describedby="my-helper-text"
              />
            </FormControl>
          </Grid>

          <Grid item xs={12} md={8} lg={6} marginBottom={"15px"}>
            <TextField
              name="message"
              onChange={handleInputChange}
              onBlur={handleMessageBlur}
              label="Message"
              multiline
              rows={4}
              fullWidth
            />
          </Grid>

          <Grid container justifyContent={"center"} marginBottom={"15px"}>
            <Button variant="contained" size="small">
              Submit
            </Button>
          </Grid>
        </Grid>

        <Grid container justifyContent={"center"} marginBottom={"15px"}>
          {formState.nameRequired ? (
            <Alert severity="warning">
              Name is required! — Please enter your name
            </Alert>
          ) : (
            ""
          )}
          {formState.messageRequired ? (
            <Alert severity="warning">
              Message is required! — Please write a message
            </Alert>
          ) : (
            ""
          )}
          {formState.emailValidation ? (
            <Alert severity="warning">
              Email is invalid! — Please enter again
            </Alert>
          ) : (
            ""
          )}
        </Grid>
      </Paper>
    </>
  );
}

export default Contact;
