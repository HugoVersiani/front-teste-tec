import { createStore } from 'vuex'

export default createStore( {
    state: {
      
    },
    mutations: {
        storeCar(state, data) {
            state.cars = data
        }
    }
}

)