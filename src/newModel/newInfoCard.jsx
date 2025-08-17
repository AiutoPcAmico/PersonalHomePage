import { useState } from "react";
import { Card, CardContent, Typography, Button, Stack } from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";
import YouTubeIcon from "@mui/icons-material/YouTube";
import LanguageIcon from "@mui/icons-material/Language";
import WorkspacePremiumIcon from "@mui/icons-material/WorkspacePremium";
import MemoryIcon from "@mui/icons-material/Memory";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";
import CloudIcon from "@mui/icons-material/Cloud";
import RouterIcon from "@mui/icons-material/Router";
import ConstructionIcon from "@mui/icons-material/Construction";
import DnsIcon from "@mui/icons-material/Dns";
import LandspaceIcon from "@mui/icons-material/Landscape";
import AssistantIcon from "@mui/icons-material/Assistant";
import EmojiEventsIcon from "@mui/icons-material/EmojiEvents";
import VerifiedIcon from "@mui/icons-material/Verified";

import "./newcomponents.css";
import { MultiElDialog } from "./MultiElDialog.jsx";

function NewInfoCard() {
  const [multiOpen, setMultiOpen] = useState({
    isOpen: false,
    object: null, //certifications or projects
    title: "",
  });

  const certifications = [
    {
      name: "Diploma ITS (EQF 5) - 100/100 con lode",
      icon: <VerifiedIcon />,
      color: "red",
      action: "Tecnico Superiore per lo Sviluppo di Sistemi Software",
      link: null,
    },
    {
      name: "Diploma Istituto Tecnico (EQF 4) - 100/100",
      icon: <VerifiedIcon />,
      color: "red",
      action: `Indirizzo "Informatica e Telecomunicazioni"`,
      link: null,
    },
    {
      name: "divider",
    },
    {
      name: "Microsoft - Applied Skills: Active Directory",
      icon: <DnsIcon />,
      color: "#0078d4",
      action: "🔗 Visualizza certificazione",
      link: "https://learn.microsoft.com/api/credentials/share/it-it/AndreaFelappi/5F7B24D2A8CB18?sharingId=E5D780378F413A32",
    },
    {
      name: "Microsoft - Azure Developer AZ-204",
      icon: <CloudIcon />,
      color: "#0078d4",
      action: "🔗 Visualizza certificazione",
      link: "https://learn.microsoft.com/api/credentials/share/it-it/AndreaFelappi/789051363360F0F2?sharingId=E5D780378F413A32",
    },
    {
      name: "Cisco - Network Technician",
      icon: <RouterIcon />,
      color: "green",
      action: "🔗 Visualizza certificazioni",
      link: "https://www.credly.com/users/andrea-felappi",
    },
    {
      name: "Google - Fondamenti di Marketing Digitale",
      icon: <TrendingUpIcon />,
      color: "#fbbc05",
      action: "🔗 Visualizza certificazione",
      link: "https://learndigital.withgoogle.com/link/1gcpw8lsohs",
    },
    {
      name: "Arduino - STEM CTC 101",
      icon: <MemoryIcon />,
      color: "#00979c",
      action: "Vai al progetto CTC 101",
      link: "https://ctc101.arduino.cc/",
    },
  ];

  const projects = [
    {
      name: "AiutoPcAmico - Canale YouTube",
      icon: <YouTubeIcon />,
      color: "red",
      action: "🔗 Vai al canale YouTube",
      link: "https://youtube.com/@aiutopcamico",
    },
    {
      name: "AiutoPcAmico - Sito Web",
      icon: <AssistantIcon />,
      color: "#0078d4",
      action: "🔗 Accedi al sito di AiutoPcAmico",
      link: "https://aiutopcamico.altervista.org",
    },
    {
      name: "Centro Dià-Logos - Hosting",
      icon: <LanguageIcon />,
      color: "black",
      action: "🔗 Gestione Hosting di un sito Wordpress",
      link: "https://centrodialogos.netsons.org/",
    },
    {
      name: "ColleVareno - Sviluppo Sito Web",
      icon: <LandspaceIcon />,
      color: "green",
      action:
        "🔗 Sviluppo completo e gestione dei contenuti di un sito Wordpress",
      link: "https://collevareno.it",
    },
    {
      name: "andreafelappi.it - Questa WelcomePage",
      icon: <EmojiEventsIcon />,
      color: "#fb993b",
      action: "Sviluppata interamente in tecnologia JavaScript e React",
      link: null,
    },
  ];

  return (
    <>
      <Card className="infoCardMain" elevation={0}>
        <CardContent>
          <Typography variant="h2" gutterBottom className="infoCardTitle">
            <span className="accent">Andrea Felappi</span>
          </Typography>
          <Typography variant="h6" className="infoCardSubtitle" gutterBottom>
            <br />
            System & Network Administrator con esperienza nel supporto tecnico e
            nella gestione dell'intera infrastruttura IT. <br></br>Sviluppatore
            Web per passione.
            <br></br>
            <br></br>
            Dalla passione per l'informatica, è nato <b>AiutoPcAmico</b>:
            <br></br>un progetto pensato per mettere le mie competenze al
            servizio di chi cerca un aiuto con la tecnologia... <br></br>
            <br></br>Scopri tutti i miei progetti!
          </Typography>

          <Stack
            direction="row"
            spacing={2}
            justifyContent="center"
            flexWrap="wrap"
            mt={3}
          >
            <Button
              component="a"
              href="https://github.com/aiutopcamico"
              target="_blank"
              rel="noopener noreferrer"
              startIcon={<GitHubIcon />}
              className="cta github"
            >
              GitHub
            </Button>
            <Button
              component="a"
              href="https://youtube.com/@aiutopcamico"
              target="_blank"
              rel="noopener noreferrer"
              startIcon={<YouTubeIcon />}
              className="cta youtube"
            >
              YouTube
            </Button>
            <Button
              component="a"
              href="https://aiutopcamico.altervista.org"
              target="_blank"
              rel="noopener noreferrer"
              startIcon={<LanguageIcon />}
              className="cta site"
            >
              Sito Web
            </Button>
          </Stack>

          <Stack
            direction="row"
            spacing={2}
            justifyContent="center"
            flexWrap="wrap"
            mt={3}
          >
            <Button
              variant="outlined"
              startIcon={<WorkspacePremiumIcon />}
              onClick={() =>
                setMultiOpen({
                  isOpen: true,
                  object: "certifications",
                  title: "Le mie certificazioni",
                })
              }
              className="cta certificationsBtn"
            >
              Certificazioni
            </Button>
            <Button
              variant="outlined"
              startIcon={<ConstructionIcon />}
              onClick={() =>
                setMultiOpen({
                  isOpen: true,
                  object: "projects",
                  title: "Progetti Sviluppati",
                })
              }
              className="cta certificationsBtn"
            >
              Progetti sviluppati
            </Button>
          </Stack>
        </CardContent>
      </Card>

      <MultiElDialog
        listObj={
          multiOpen.object === "certifications"
            ? certifications
            : multiOpen.object === "projects"
            ? projects
            : []
        }
        open={multiOpen.isOpen}
        title={multiOpen.title}
        onClose={() =>
          setMultiOpen((prevState) => ({
            ...prevState,
            isOpen: false,
          }))
        }
      />
    </>
  );
}

export { NewInfoCard };
