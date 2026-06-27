import React from "react";
import Image from "next/image";
import { Box, Link, AppBar, Toolbar } from "@mui/material";
import logo from "../../public/Images/6.png";

const Header: React.FC = () => {
  return (
    <AppBar
      position="static"
      sx={{ backgroundColor: "#852230", padding: "5px" }}
    >
      <Toolbar sx={{ justifyContent: "space-between" }}>
        <Link
          href="/"
          sx={{
            textDecoration: "none",
            color: "#fff",
            fontSize: "20px",
            fontWeight: "bold",
          }}
        >
          <Image src={logo} width={80} height={70} alt="Grentix Gaming" />
        </Link>
        <Box sx={{ display: "flex", gap: 2 }}>
          {/* <Link href="/services" sx={{ textDecoration: "none", color: "#fff" }}>
            Services
          </Link> */}
          <Link
            href="/privacy-policy"
            sx={{ textDecoration: "none", color: "#fff" }}
          >
            Privacy Policy
          </Link>
          <Link href="/contact" sx={{ textDecoration: "none", color: "#fff" }}>
            Contact
          </Link>
          <Link href="/about" sx={{ textDecoration: "none", color: "#fff" }}>
            About
          </Link>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
