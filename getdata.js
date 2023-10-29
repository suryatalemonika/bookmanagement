const dbConnect = require('./mongo.js');
const { ObjectId } = require('mongodb');
const getData = async () => {
    let data = await dbConnect.mongoDbConnection();
    data = await data.find({}).toArray()
    return data
}

const GetdatabyId = async (id) => {
    let data = await dbConnect.mongoDbConnection();
    const searchCriteria = { "_id": new ObjectId(id) };
    data = await data.find(searchCriteria).toArray()
    return data
}

module.exports = {
    getData,
    GetdatabyId
}


