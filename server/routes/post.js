import express  from 'express';
import {getpost,createpost} from '../controllers/post.js';
const router =express.Router();
router.get('/',getpost);
router.post('/',createpost);

export default router;
