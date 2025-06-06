const petsService = require('../../services/pets');
const { validationResult } = require('express-validator');
const { registerPetValidator } = require('../../validators/pets');

// List all pets
exports.listPets = (req, res) => {
    const pets = petsService.getAllPets();
    res.render('pets/index', { pets });
};

// Show create form
exports.showCreateForm = (req, res) => {
    res.render('pets/create_update', { pet: {}, formAction: '/pets' });
};


// Handle creation of a new pet
exports.createPet = [
    ...registerPetValidator(), 
    (req, res) => {
        const { name, species, age, description } = req.body;
    // const errors = [];

//    if (!name || !species || !age) {
//        errors.push('All fields are required.');
//    }

//    if (errors.length > 0) {
//        return res.render('pets/create_update', {
//            errors,
//            pet: { name, species, age, description },
//            formAction: '/pets'
//        });
//    }
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.render('pets/create_update', {
                errors: errors.array(),
                pet: { name, species, age, description },
                formAction: '/pets'
           });
        }

        petsService.createPet({ name, species, age, description });
        res.redirect('/pets');
    }
];

// Show form to edit an existing pet
exports.showEditForm = (req, res) => {
    const pet = petsService.getPetById(req.params.id);

    if (!pet) return res.status(404).send('Pet not found.');

    res.render('pets/create_update', {
        pet,
        formAction: `/pets/${req.params.id}`
    });
};

// Handle updating an existing pet
exports.updatePet = (req, res) => {
    const { name, species, age, description } = req.body;
    const errors = [];

    if (!name || !species || !age) {
        errors.push('All fields are required.');
    }

    if (errors.length > 0) {
        return res.render('pets/create_update', {
            errors,
            pet: { id: req.params.id, name, species, age, description },
            formAction: `/pets/${req.params.id}`
        });
    }

    petsService.updatePet(req.params.id, { name, species, age, description });
    res.redirect('/pets');
};

// Handle deleting a pet
exports.deletePet = (req, res) => {
    petsService.deletePet(req.params.id);
    res.redirect('/pets');
};