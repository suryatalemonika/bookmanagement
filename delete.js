const dbConnect = require('./mongo');

const deleteData = async (iData) => {
    let db = await dbConnect.mongoDbConnection();
    let result = await db.deleteOne({title:iData.title}); 
    return result;
}

module.exports = {
    deleteData
}