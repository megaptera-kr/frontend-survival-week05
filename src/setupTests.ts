import 'whatwg-fetch';
import server from './mocks/server';
// import { worker } from './mocks/browser';

// const isServer = typeof window === undefined;

beforeAll(() => server.listen({ onUnhandledRequest: 'error' }));

afterAll(() => server.close());

afterEach(() => server.resetHandlers());

// beforeAll(() => worker.start({ onUnhandledRequest: 'error' }));

// afterAll(() => worker.stop());

// afterEach(() => worker.resetHandlers());
