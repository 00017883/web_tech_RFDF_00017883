const express = require('express');
const router = express.Router();
const petController = require('../../controllers/pets');

// List all pets
router.get('/', petController.listPets);

// Route to show create form
router.get('/new', petController.showCreateForm);

// Route to handle create form
router.post('/', petController.createPet);

// Route to show edit form
router.get('/:id/edit', petController.showEditForm);

// Route to handle update form
router.post('/:id', petController.updatePet);

// Route to delete a pet
router.post('/:id/delete', petController.deletePet);

module.exports = router;