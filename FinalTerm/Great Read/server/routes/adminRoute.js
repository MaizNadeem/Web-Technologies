const express = require('express');
const multer = require('multer');
const path = require('path');
const adminController = require('../controllers/adminController');

const adminRoute = express.Router();

const upload = multer({
    storage: multer.memoryStorage(),
    limits: {
        fileSize: 5 * 1024 * 1024,
    },
});

const adminPagePath = path.join(__dirname, '..', 'pages', 'adminpage');
const updatePagePath = path.join(__dirname, '..', 'pages', 'updatepage');
const categoriesPagePath = path.join(__dirname, '..', 'pages', 'categoriesPage');

adminRoute.use(express.static(adminPagePath));
adminRoute.use('/update', express.static(updatePagePath));
adminRoute.use('/categories', express.static(categoriesPagePath));

adminRoute.post('/uploadbook', upload.single('image'), adminController.checkDuplicateTitle, adminController.uploadBook);
adminRoute.post('/uploadbook/confirm', upload.single('image'), adminController.uploadBook);
adminRoute.get('/getbook/:id', adminController.getBook);
adminRoute.post('/updatebook', upload.single('image'), adminController.updateBook);
adminRoute.get('/searchbook', adminController.searchBook);
adminRoute.delete('/deletebook/:id', adminController.deleteBook);

adminRoute.post('/uploadquote', upload.single('image'), adminController.uploadQuote);
adminRoute.get('/searchquote', adminController.searchQuote);
adminRoute.post('/deletequote', adminController.deleteQuote);

adminRoute.post('/addcategory', upload.single('categoryImage'), adminController.addCategory);
adminRoute.get('/searchcategory', adminController.searchCategory);
adminRoute.post('/deletecategory', adminController.deleteCategory);

adminRoute.post('/updatetoppicks', adminController.updateTopPicks);

module.exports = { adminRoute };
