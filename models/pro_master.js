var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var product_master_Schema = new Schema({
    product :{type: String, default:null},
    price :{type: Number, default:null},
    isImported:{type:Boolean}
},
{
    collection: 'product_master',
}
);

module.exports = mongoose.model('product_master', product_master_Schema);