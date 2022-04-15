var rabbit = require('../models/rabbit');

// List of all Rabbits
exports.rabbit_list = async function(req, res) {
    try{
        therabbit = await rabbit.find();
        res.send(therabbit);
    }
    catch(err){
        res.status(500);
        res.send(`{"error": ${err}}`);
    }
};

// VIEWS
// Handle a show all view
exports.rabbit_view_all_Page = async function(req, res) {
    try{
        therabbit = await rabbit.find();
        res.render('rabbit', { title: 'Rabbit Search Results', results: therabbit });
    }
    catch(err){
        res.status(500);
        res.send(`{"error": ${err}}`);
    }
};

// for a specific Rabbit.
exports.rabbit_detail = async function(req, res) {
    console.log("detail" + req.params.id)
    try {
        result = await rabbit.findById( req.params.id)
        res.send(result)
    } catch (error) {
        res.status(500)
        res.send(`{"error": document for id ${req.params.id} not found`);
    }
};

// Handle rabbit create on POST.
exports.rabbit_create_post = async function(req, res) {
    console.log(req.body)
    let document = new rabbit();
    // We are looking for a body, since POST does not have query parameters.
    // Even though bodies can be in many different formats, we will be picky
    // and require that it be a json object
    // {"rabbit_type":"goat", "cost":12, "size":"large"}
    document.age = req.body.age;
    document.color = req.body.color;
    document.weight = req.body.weight;
    try{
        let result = await document.save();
        res.send(result);
    }
    catch(err){
        res.status(500);
        res.send(`{"error": ${err}}`);
    }
    };

// Handle rabbit delete form on DELETE.
exports.rabbit_delete = function(req, res) {
res.send('NOT IMPLEMENTED: rabbit delete DELETE ' + req.params.id);
};
// Handle rabbit update form on PUT.
exports.rabbit_update_put = function(req, res) {
res.send('NOT IMPLEMENTED: rabbit update PUT' + req.params.id);
};