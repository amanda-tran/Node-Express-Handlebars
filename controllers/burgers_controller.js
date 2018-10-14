let express = require("express");

let router = express.Router();

let burger = require("../models/burger");

router.get("/", (req, res) => {
  console.log("Default Page /");
  burger.all(data => {
    let burgerObj = {
      burger: data
    };
   
    res.render("index", burgerObj);
  });
});
//route path
router.post("/api/burger", (req, res) => {
  console.log("Running Add Burger Checking Name");
  burger.create(
    ["burger_name"],
    [req.body.name], 
    result => {
      // Send back the ID of the new quote
      res.json({ id: result.insertId }); 
    }
  );
});

router.put("/api/burger/:id", (req, res) => {
  let id = `id = ${req.params.id}`;

  console.log("condition", id);

  burger.update(
    {
      id: id
    },
    result => {
      if (result.changedRows == 0) {
        // no ID = 404
        console.log("Error Formed");
        return res.status(404).end();
      } else {
        res.status(200).end();
      }
    }
  );
});


module.exports = router; 
