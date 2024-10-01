import axios from 'axios';

const URL = 'http://localhost:5000';

export const signUp = async (data) => {
    try{
        return await axios.post(`${URL}/signup`, data);
    }catch(error) {
        alert(error.response.data.message);
    }
}

export const userLogin = async (data) => {
    try{
        return await axios.post(`${URL}/login`, data);
    }
    catch(error) {
        // console.log("Error While calling Login Api", error);
        return error.response;
    }
}
