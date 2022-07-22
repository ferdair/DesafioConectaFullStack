import React, { useEffect } from "react";
import Layout from "../components/Layout";
import { useDispatch, useSelector } from "react-redux";
import { startCreateAuto } from "../redux/actions/AutoActions";
import { styled } from "@mui/system";
import { Box, Button, Grid, TextField } from "@mui/material";
import {
  AccountBox,
  Badge,
  Check,
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
  color: yup
    .string("Por favor ingrese el color")
    .required("Color es obligatorio"),
  modelo: yup
    .string("Por favor ingrese el modelo")
    .required("Modelo es obligatorio"),
  chasis: yup
    .string("Por favor ingrese el chasis")
    .required("Chasis es obligatorio"),
});

function Home() {
  const dispatch = useDispatch();
  const { autoCreado } = useSelector((state) => state.autos);


  const formik = useFormik({
    initialValues: {
      placa: "",
      color: "",
      modelo: "",
      chasis: "",
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      dispatch(startCreateAuto(values))
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
                    Registrar nuevo Auto
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
                      <Palette
                        sx={{
                          color: "#162883",
                          mr: 1,
                          my: 0.5,
                        }}
                      />
                      <TextField
                        id="color"
                        name="color"
                        label="color"
                        variant="outlined"
                        fullWidth
                        required
                        value={formik.values.color}
                        onChange={formik.handleChange}
                        error={
                          formik.touched.color && Boolean(formik.errors.color)
                        }
                        helperText={formik.touched.color && formik.errors.color}
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
                      <Check
                        sx={{
                          color: "#162883",
                          mr: 1,
                          my: 0.5,
                        }}
                      />
                      <TextField
                        id="modelo"
                        name="modelo"
                        label="Modelo"
                        variant="outlined"
                        fullWidth
                        required
                        value={formik.values.modelo}
                        onChange={formik.handleChange}
                        error={
                          formik.touched.modelo && Boolean(formik.errors.modelo)
                        }
                        helperText={
                          formik.touched.modelo && formik.errors.modelo
                        }
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
                      <SettingsApplications
                        sx={{
                          color: "#162883",
                          mr: 1,
                          my: 0.5,
                        }}
                      />
                      <TextField
                        id="chasis"
                        name="chasis"
                        label="Chasis"
                        variant="outlined"
                        fullWidth
                        required
                        value={formik.values.chasis}
                        onChange={formik.handleChange}
                        error={
                          formik.touched.chasis && Boolean(formik.errors.chasis)
                        }
                        helperText={
                          formik.touched.chasis && formik.errors.chasis
                        }
                      />
                    </Box>
                  </Grid>
                  <Grid item xs={12} md={6} display="flex" alignItems="center">
                    <Button
                      variant="contained"
                      type="submit"
                      // onClick={listaClientes}
                    >
                      Crear nuevo Auto
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

export default Home;
