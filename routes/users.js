import express from "express";


import { createUser,  getUser, getUserId, deleteUser, patchUser } from '../controllers/users.js';


const router = express.Router();



// all routes in here are starting with /users
router.get('/', getUser);


router.post('/', createUser);


router.get('/:id', getUserId );



router.delete('/:id', deleteUser );



router.patch ('/:id', patchUser);



export default router;