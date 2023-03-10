import { createStore } from 'vuex'

export default createStore( {
    state: {
        token: false,
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
        },
        setToken(state, data) {
            state.token = data
        }
    }
}

)