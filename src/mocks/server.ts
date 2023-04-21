/* eslint-disable */
import { setupServer } from 'msw/node';

// import handlers from './handlers';

const handlers: any[] = [];

const server = setupServer(...handlers);

export default server;
