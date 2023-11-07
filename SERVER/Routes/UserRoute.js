import express from "express";
import { getUser, updateUser,deleteUser,followUser,UnFollowUser,getAllUsers } from "../Controllers/UserController.js";
import authMiddleWare from "../Middleware/authMiddleware.js";


const router = express.Router();
//get requests
router.get('/',getAllUsers)
router.get('/:id',getUser)


// PUT requests
router.put('/:id',authMiddleWare,updateUser)
router.put('/:id/follow',authMiddleWare,followUser)
router.put('/:id/unfollow',authMiddleWare,UnFollowUser)
//delete requests
router.delete('/:id',authMiddleWare,deleteUser);

export default router;