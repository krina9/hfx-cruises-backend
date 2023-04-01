//Author: Karan Aggarwal (B00912580)

const Cruise_Lease = require('../../Models/cruise-lease');

const leasedetails=async(req, res) => {
    console.log("request body is "+JSON.stringify(req.body.cruiseID))
    try {
        const product = await Cruise_Lease.updateOne({cruiseID: req.body.cruiseID}, { 
            fromavailability: req.body.fromavailability,
            toavailability: req.body.toavailability
         })
        res.status(200).json(product) ;
        
    } catch (error) {
        console.log(error.message);
        res.status(500).json({message: error.message})
    }
}

module.exports= leasedetails;