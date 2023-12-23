import express from 'express';

import uploadMiddleware from '../middleware/uploadFile';
import { getUploadImage, uploadImage } from '../controllers/upload/image';

const routerUpload = express.Router();


routerUpload.post('/image', uploadMiddleware, uploadImage);
routerUpload.get('/image/:fileName', getUploadImage);


export default routerUpload;