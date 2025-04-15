"use client";
import React from "react";
import {
  Typography,
  Grid,
  Box,
  Paper,
  useTheme,
  useMediaQuery,
} from "@mui/material";

const Footer: React.FC = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  return (
    <>
      <Box
        sx={{
          py: 6,
          px: 10,
          color: "#fff",
          textAlign: "center",
          backgroundColor: "#2a024a",
        }}
      >
        <Typography variant="h3">Get In Touch</Typography>
        <Grid container spacing={4} justifyContent="center" sx={{ mt: 2 }}>
          <Grid item xs={12} sm={4}>
            <Paper
              elevation={3}
              sx={{
                p: 3,
                textAlign: "center",
                width: isMobile ? "220px" : "auto",
              }}
            >
              <Typography variant="h6">📍 Address</Typography>
              <Typography>Township, Lahore</Typography>
            </Paper>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Paper
              elevation={3}
              sx={{
                p: 3,
                textAlign: "center",
                width: isMobile ? "220px" : "auto",
              }}
            >
              <Typography variant="h6">📞 Phone</Typography>
              <Typography>+92 324-9430883</Typography>
            </Paper>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Paper
              elevation={3}
              sx={{
                p: 3,
                textAlign: "center",
                width: isMobile ? "220px" : "auto",
              }}
            >
              <Typography variant="h6">📧 Email</Typography>
              <Typography>contact@stealthviper.click</Typography>
            </Paper>
          </Grid>
        </Grid>
        {/* Social Links */}
        {/* <Box sx={{ mt: 3 }}>
          <Typography variant="h6">Follow Us</Typography>
          <Box
            sx={{ display: "flex", justifyContent: "center", gap: 2, mt: 2 }}
          >
            <Link href="#" sx={{ color: "#fff", fontSize: "24px" }}>
              📘
            </Link>
            <Link href="#" sx={{ color: "#fff", fontSize: "24px" }}>
              🐦
            </Link>
            <Link href="#" sx={{ color: "#fff", fontSize: "24px" }}>
              📺
            </Link>
            <Link href="#" sx={{ color: "#fff", fontSize: "24px" }}>
              📷
            </Link>
          </Box>
        </Box> */}
      </Box>

      {/* Footer */}
      <Box
        sx={{
          backgroundColor: "#2a024a",
          color: "#fff",
          textAlign: "center",
          py: 3,
        }}
      >
        <Typography>
          &copy; {new Date().getFullYear()} All Rights Reserved | Stealth Viper
        </Typography>
      </Box>
    </>
  );
};

export default Footer;
