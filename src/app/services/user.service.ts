import { TUser } from '../interface/user.interface';
import { User } from '../model/user.model';

const createUserIntoDb = async (user: TUser) => {
  const result = await User.create(user);
  return result;
};

const getAllUsersFromDb = async () => {
  const result = await User.find({});
  return result;
};

export const UserServices = {
  createUserIntoDb,
  getAllUsersFromDb,
};
