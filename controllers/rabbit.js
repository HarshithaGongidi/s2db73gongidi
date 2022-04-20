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


// Handle rabbit delete on DELETE.
exports.rabbit_delete = async function(req, res) {
    console.log("delete " + req.params.id)
    try {
        result = await rabbit.findByIdAndDelete( req.params.id)
        console.log("Removed " + result)
        res.send(result)
    } catch (err) {
        res.status(500)
        res.send(`{"error": Error deleting ${err}}`);
    }
    };

// Handle rabbit update form on PUT.
exports.rabbit_update_put = async function(req, res) {
console.log(`update on id ${req.params.id} with body
${JSON.stringify(req.body)}`)
try {
    let toUpdate = await rabbit.findById( req.params.id)
    // Do updates of properties
    if(req.body.age)
    toUpdate.age = req.body.age;
    if(req.body.color) toUpdate.color = req.body.color;
    if(req.body.weight) toUpdate.weight = req.body.weight;
    let result = await toUpdate.save();
    console.log("Sucess " + result)
    res.send(result)
} catch (err) {
    res.status(500)
    res.send(`{"error": ${err}: Update for id ${req.params.id}
    failed`);
}
};

// Handle a show one view with id specified by query
exports.rabbit_view_one_Page = async function(req, res) {
    console.log("single view for id " + req.query.id)
    try{
        result = await rabbit.findById( req.query.id)
        res.render('rabbitdetail',
        { title: 'rabbit Detail', toShow: result });
    }
    catch(err){
        res.status(500)
        res.send(`{'error': '${err}'}`);
    }
    };