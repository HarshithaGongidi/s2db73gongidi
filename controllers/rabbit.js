var rabbit = require('../models/rabbit');

// List of all Rabbits
exports.rabbit_list = function(req, res) {
res.send('NOT IMPLEMENTED: rabbit list');
};
// for a specific Costume.
exports.rabbit_detail = function(req, res) {
res.send('NOT IMPLEMENTED: rabbit detail: ' + req.params.id);
};
// Handle rabbit create on POST.
exports.rabbit_create_post = function(req, res) {
res.send('NOT IMPLEMENTED: rabbit create POST');
};
// Handle rabbit delete form on DELETE.
exports.rabbit_delete = function(req, res) {
res.send('NOT IMPLEMENTED: rabbit delete DELETE ' + req.params.id);
};
// Handle rabbit update form on PUT.
exports.rabbit_update_put = function(req, res) {
res.send('NOT IMPLEMENTED: rabbit update PUT' + req.params.id);
};