const dbConnect = require('./mongo');
let result;

const updateData = async (iData) => {
    console.log('update data function called to update fields in database');
    let db = await dbConnect.mongoDbConnection();

    if (iData.hasOwnProperty('author') && (iData.hasOwnProperty('price'))) {
        result = await db.updateOne({ name: iData.name }, { $set: { author: iData.author, price: iData.price } });
    } else if (iData.hasOwnProperty('author')) {
        result = await db.updateOne({ name: iData.name }, { $set: { author: iData.author } });
    } else if (iData.hasOwnProperty('price')) {
        result = await db.updateOne({ name: iData.name }, { $set: { price: iData.price } });
    }
    return result;
}


module.exports = {
    updateData
}