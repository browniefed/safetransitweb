export const UPDATE_VEHICLES = 'UPDATE_VEHICLES';

export const updateVehicles = (vehicles) => {
  return {
    type: UPDATE_VEHICLES,
    vehicles
  }
}

const vehiclesReducer = (state = [], action) => {
  switch (action.type) {
    case UPDATE_VEHICLES:
      return action.vehicles;
    default:
      return state;
  }
};

export default vehiclesReducer;
