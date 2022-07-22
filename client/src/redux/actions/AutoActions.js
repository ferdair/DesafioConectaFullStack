import { noTokenFetch } from "../../utils/fetch";
import Swal from "sweetalert2";
import { types } from "../types/types";

export const startCreateAuto = (auto = {}) => {
  return async (dispatch) => {
    try {
      const resp = await noTokenFetch("api/auto/create", auto, "POST");
      const body = await resp.json();
      if (body.status == 200) {
        dispatch(createAuto(body.data));
        Swal.fire("Auto creado", body.message, "success");
      } else {
        Swal.fire("Error", body.message, "error");
      }
    } catch (error) {
      console.log("Error: ", error.message);
      Swal.fire("Error", "Error al crear el auto", "error");
    }
  };
};

const createAuto = (auto) => ({
  type: types.createAuto,
  payload: auto,
});

export const startConsultarCirculacion = (urlParams = "") => {
  return async (dispatch) => {
    try {
      const resp = await noTokenFetch(
        `api/auto/buscar?${urlParams}`,
        {},
        "GET"
      );
      const body = await resp.json();
      if (body.status == 200) {
        dispatch(consultarAuto(body.data));
        let message = "<h3>El auto con los datos<h3><br>";
        Object.entries(body.data).forEach(([key, value]) => {
          message += `<b>${key}</b>: ${value}<br>`;
        });

        message += `<h2>${body.message}</h2>`;
        // Swal.fire("Circulación vehicular", message, "success");
        Swal.fire({
          title: "<strong>Circulación vehicular</strong>",
          icon: "success",
          html: message,
        });
      } else {
        Swal.fire("Error", body.message, "error");
      }
    } catch (error) {
      console.log("Error: ", error.message);
      Swal.fire("Error", error.message, "error");
    }
  };
};

const consultarAuto = (auto) => ({
  type: types.getCirculacion,
  payload: auto,
});
