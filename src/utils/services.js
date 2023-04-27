// third party
import AxiosMockAdapter from 'axios-mock-adapter';

// project import
import axios from './axios';

// ==============================|| SERVICES ||============================== //

const services = new AxiosMockAdapter(axios, { delayResponse: 0 });
export default services;
