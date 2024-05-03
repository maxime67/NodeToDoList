var express = require('express');
var router = express.Router();
const {Task} = require("../model/Task.js");


router.get('/', async function (req, res, next) {
    res.render('index', {
        t0: await Task.find({state: 0}),
        t1: await Task.find({state: 1}),
        t2: await Task.find({state: 2})
    });
});
router.get('/edit/', async function (req, res, next) {
    console.log(req.query.id)
    //TODO CATCH EXCEPTION WHEN ID TASK IS DOESN'T FIND
    if(await Task.findOne({ _id: req.query.id }).exec()){
        const task = await Task.findOne({ _id: req.query.id });
        res.render('taskEdit', {
            task :task
        });
    } else {
        res.send('tâche introuvable')
    }

});
router.get('/create', async function (req, res, next) {
    res.render("create", {task: new Task({nom: "", description: ""})})
});
router.post('/create', async function (req, res, next) {
    Task.create({nom: req.body.nom, description: req.body.description, state: 0})
    res.redirect("/")
});
router.post('/edit/', async function (req, res, next) {
    await Task.findOneAndUpdate({_id : req.query.id}, { $set: { nom: req.body.nom, description: req.body.description }});
    res.redirect("/");
});
router.get('/stateToDoing', async function (req, res, next) {
    await Task.findOneAndUpdate({_id : req.query.id}, { $set: { state: 1 }});
    res.redirect("/");
});

router.get('/stateToDo', async function (req, res, next) {
    await Task.findOneAndUpdate({_id : req.query.id}, { $set: { state: 2 }});
    res.redirect("/");
});
router.get('/delete', async function (req, res, next) {
    await Task.findOneAndDelete({_id : req.query.id});
    res.redirect("/");
});


module.exports = router;

