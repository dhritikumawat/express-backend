const getContacts = async (req, res) => {
  res.status(200).json({ message: `Get contacts ${req.params.id}` });
};

const createContact = (req, res) => {
  const { name, email, phone } = req.body;
  if (!name || !email || !phone) {
    res.status(400);
    throw new Error("All fields are required");
  }
  res.status(201).json({ message: `Create new contact ${req.params.id}` });
};

const updateContact = (req, res) => {
  res.status(200).json({ message: `Update contact ${req.params.id}` });
};

const deleteContact = (req, res) => {
  res.status(200).json({ message: `Delete contact for ${req.params.id}` });
};

module.exports = { getContacts, createContact, updateContact, deleteContact };
