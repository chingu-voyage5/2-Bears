import { Router } from "express";
import * as bcrypt from "bcrypt";
import * as db from "../../models";

const router = Router();
const saltRounds = 10;

router.post("/adduser", async (req, res) => {
  try {
    const { email } = req.body;
    const hasUser = await db.User.findOne({ where: { email } });

    if (hasUser) return res.status(404).send("That email is taken. Please try another email.");

    const { password, fName, lName, username, image } = req.body;

    const hash = await bcrypt.hash(password, saltRounds);

    const user = await db.User.create({
      email: email.toLowerCase(),
      password: hash,
      userType: 1,
      fName,
      lName,
      username,
      image
    });

    return res.status(201).send({ user });
  } catch (error) {
    return res.status(500).send(error);
  }
});

router.get("/:email/:password", async (req, res) => {
  try {
    const { email, password } = req.params;

    const user = await db.User.findOne({ where: { email } });
    if (!user) return res.status(404).send("Credentials are incorrect");

    const isCorrect = await bcrypt.compare(password, user.password);

    if(!isCorrect) return res.status(402).send('Incorrect password')
    return res.status(200).send({ user });
  } catch (error) {
    return res.status(500).send(error);
  }
});

export default router;
