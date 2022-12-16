import axios from "axios";
import { setCookie } from "./cookie";

const URL = "http://localhost:3000";

export const signup = async (info) => {
    const res = await axios.post(`${URL}/auth`, info)
        .then(
            function (response) {
                // const dt =esponse.data.data;
                // console.log(dt);
                // setCookie("user_id", dt.id, 30);
                // setCookie("role", dt.role, 30);
                return response;
            }
        )
        .catch(
            function (error) {
                console.log(error);
                return error.response;
            }
        )
}

export const login = async (info) => {
    const res = await axios.post(`${URL}/auth/sign_in`, info)
        .then(function (response) {
            const dt = response.data.data;
            console.log(dt);
            setCookie("user_id", dt.id, 30);
            setCookie("role", dt.role, 30);
            return response;
        })
        .catch(function (error) {
            console.log(error.response.status);
            return error.response;
        });
    return res;
}

export const logout = async () => {
    const res = await axios.delete(`${URL}/auth/sign_out`)
        .then(function (response) {
            console.log(response);
            return response;
        })
        .catch(function (error) {
            console.log(error.response.status);
            return error.response;
        });
    return res;
}

export const createClass = async (formdata) => {
    const res = await axios.post(`${URL}/api/v1/classrooms`, formdata)
        .then(function (response) {
            console.log(response);
        })
        .catch(function (error) {
            console.log(error);
        });
}

export const getClassInfo = () => {
    return axios.get(`${URL}/api/v1/classrooms`).then((response) => response.data);
}




