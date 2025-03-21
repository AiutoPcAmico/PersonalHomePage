import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import andreaImage from "../img/andrea.jpg";
import "./components.css";

function PersonalCard() {
  return (
    <Card className="personalCard card">
      <CardMedia
        sx={{ height: 300, width: 300, borderRadius: "100%" }}
        image={andreaImage}
        title="Andrea Felappi"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Andrea Felappi
        </Typography>
        <Typography variant="body2" sx={{ color: "text.secondary" }}>
          Brescia, Italy
        </Typography>
      </CardContent>
    </Card>
  );
}

export { PersonalCard };
