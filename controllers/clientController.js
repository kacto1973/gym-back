import Client from "../models/Client.js";

//GET
export const getClients = async (req, res) => {
  try {
    const clients = await Client.find();

    if (clients.length === 0) {
      res.status(200).json({ message: "No clients available", clients: [] });
    }

    return res.status(200).json(clients);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

//POST
export const createClient = async (req, res) => {
  try {
    const newClient = await Client.create(req.body);
    return res.status(201).json(newClient);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

//PUT
export const updateClient = async (req, res) => {
  try {
    const { id } = req.params;
    const updatedClient = await Client.findByIdAndUpdate(id, req.body, {
      new: true,
    });
    if (!updatedClient) {
      return res.status(404).json({ message: "Client not found" });
    }

    return res.status(200).json(updatedClient);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};
