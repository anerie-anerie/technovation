import express from 'express';
import * as authController from '../controllers/authController.js'; // Use the named import for your controller

const router = express.Router();

router.post('/register', authController.register);
router.post('/login', authController.login);

export default router; // Use `export default` instead of `module.exports`
