import axios from "axios";

const API_URL = 'https://top-blogapi2.onrender.com';

const sendComment = async (data) => {
    try {
        const result = await axios.post(`${API_URL}/api/comments`, data);
        if (result.status === 200) {
            console.log(result);
            return result;
        } else {
            console.log('Error desconocido');
        }
    } catch(error) {
        if (error.response.status === 400) {
            return error.response;
        } else {
            console.log(error);
        }
    }
}

const commentService = { sendComment }

export default commentService;