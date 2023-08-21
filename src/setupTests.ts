import server from './mocks/server';
// eslint-disable-next-line import/no-extraneous-dependencies
import 'whatwg-fetch';

beforeAll(() => server.listen({ onUnhandledRequest: 'error' }));

afterAll(() => server.close());

afterEach(() => server.resetHandlers());
