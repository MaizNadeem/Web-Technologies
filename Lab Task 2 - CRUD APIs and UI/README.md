# GREAD READ - SSR CRUD APIs and User Interface

A User Interface passed data to the pre-built APIs for necessary CRUD operations on various collections on database, such as `books`, `notes`, `categories` etc.

### User Interface:

For example, the following code serves the UI for performing necessary API calls for `Upload Books` page:

```javascript

const adminPagePath = path.join(__dirname, '..', 'pages', 'adminpage');
adminRoute.use(express.static(adminPagePath));

```

### Structure for CRUD on Admin Route

When user is authenticated, he has the ability to access following APIs.
Complete implementation of the CRUD operations associated with each API can be found in `Great Read/server/controllers/adminController.js`

```javascript

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

```