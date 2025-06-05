const express = require('express');
const router = express.Router();

// homepage
router.get('/', (req, res) => {
    res.render('index', {
        title: 'Pet Adoption App',
        message: 'This web application was created to fulfill Web Technology module’s requirements and does not represent an actual company or service.'
    });
});

module.exports = router;
