import { Router } from "express";
import * as bcrypt from "bcrypt";
import * as util from "./utils";
import * as db from "../../models";

const router = Router();
const saltRounds = 10;

router.post("/adduser", async (req, res) => {
  console.log("this is the body", req.body);

  try {
    console.log("hi am i even getting in here");
    const salt = await bcrypt.genSalt(saltRounds);
    const hash = await bcrypt.hash(req.body.password, salt);
    const user = await db.User.findOne({ where: { email: req.body.email } });
    if (user) {
      console.log("This email exist, please enter a new email address");
      res.status(404).send("That email is taken. Please try another email.");
    } else {
      console.log("this is the body", req.body);
      const newUser = await db.User.create({
        email: req.body.email.toLowerCase(),
        password: hash,
        userType: 1,
        fName: req.body.fName,
        lName: req.body.lName,
        username: req.body.username,
        image: req.body.image
      });
      console.log("Signed Up New User: ", { user: newUser });
      res.status(201).send({ user: newUser });
    }
  } catch (error) {
    console.log("Error creating Users", error);
    res.status(500).send(error);
  }
});

router.get("/:email/:password", async (req, res) => {
  try {
    console.log("this is req.params", req.params);
    const user = await db.User.findOne({ where: { email: req.params.email } });
    console.log("this is the user", user);
    if (user) {
      const data = await bcrypt.compare(req.params.password, user.password);
      if (data) {
        console.log("User Logged In: ", { user, id_token: util.hasher(`${req.params.email}`) });
        res.status(200).send({ user: user, id_token: util.hasher(req.params.email) });
      } else {
        res.status(404).send("Credentials are incorrect");
      }
    }
  } catch (error) {
    console.log("Error in fetch User", error);
    res.status(500).send(error);
  }
});

export default router;
