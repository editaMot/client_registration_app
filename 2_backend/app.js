const express = require('express');
const cors = require('cors');

require('dotenv').config();

const connectMongoDB = require('./config/db.js');
const Client = require('./models/Client.model.js');
const asyncHandler = require('express-async-handler');

const app = express();

const PORT = process.env.PORT || 5000;

// -- connecting DB
connectMongoDB();

// Middlewares
app.use(express.json());
app.use(cors());

//Routes
// -- Get all client by id
app.get(
  '/api/clients/:id',
  asyncHandler(async (req, res) => {
    const client = await Client.findById(req.params.id);

    if (client) res.status(201).json(client);
    else res.status(404).json({ message: 'Client not found' });
  })
);

// -- Get all clients
app.get(
  '/api/clients',
  asyncHandler(async (_req, res) => {
    const clients = await Client.find({});
    res.status(201).json(clients);
  })
);

// -- create user
app.post(
  '/api/clients',
  asyncHandler(async (req, res) => {
    const { name, email, date, time } = req.body;
    const isClientDataValid = new Client({ name, email, date, time });

    const client = await Client.create(isClientDataValid);

    if (client) res.status(201).json(client);
    else res.status(404).json({ message: 'Client not added' });
  })
);

// -- update client by id
app.put(
  '/api/clients/:id',
  asyncHandler(async (req, res) => {
    const client = await Client.findByIdAndUpdate(req.params.id, req.body);

    if (client) res.status(201).json(client);
    else res.status(404).json({ message: 'Client not added' });
  })
);

// -- delete client
app.delete(
  '/api/clients/:id',
  asyncHandler(async (req, res) => {
    const client = await Client.findByIdAndDelete(req.params.id);

    if (client) res.status(201).json(client);
    else res.status(404).json({ message: 'Client not added' });
  })
);

app.listen(PORT, () => console.log(`Server is running on port: ${PORT}`));
