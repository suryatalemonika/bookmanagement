const dbConnect = require('./mongo');

const deleteData = async (data) => {
    let db = await dbConnect.mongoDbConnection();
    let result = await db.deleteOne({name:data.name}); 
    return result;
}

module.exports = {
    deleteData
}