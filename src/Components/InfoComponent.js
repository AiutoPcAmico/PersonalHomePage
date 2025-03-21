import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import andreaImage from "../img/andrea.jpg";
import GitHubIcon from "@mui/icons-material/GitHub";
import "./components.css";
import { Divider } from "@mui/material";
import {
  Language,
  YouTube,
  YoutubeSearchedForSharp,
} from "@mui/icons-material";

function InfoComponent() {
  return (
    <Card className="infoCard card">
      <CardContent>
        <Typography
          gutterBottom
          variant="h4"
          component="div"
          className="typeWriterText"
        >
          Ciao! Sono un<br></br>
          <span className="typewriter thick"></span>
        </Typography>
        <Divider sx={{ border: 1 }} />
        <div className="buttonsFooter">
          <Button
            onClick={() => {
              window.open("https://github.com/aiutopcamico");
            }}
            style={{ flexDirection: "column", width: 1 / 3, color: "black" }}
          >
            <GitHubIcon fontSize="large" />
            Profilo GitHub
          </Button>
          <Button
            onClick={() => {
              window.open("https://youtube.com/@aiutopcamico");
            }}
            style={{ flexDirection: "column", width: 1 / 3, color: "red" }}
          >
            <YouTube fontSize="large" />
            Canale YouTube
          </Button>
          <Button
            onClick={() => {
              window.open("https://aiutopcamico.altervista.org");
            }}
            style={{ flexDirection: "column", width: 1 / 3, color: "blue" }}
          >
            <Language fontSize="large" />
            Sito Web
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}

export { InfoComponent };
