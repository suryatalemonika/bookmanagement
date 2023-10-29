const dbConnect = require('./mongo');
let result;

const updateData = async (iData) => {
    console.log('update data function called to update fields in database');
    let db = await dbConnect.mongoDbConnection();

    if (iData.hasOwnProperty('author') && (iData.hasOwnProperty('summary'))) {
        result = await db.updateOne({ title: iData.title }, { $set: { author: iData.author, summary: iData.summary } });
    } else if (iData.hasOwnProperty('author')) {
        result = await db.updateOne({ title: iData.title }, { $set: { author: iData.author } });
    } else if (iData.hasOwnProperty('summary')) {
        result = await db.updateOne({ title: iData.title }, { $set: { summary: iData.summary } });
    }
    return result;
}


module.exports = {
    updateData
}