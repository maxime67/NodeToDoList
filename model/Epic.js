const mongoose = require('mongoose');
const uri = "mongodb+srv://ToDo:eSy7wNvjd1rimL4YMs38@mongodb-97caa512-of2ec3bac.database.cloud.ovh.net/ToDo?replicaSet=replicaset&tls=true";

async function connectMongoose()
{
    await mongoose.connect(uri);
}
connectMongoose().then(r =>
    console.log("Connected succesfully"));

const Epic = mongoose.model('Epic', {
    nom: String,
    description: String,
    tasks: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Task'
        }]
});

module.exports = {
    Epic: Epic
}
