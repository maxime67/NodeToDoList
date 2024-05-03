const mongoose = require('mongoose');
const uri = "mongodb+srv://dev:7T5p0YwEZtvXug2GfL3P@mongodb-97caa512-of2ec3bac.database.cloud.ovh.net/admin?replicaSet=replicaset&tls=true";

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
