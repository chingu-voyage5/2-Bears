import { User } from "../../models";
import { Instance, Attributes } from "../../models/User";
import BaseRepository from "./BaseRepository";

class UserRepository extends BaseRepository<Instance, Attributes> {}

export default new UserRepository(User);
