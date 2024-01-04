const express = require("express");
const router = express.Router();

const subCategoryController = require("../controllers/SubCategoryController");
router.get("/getallsubcategories", subCategoryController.getAllSubCategories);
router.post("/postsubcategory", subCategoryController.postSubCategory);
router.put("/getsubcategoriesbycategoryid", subCategoryController.getSubCategoriesByCategoryId);

module.exports = router;
