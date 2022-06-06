import axios from "axios";

const clienteAxios = axios.create({
  baseURL: `${import.meta.env.VITE_JSON_SERVER_URL}`
})

export default clienteAxios