import React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import { Button } from "@mui/material";
function Hero() {
  return (
    <div>
      <CssBaseline />
      <Container maxWidth="100%" disableGutters>
        <Box
          sx={{
            bgcolor: "#006181",
            height: "90vh",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            textAlign: "center",
            color: "white",
            width: "100%",
            position: "relative",
            flexDirection: "column",
          }}>
          <div style={{ marginBottom: "10rem" }}>
            <Typography variant="h1" gutterBottom>
              Find a developer for
              <br></br>
              live mentorship & freelance projects
            </Typography>
            <Button
              variant="contained"
              sx={{ background: "#ff6b55", padding: "0.8rem" }}>
              GET HELP NOW
            </Button>
          </div>
          <img
            style={{
              position: "absolute",
              bottom: "-20%",
              width: "50%",
            }}
            src="hero-l.png"
            alt="image-1"
          />
        </Box>
      </Container>
    </div>
  );
}

export default Hero;
