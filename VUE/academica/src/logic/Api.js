/* eslint-disable prettier/prettier */
import axios from "axios";
const API = "https://academica-g54.herokuapp.com/cursos";


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
        return axios.put(API,info);
    },

    eliminar(id) {
        const API2 = `${API}/${id}`;
        return axios.delete(API2,id);
    }
}
