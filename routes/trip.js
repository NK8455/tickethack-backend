var express = require("express");
var router = express.Router();

const Trip = require("../models/trips");
const cartTrip = require("../models/cartTrips");
const Booking = require("../models/bookings")

router.post("/", (req, res) => {
  Trip.find({ departure: req.body.departure, arrival: req.body.arrival }).then(
    (data) => {
      res.json(data);
    }
  );
});


router.get("/cart", (req, res) => {
  cartTrip.find({}).then(
    (data) => {
      console.log(data)
      res.json(data);
    }
  );
});






router.post("/newTrip", (req, res) => {
  const departure = req.body.departure;
  const arrival = req.body.arrival;
  const date = req.body.date;
  const price = req.body.price;
  const time = req.body.time;

  const newcartTrip = new cartTrip({
    departure: departure,
    arrival: arrival,
    date: date,
    price: price,
    time: time
  });

  newcartTrip
    .save()
    .then(() => {
      console.log("Trip saved!");

      res.json({ message: "Trip saved successfully", trip: newcartTrip });
    })
    .catch((error) => {
      console.error("Error saving trip:", error);

      res.status(500).json({ error: "Failed to save trip" });
    });
});







router.delete("/deletecart", (req, res) => {
  cartTrip.deleteOne({
    _id: req.body.id
  }).then(deletedDoc => {
    
    console.log(deletedDoc)


  });
});






// router.get("/booking", (req, res) => {
//   Booking.find({}).then(
//     (data) => {
//       console.log(data)
//       res.json(data);
//     }
//   );
// });



router.post("/booking", (req, res) => {
      const departure = req.body.departure;
      const price = req.body.price;
      const arrival = req.body.arrival;
      const time = req.body.time;
      const departureTime = req.body.departureTime;
    
      const newBooking = new Booking({
        departure: departure,
        price: price,
        arrival: arrival,
        time: time,
        departureTime: departureTime
      });
    
      newBooking
        .save()
        .then(() => {
          console.log("Trip booked!");
    
          res.json({ message: "Trip booked successfully", trip: newBooking });
        })
       


  
    }
  );



  router.get("/booking", (req, res) => {
    Booking.find({}).then(
      (data) => {
        console.log(data)
        res.json(data);
      }
    );
  });


  




// router.delete("/deletecart", (req, res) => {

//   const departure = req.body.departure;
//   const arrival = req.body.arrival;
//   const date = req.body.date;
//   const price = req.body.price;
//   const time = req.body.time;




//   cartTrip.find({}).then(
//     (data) => {
//       console.log(data)
//       res.json(data);
//     }
//   );
// });










// router.post("/newtrip", (req, res) => {
//   Trip.find({departure: req.body.departure, arrival: req.body.arrival})
//   .then(data => {

//       res.json(data)

//   });
// });

module.exports = router;
