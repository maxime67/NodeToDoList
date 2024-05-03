const mongoose = require('mongoose');
const uri = "mongodb+srv://dev:TNwyN3x8NjIMv4J8@cluster0.mzbq6ng.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

async function connectMongoose()
{
    await mongoose.connect(uri);
}
connectMongoose().then(r =>
    console.log("Connected succesfully"));

const Task = mongoose.model('Task', {
    nom: String,
    description: String,
    state: Number
});

module.exports = {
    Task
}
