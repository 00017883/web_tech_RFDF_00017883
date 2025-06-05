const { v4: uuidv4 } = require('uuid');

let pets = [];

// Get all pets
exports.getAllPets = () => {
    return pets;
};

// Get one pet by ID
exports.getPetById = (id) => {
    return pets.find(pet => pet.id === id);
};

// Create a new pet
exports.createPet = ({ name, species, age, description }) => {
    const newPet = {
        id: uuidv4(),
        name,
        species,
        age,
        description
    };
    pets.push(newPet);
    return newPet;
};

// Update an existing pet
exports.updatePet = (id, updatedPet) => {
    pets = pets.map(pet => 
        pet.id === id ? { ...pet, ...updatedPet } : pet
    );
};

// Delete a pet
exports.deletePet = (id) => {
    pets = pets.filter(pet => pet.id !== id);
};
