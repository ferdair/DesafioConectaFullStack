import React, { useEffect } from "react";
import Layout from "../components/Layout";
import { useDispatch, useSelector } from "react-redux";
import { startConsultarCirculacion } from "../redux/actions/AutoActions";
import { styled } from "@mui/system";
import { Box, Button, Grid, TextField } from "@mui/material";
import {
  AccountBox,
  Badge,
  Check,
  Event,
  Palette,
  SettingsApplications,
} from "@mui/icons-material";
import * as yup from "yup";
import { useFormik } from "formik";

const Container = styled("div")(({ theme }) => ({
  margin: "30px",
  [theme.breakpoints.down("sm")]: {
    margin: "16px",
  },
  "& .breadcrumb": {
    marginBottom: "30px",
    [theme.breakpoints.down("sm")]: {
      marginBottom: "16px",
    },
  },
}));

const validationSchema = yup.object({
  placa: yup
    .string("Por favor ingrese la placa")
    .required("Placa es obligatorio"),
  fechaHora: yup
    .string("Por favor ingrese la fecha y hora")
    .required("Fecha y hora es obligatorio"),
 
});

function Consulta() {
  const dispatch = useDispatch();
  const { autoCircula } = useSelector((state) => state.autos);

  const formik = useFormik({
    initialValues: {
      placa: "",
      fechaHora: "",
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      const urlParams = `placa=${values.placa}&fechaHora=${values.fechaHora}`;
      console.log(urlParams)
      dispatch(startConsultarCirculacion(urlParams));
    },
  });

  return (
    <Layout>
      <div>
        <Container>
          <Grid
            container
            spacing={2}
            direction="row"
            justifyContent="center"
            alignItems="center"
          >
            <Grid item xs={12} md={8}>
              <form onSubmit={formik.handleSubmit}>
                <Grid container>
                  <Box
                    sx={{
                      color: "#162883",
                      fontWeight: "bold",
                      fontSize: 25,
                      pb: 2,
                    }}
                  >
                    Consultar si su Auto circula
                  </Box>
                </Grid>
                <Grid container spacing={2}>
                  <Grid
                    item
                    xs={12}
                    md={9}
                    alignItems="center"
                    justifyContent="center"
                  >
                    <Box
                      sx={{
                        display: "flex",
                        alignItems: "center",
                      }}
                    >
                      <Badge
                        sx={{
                          color: "#162883",
                          mr: 1,
                          my: 0.5,
                        }}
                      />
                      <TextField
                        id="placa"
                        name="placa"
                        label="Placa"
                        variant="outlined"
                        fullWidth
                        required
                        value={formik.values.placa}
                        onChange={formik.handleChange}
                        error={
                          formik.touched.placa && Boolean(formik.errors.placa)
                        }
                        helperText="EJEMPLO AAA-123 o AAA-0123"
                      />
                    </Box>
                  </Grid>
                  <Grid
                    item
                    xs={12}
                    md={9}
                    alignItems="center"
                    justifyContent="center"
                  >
                    <Box
                      sx={{
                        display: "flex",
                        alignItems: "center",
                      }}
                    >
                      <Event
                        sx={{
                          color: "#162883",
                          mr: 1,
                          my: 0.5,
                        }}
                      />
                      <TextField
                        id="fechaHora"
                        name="fechaHora"
                        variant="outlined"
                        fullWidth
                        required
                        value={formik.values.fechaHora}
                        onChange={formik.handleChange}
                        type="datetime-local"
                        error={
                          formik.touched.fechaHora &&
                          Boolean(formik.errors.fechaHora)
                        }
                        helperText="Fecha y Hora"
                        
                      />
                    </Box>
                  </Grid>

                  <Grid item xs={12} md={6} display="flex" alignItems="center">
                    <Button
                      variant="contained"
                      type="submit"
                      
                    >
                      Consultar
                    </Button>
                  </Grid>
                </Grid>
              </form>
            </Grid>
          </Grid>
        </Container>
      </div>
    </Layout>
  );
}

export default Consulta;
