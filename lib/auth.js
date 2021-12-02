import axios from 'axios';

export const loginUser = async (username, password) => {
    const response = await axios.post("https://tasklogin.herokuapp.com/api/login", {username, password})
    return response;
}