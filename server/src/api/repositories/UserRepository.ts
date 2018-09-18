import { User } from "../../models";
import { UserInstance, UserAttributes } from "../../models/User";
import BaseRepository from "./BaseRepository";

class UserRepository extends BaseRepository<UserInstance, UserAttributes> {}

export default new UserRepository(User);
