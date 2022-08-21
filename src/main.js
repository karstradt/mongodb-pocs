const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const model = mongoose.model;

// localhost does not work with Node 17 onwards
//const dbUrl = 'mongodb://localhost:27017/temp';
const dbUrl = 'mongodb://127.0.0.1:27017/temp';

//export default () => {
console.log("Going to run db unit");

const main = async () => {
    const connection = await mongoose.connect(dbUrl);

    console.log("Mongo db connected");
    await connection.disconnect();
    console.log()
}

main();

/*mongoose.connect(dbUrl, {
    useNewUrlParser: true
}, function (err, data) {
    const mySchema = new Schema({
        "SYMBOL": '',
        "NAME OF COMPANY": '',
        "SERIES": '',
        "DATE OF LISTING": '',
        "PAID UP VALUE": '',
        "MARKET LOT": '',
        "ISIN NUMBER": '',
        "FACE VALUE": ''
    });

    var Company = new model('Company', mySchema, "Companies");

    var Gourab  = new Company({
        "SYMBOL": "20MICRONS",
        "NAME OF COMPANY": "20 Microns Limited",
        "SERIES": "EQ",
        "DATE OF LISTING": "06-OCT-2008",
        "PAID UP VALUE": "5",
        "MARKET LOT": "1",
        "ISIN NUMBER": "INE144J01027",
        "FACE VALUE": "5"
    });

    Gourab.save().then(function (data) {
        console.log(data);
        mongoose.disconnect();
    },function (err) {
        console.log(err);
        mongoose.disconnect();
    });
});*/

/*
var John = new AddressModel({
    name: 'John',
    address: 'US'
});
*/

/*
John.save().then(function (data) {
    console.log(data);
    mongoose.disconnect();
},function (err) {
    console.log(err);
    mongoose.disconnect();
});
*/
//}