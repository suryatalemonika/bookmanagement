const dbConnect = require('./mongo.js');

const getData = async ()=>{
    let data = await dbConnect.mongoDbConnection();
    data = await data.find({}).toArray()
    return data 
}

module.exports = {
    getData
}
