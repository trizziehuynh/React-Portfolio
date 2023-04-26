import { React } from "react";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import Card from "./Card";

function Portfolio() {
  let projects = [
    {
      title: "surf-report",
      link: "https://github.com",
      image:
        "https://wallpaperstock.net/surf-up%2C-animated%2C-summer%2C-nature-wallpapers_56020_1920x1200.jpg",
    },
    {
      title: "pastel-puzzels",
      link: "https://github.com",
      image:
        "https://static4.depositphotos.com/1012223/295/v/950/depositphotos_2955525-stock-illustration-transparent-vector-puzzle.jpg",
    },
    {
      title: "Landing Page",
      description: "HTML/CSS",
      link: "https://github.com",
      image:
        "https://blog-frontend.envato.com/cdn-cgi/image/width=1200,quality=75,format=auto/uploads/2020/06/SOC101_Portfolio_Guide.png",
    },
    {
      title: "led-wall",
      description: "Node/IoT",
      link: "https://github.com",
      image:
        "https://static.vecteezy.com/system/resources/thumbnails/002/208/060/small/neon-abstract-background-free-vector.jpg",
    },
    {
      title: "calculator",
      description: "React/JavaScript/CSS",
      link: "https://github.com",
      image:
        "https://www.swimmingpool.com/images/og/pool-volume-calculator.jpg",
    },
    {
      title: "calculator",
      description: "React/JavaScript/CSS",
      link: "https://github.com",
      image:
        "https://static.vecteezy.com/system/resources/thumbnails/002/208/060/small/neon-abstract-background-free-vector.jpg",
    },
  ];

  return (
    <>
      <Paper elevation={7} style={{ margin: "5px 5px 5px 5px" }}>
        <Grid item container justifyContent={"center"} padding={2}>
          <Typography gutterBottom variant="h5" component="div">
            My Work
          </Typography>
        </Grid>
        <Grid item padding={2} container spacing={4} justifyContent={"center"}>
          {projects.map((project) => (
            <Grid item>
              <Card
                image={project.image}
                title={project.title}
                link={project.link}
              />
            </Grid>
          ))}
        </Grid>
      </Paper>
    </>
  );
}

export default Portfolio;
