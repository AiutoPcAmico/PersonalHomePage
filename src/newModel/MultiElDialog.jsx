import {
  Dialog,
  DialogTitle,
  DialogContent,
  List,
  ListItem,
  ListItemAvatar,
  Avatar,
  ListItemText,
  Typography,
  Link,
  Slide,
  Box,
  Divider,
} from "@mui/material";
import WorkspacePremiumIcon from "@mui/icons-material/WorkspacePremium";
import CloseIcon from "@mui/icons-material/Close";
import IconButton from "@mui/material/IconButton";

const Transition = Slide;

function MultiElDialog({ open, onClose, listObj = [], title = "" }) {
  return (
    <Dialog
      open={open}
      onClose={onClose}
      TransitionComponent={Transition}
      keepMounted
      PaperProps={{
        sx: {
          borderRadius: 3,
          background: "linear-gradient(135deg, #0f2027, #203a43, #2c5364)",
          color: "#fff",
          boxShadow: "0 8px 30px rgba(0,0,0,0.3)",
        },
      }}
    >
      <DialogTitle
        sx={{
          fontWeight: "bold",
          textAlign: "center",
          fontSize: "1.8rem",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          px: 3,
          pt: 2,
        }}
      >
        <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
          <WorkspacePremiumIcon sx={{ color: "#ffd700", fontSize: 32 }} />
          {title}
        </Box>
        <IconButton
          aria-label="close"
          onClick={onClose}
          sx={{
            color: "#fff",
          }}
        >
          <CloseIcon />
        </IconButton>
      </DialogTitle>
      <DialogContent dividers>
        <List>
          {listObj.map((el, index) => (
            <span key={index}>
              {el.name !== "divider" && (
                <ListItem
                  key={index}
                  component={Link}
                  href={el.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  sx={{
                    textDecoration: "none",
                    color: "inherit",
                    "&:hover": { backgroundColor: "rgba(255,255,255,0.08)" },
                    borderRadius: 1,
                  }}
                >
                  <ListItemAvatar>
                    <Avatar sx={{ bgcolor: el.color }}>{el.icon}</Avatar>
                  </ListItemAvatar>
                  <ListItemText
                    primary={
                      <Typography variant="h6" sx={{ fontWeight: "bold" }}>
                        {el.name}
                      </Typography>
                    }
                    secondary={el.action}
                    secondaryTypographyProps={{
                      color: "rgba(255,255,255,0.7)",
                    }}
                  />
                </ListItem>
              )}
              {el.name === "divider" && (
                <Divider
                  sx={{
                    bgcolor: "white",
                    width: "95%",
                    mx: "auto",
                    marginTop: "12px",
                    marginBottom: "12px",
                  }}
                />
              )}
            </span>
          ))}
        </List>
      </DialogContent>
    </Dialog>
  );
}

export { MultiElDialog };
