import { Router } from "express";
import * as db from "../../models";

const router = Router();

router.post("/", async (req, res) => {
  try {
    const hasItem = await db.Food_Items.findOne({ where: { food_name: req.body.food_name } });

    if (hasItem) return res.status(404).send("That food category exist. Please try another food category.");

    const { food_name, food_details, food_price, food_category_name } = req.body;

    const food_item = await db.Food_Items.create({
      food_name,
      food_details,
      food_price,
      food_category_name
    });
    return res.status(201).send({ food_item });
  } catch (error) {
    return res.status(500).send(error);
  }
});

router.get("/:food_category_name", async (req, res) => {
  try {
    const { food_category_name } = req.body;
    const food_items = await db.Food_Items.findAll({ where: { food_category_name } });

    if (!food_items) return res.status(404).send("there are no food items for this category");
    return res.status(200).send({ food_items });
  } catch (error) {
    return res.status(500).send(error);
  }
});

export default router;
