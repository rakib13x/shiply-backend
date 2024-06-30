/* eslint-disable @typescript-eslint/no-explicit-any */
import { Response } from 'express';

type TResponse<T> = {
  statusCode: number;
  success: boolean;
  message: string;
  data: T;
  token?: string;
};

const sendResponse = (res: Response, response: TResponse<T>) => {
  const { statusCode, success, message, data, token } = response;

  const responseBody: any = {
    success,
    message,
    data,
  };
  if (token) {
    responseBody.token = token;
  }

  res.status(statusCode).json(responseBody);
};

export default sendResponse;
