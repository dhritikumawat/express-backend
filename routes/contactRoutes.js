const express = require("express");
const router = express.Router();
const {
  getContacts,
  createContact,
  updateContact,
  deleteContact,
} = require("../controllers/contactControllers");

router.route("/").get(getContacts).post(createContact);

router.route("/:id").get(getContacts).put(updateContact).delete(deleteContact);

module.exports = router;
