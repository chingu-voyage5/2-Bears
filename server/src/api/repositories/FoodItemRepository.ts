import { Food_Items } from "../../models";
import { Instance, Attributes } from "../../models/FoodItem";
import BaseRepository from "./BaseRepository";

class FoodItemRepository extends BaseRepository<Instance, Attributes> {}

export default new FoodItemRepository(Food_Items);
