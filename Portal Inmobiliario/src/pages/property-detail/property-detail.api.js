import Axios from 'axios';

const url = `${process.env.BASE_API_URL}/properties`;

export const getProperty = (id) => Axios.get(url, {params: {id}}).then(response => {
        return response.data
    });

const urlEquiment = `${process.env.BASE_API_URL}/equipments`;

export const getEquipmentList = () => Axios.get(urlEquiment).then(response => {
        return response.data
    });