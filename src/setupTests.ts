// eslint-disable-next-line import/no-extraneous-dependencies
import 'whatwg-fetch'; import '@testing-library/jest-dom';
import server from './mocks/server';

beforeAll(() => server.listen());

afterEach(() => server.resetHandlers());

afterAll(() => server.close());
