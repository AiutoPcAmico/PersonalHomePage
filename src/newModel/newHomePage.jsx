import { Grid, Container } from "@mui/material";
import { NewInfoCard } from "./newInfoCard";
import { NewPersonalCard } from "./newPersonalCard";
import "./newcomponents.css";

function NewHomePage() {
  return (
    <main className="HomePage">
      <Container maxWidth="lg">
        <Grid container spacing={6} justifyContent="center" alignItems="center">
          <Grid item xs={12} md={6}>
            <NewInfoCard />
          </Grid>
          <Grid item xs={12} md={4}>
            <NewPersonalCard />
          </Grid>
        </Grid>
      </Container>
    </main>
  );
}

export { NewHomePage };
