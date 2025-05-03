const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const Order = require('./order.model');

const app = express();
app.use(bodyParser.json());

const mongoUrl = process.env.MONGO_URL || 'mongodb://localhost:27017/orders';
mongoose.connect(mongoUrl)
  .then(() => console.log('Connected to MongoDB'))
  .catch(err => console.error('MongoDB connection error:', err));

app.get('/', (req, res) => res.send('Order Service is running'));

app.post('/orders', async (req, res) => {
  try {
    const order = new Order(req.body);
    await order.save();
    res.status(201).send(order);
  } catch (err) {
    res.status(400).send({ error: err.message });
  }
});

app.get('/orders', async (req, res) => {
  const orders = await Order.find();
  res.send(orders);
});

app.get('/orders/:id', async (req, res) => {
  try {
    const order = await Order.findById(req.params.id);
    if (!order) return res.status(404).send({ error: 'Order not found' });
    res.send(order);
  } catch (err) {
    res.status(500).send({ error: err.message });
  }
});

app.delete('/orders/:id', async (req, res) => {
  try {
    const result = await Order.findByIdAndDelete(req.params.id);
    if (!result) return res.status(404).send({ error: 'Order not found' });
    res.send({ message: 'Order deleted' });
  } catch (err) {
    res.status(500).send({ error: err.message });
  }
});

const PORT = 3000;
app.listen(PORT, () => console.log(`Order service running on port ${PORT}`));
