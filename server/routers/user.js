import express from "express";
import controller from "../controllers/userControllers.js";
const router=express.Router();


//to import just functions from the controller:create, view, delete, ....
router.get('/',controller.view);

//find user by search input
router.post('/',controller.find);

//add new user
router.get('/add',controller.add);

//save new user
router.post('/add',controller.saveNew);

//edit old user
router.get('/edit/:id',controller.edit);

//update old user
router.post('/edit/:id',controller.saveOld);

//delete user
router.post('/delete/:id',controller.deleteUser);

//view user
router.get('/view/:id',controller.viewUser);




export default  router;