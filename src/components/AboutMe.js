import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea, Grid } from "@mui/material";
import Avatar from "@mui/material/Avatar";
import Paper from "@mui/material/Paper";

function About() {
  return (
    <Paper elevation={3} style={{ margin: "5px 5px 5px 5px" }}>
      <Grid justifyContent="center" container padding={2}>
        {/* <Card sx={{ maxWidth: 345 }}> */}
        {/* <CardActionArea> */}
        <Grid justifyContent="center" container padding={2}>
          <Avatar
            alt="Remy Sharp"
            src="https://m.media-amazon.com/images/I/51nAgi6yQ7L.jpg"
            sx={{ width: 200, height: 200 }}
          />
        </Grid>

        <Typography gutterBottom variant="h5" component="div">
          About me
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis,
          accusantium maiores? Unde veniam obcaecati iste earum, ipsa, eligendi
          vero quas facilis corporis, ipsum voluptatum aliquam nulla?
          Perferendis repudiandae dicta doloribus?
        </Typography>
      </Grid>
    </Paper>
  );
}

export default About;
