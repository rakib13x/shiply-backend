import httpStatus from 'http-status';
import { UserServices } from '../services/user.service';
import catchAsync from '../utils/catchAsync';
import sendResponse from '../utils/sendResponse';

const createUser = catchAsync(async (req, res) => {
  const result = await UserServices.createUserIntoDb(req.body);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'User is created successfully.',
    data: result,
  });
});

export const UserControllers = {
  createUser,
};
