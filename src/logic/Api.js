/* eslint-disable prettier/prettier */
import axios from "axios";
/*const API = "https://academica-g54.herokuapp.com/cursos";*/
const API = "http://localhost:3000/cursos";


export default {
    obtenerTodo() {
        return axios.get(API)
    },
    
    agregar(id) {
        const API2 = `${API}/${id}`;
        return axios.post(API2,id);
    },

    obtenerUno(id) {
        const API2 = `${API}/${id}`;
        return axios.get(API2);
    },

    actualizar(info) {
        return axios.post(API,info);
    },

    eliminar(info) {
        /* const API2 = `${API}/${id}`;
        return axios.delete(API2,id); */
        return axios.delete(API,info);
    }
}
