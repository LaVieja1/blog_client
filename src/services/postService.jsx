import axios from "axios";

const API_URL = 'https://top-blogapi2.onrender.com'

const getPosts = async () => {
    try {
        const result = await axios.get(`${API_URL}/api/posts`);
        if (result.status === 200) {
            return result.data;
        } else {
            console.log('Error desconocido');
        }
    } catch(error) {
        console.log(error);
    }
}

const getPostsById = async (id) => {
    try {
        const result = await axios.get(`${API_URL}/api/posts/${id}`);
        if (result.status === 200) {
            return result.data;
        } else {
            console.log('Error desconocido');
        }
    } catch(error) {
        console.log(error)
    }
}

const postService = {
    getPosts,
    getPostsById,
}

export default postService;