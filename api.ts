export const Path = {
  orders: '/orders',
  restaurants: '/restaurants',
};

export class ApiError extends Error {
  status: number;

  error: unknown;

  constructor(message: string, status: number, error: unknown) {
    super(message);

    this.status = status;
    this.error = error;
  }
}

const Method = {
  GET: 'GET',
  POST: 'POST',
};

const Status = {
  OK: 200,
  BAD: 400,
  CREATED: 201,
} as const;

type MethodValueType = typeof Method[keyof typeof Method];
type StatusValueType = typeof Status[keyof typeof Status];

interface Res<T> {
  data: T;
  status: StatusValueType;
  message: string;
}

const api = async <T>(url: string, method: MethodValueType, body?: any) => {
  try {
    const response = await fetch(`http://localhost:3000${url}`, { method, body });
    const jsonData = await response.json() as Res<T>;

    const { status, message } = jsonData;

    if (status !== Status.OK) throw new ApiError(message, status, jsonData);

    return jsonData;
  } catch (error: unknown) {
  
    if (error instanceof ApiError) throw error;

    throw new ApiError('Server Error', Status.BAD, error);
  }
};

export default api;
