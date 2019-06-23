const productmaster = require("../models/pro_master")
var async = require('async');
module.exports = (router) => {
    router.post("/calculateTax", function (req, res) {
        productmaster.find({}, function (err, data) {
            var vFood_quantity = 0
            var vBook_quantity = 0
            var vMusic_quantity = 0
            if (req.query.Food != undefined) {
                vFood_quantity = req.query.Food
            }
            if (req.query.Music != undefined) {
                vMusic_quantity = req.query.Music
            }
            if (req.query.Books != undefined) {
                vBook_quantity = req.query.Books
            }
            async.forEach(data, function (value) {
                if (value.product == "Food") {
                    vFood_Price = value.price * parseInt(vFood_quantity)
                }
                if (value.product == "Music") {
                    vMusci_Price = value.price * parseInt(vMusic_quantity)
                }
                if (value.product == "Books") {
                    vBooks_Price = value.price * parseInt(vBook_quantity)
                }
            })
            varvTotal_price = vFood_Price + vMusci_Price + vBooks_Price
            var vTotal_quantity_sale_Tax = (varvTotal_price) / 10
            var vTotal_Import_Duty = ((vFood_Price + vMusci_Price) / 10) / 2
            var vToptalBill = varvTotal_price + vTotal_quantity_sale_Tax + vTotal_Import_Duty
            var returnValue = {
                "totalsalestax": vTotal_quantity_sale_Tax,
                "totalimportduty": vTotal_Import_Duty,
                "totalbill": vToptalBill
            }
            res.send(returnValue)

        })
    })
    return router
}