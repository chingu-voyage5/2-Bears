import { Router } from "express";
import * as db from "../../models";

const router = Router();

router.post("/orders", async (req, res) => {
  try {
    const { id } = req.body;

    // if (typeof id !== "string") return res.status(400).send("Bad Request");
    // const order = await db.Orders.findOne({ where: { order: id } });
  } catch (error) {
    res.status(500).send(error);
  }
});

router.get("/orders", async (req, res) => {
  try {
  } catch (error) {
    res.status(500).send(error);
  }
});

export default router;
