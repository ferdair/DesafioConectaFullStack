import { AppBar, Button, Link, Toolbar, Typography } from "@mui/material";
import React from "react";

function Navigations() {
  return (
    <AppBar
      position="static"
      color="default"
      elevation={0}
      sx={{ borderBottom: (theme) => `1px solid ${theme.palette.divider}` }}
    >
      <Toolbar sx={{ flexWrap: "wrap" }}>
        <Typography variant="h6" color="inherit" noWrap sx={{ flexGrow: 1 }}>
          Registro de autos
        </Typography>
        <nav>
          <Link
            variant="button"
            color="text.primary"
            href="/"
            sx={{ my: 1, mx: 1.5 }}
          >
            Registrar Auto
          </Link>
          <Link
            variant="button"
            color="text.primary"
            href="/consulta"
            sx={{ my: 1, mx: 1.5 }}
          >
            Consultar circulación
          </Link>
        </nav>
      </Toolbar>
    </AppBar>
  );
}

export default Navigations;
