var express = require('express');
var router = express.Router();



const Trip = require('../models/trips')



router.get("/", (req, res) => {
  Trip.find(  



  )
  .then(data => {
    res.json({data})
  });
});





router.post("/", (req, res) => {
  Trip.find({departure: req.body.departure, arrival: req.body.arrival})
  .then(data => {
    
   
      
     

      res.json(data)
      
    


  
  });
});

module.exports = router;


