import { Order_Items } from "../../models";
import { Instance, Attributes } from "../../models/OrderItem";
import BaseRepository from "./BaseRepository";

class OrderItemRepository extends BaseRepository<Instance, Attributes> {}

export default new OrderItemRepository(Order_Items);
