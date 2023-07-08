import {
    me,
    configTime
  } from "../controllers/auth.controllers";
  import { Router } from "express";
  
  const router = Router();
  router.put("/time", configTime);
  router.get("/@me", me);
  
  module.exports = router;