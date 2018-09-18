import { Orders } from "../../models";
import { Instance, Attributes } from "../../models/Order";
import BaseRepository from "./BaseRepository";

class OrderRepository extends BaseRepository<Instance, Attributes> {}

export default new OrderRepository(Orders);
