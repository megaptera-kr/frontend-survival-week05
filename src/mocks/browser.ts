// eslint-disable-next-line import/no-extraneous-dependencies
import { setupWorker } from 'msw';
import handlers from './handlers';

// eslint-disable-next-line import/prefer-default-export
const worker = setupWorker(...handlers);

export default worker;
