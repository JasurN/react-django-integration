import axios from 'axios';

import {GET_LEADS, DELETE_LEAD} from "./types";

// GET LEADS
export const getLeads = () => dispatch => {
    axios.get('/api/leads/')
        .then(res => {
            dispatch({
                type: GET_LEADS,
                payload: res.data
            })
        })
        .catch(error => console.log(error));
};

// DELETE LEADS
export const deleteLeads = (id) => dispatch => {
    axios.delete(`/api/leads/${id}/`)
        .then(res => {
            dispatch({
                type: DELETE_LEAD,
                payload: id
            })
        })
        .catch(error => console.log(error));
};