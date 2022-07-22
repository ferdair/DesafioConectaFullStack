const baseUrl = "http://localhost:8080";

const noTokenFetch = (endpoint, data, method = "GET") => {
  const url = `${baseUrl}/${endpoint}`; //localhost:4000/api ...

  if (method === "GET") {
    return fetch(url);
  } else {
    return fetch(url, {
      method,
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(data),
    });
  }
};

export { noTokenFetch };

// const initTramite = {
//     asunto: '',
//     solicitanteDB: null,

//     nuevoSolicitante: {
//         nombreSoli: '',
//         identificacionSoli: '',
//         telefonoSoli: '',
//         correoSoli: '',
//     },
//     usuarioDB: null,
//     documentoId : '',
//     numOficio: '',
//     interno: false,

// }

//const initUI = {
//
//    showInterno: false,
//
//    expSearchSoli : "",
//    openSoliComboBox : false,
//    optionsSolicitantes : [],
//    showSoliRegisterForm : false,
//    expSearchUser : "",
//    openSearchUser: false,
//    optionsUser: [],
//
//    showChargedFile: false,
//    nameChargedFile: false
//}
