import axios from 'axios';
import { addScientist, setScientists } from './scientistSlice';
import { useDispatch } from 'react-redux';

const BASE_URL = 'http://localhost:5100/api';

const getAllScientists = async () => {
  const { data } = await axios.get(`${BASE_URL}/scientists`);

  console.log(data);

  return data;
}

const createScientist = async (scientist) => {
  console.log(scientist);
  await axios.post(`${BASE_URL}/scientists`, scientist);
}

export { getAllScientists, createScientist };