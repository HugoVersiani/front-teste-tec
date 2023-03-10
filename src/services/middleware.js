import store from '../store/index';
export default {
    auth(to, from, next) {

      
        const token =  localStorage.getItem('token');

        //Sei que idealmente o correto seria
        //fazer uma requisição à API para verificar
        //a validade do token

        if(!token) {
            next('/login');
        };
        next();
    }
}