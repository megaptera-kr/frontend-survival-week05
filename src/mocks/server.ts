/* eslint-disable import/no-extraneous-dependencies */
import { setupServer } from 'msw/node';

import handler from './handler';

const server = setupServer(...handler);

export default server;
