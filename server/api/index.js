const express = require('express');
const router = express.Router();
const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

router.get('/', (req, res) => {
  res.send('api route working')
})

router.get('/fish', async (req, res) => {
  const fish = await prisma.fish.findMany()
  res.send(fish);
})

module.exports = router;
