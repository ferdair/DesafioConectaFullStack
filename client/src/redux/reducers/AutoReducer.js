const { types } = require("../types/types");

const initialState = {
  autoCreado: null,
  autoCircula: null,
};

const TramitesReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.createAuto:
      return {
        ...state,
        autoCreado: action.payload,
      };

    case types.getCirculacion:
      return {
        ...state,
        autoCircula: action.payload,
      };

    default:
      return state;
  }
};

export default TramitesReducer;
