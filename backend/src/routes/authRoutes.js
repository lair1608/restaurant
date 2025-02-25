const express = require('express');
const router = express.Router();
const authController = require('../controllers/authController');

// Ruta de login
router.post('/login', authController.login);

// Ruta de logout (con JWT el logout se maneja en el frontend, pero se puede definir una ruta si se requiere)
router.post('/logout', authController.logout);

module.exports = router;
