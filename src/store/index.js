import { createStore } from 'vuex'

export default createStore( {
    state: {
      simulation: false,
      car: false,
      cars: []
    },
    mutations: {
        storeCar(state, data) {
            state.cars = data
        },
        showSimulation(state, data) {
            state.simulation = data
        }
    }
}

)