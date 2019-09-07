import Axios from 'axios';

export default () => {
    const axiosInstance = Axios.create({
    });
    return axiosInstance;
};
