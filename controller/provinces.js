const express = require("express");
const router = express.Router();
const province = require("../service/provinces.js");

router.get("/top/confirmed", async(req, res) => {
    try {
        const topConfirmedData = await province.getTopConfirmed(req);
        res.json({
            status: 200,
            data: topConfirmedData
        });
    }catch (err) {
        console.log("Error - [GET top/confirmed]: ", err);
        res.json({
            status: 400,
            results: {
                error: error,
            },
        });
    }
})

module.exports = router;