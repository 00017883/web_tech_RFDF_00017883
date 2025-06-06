const { body } = require('express-validator');

const registerPetValidator = () => {
    return [
        body('name')
            .notEmpty().withMessage('Name is required.')
            .isLength({ max: 50 }).withMessage('Name must be less than 50 characters.'),
        body('species')
            .notEmpty().withMessage('Species is required.')
            .isLength({ max: 30 }).withMessage('Species must be less than 30 characters.'),
        body('age')
            .notEmpty().withMessage('Age is required.')
            .isInt({ min: 0 }).withMessage('Age must be a positive integer.'),
        body('description')
            .optional()
            .isLength({ max: 200 }).withMessage('Description must be less than 200 characters.')
    ];
}

module.exports = { registerPetValidator };