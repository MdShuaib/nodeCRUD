var productModel = require("../Models/product");

var products = {
	getAll: function (req, res) {
		productModel.find({}, function(err, docs) {
			if(err){
				res.status(500).json({ status: 'error', message: "Database Error:" + err,  docs: ""});
			}else {
				res.status(200).json({ status: 'success', message: 'success', docs: docs});
			}
		});
	},
	
	getOne: function (req, res) {
		productModel.findById(req.params.id, function(err, doc) {
			if(err){
				res.status(500).json({ status: 'error', message: "Database Error:" + err,  doc: ""});
			}else {
				res.status(200).json({ status: 'success', message: 'success', doc: doc});
			}
		});
	},

	create: function (req, res) {
		var product = new productModel();
		product.firstName = req.body.firstName;
		product.lastName = req.body.lastName;
		product.email = req.body.email;
		product.password = req.body.password;
		product.save(function(err) {
			if(err){
				res.status(500).json({ status: 'error', message: "Database Error:" + err,  docs: ""});
			}else {
				res.status(200).json({ status: 'success', message: 'Document Added Successfully', docs: ""});
			}
		});
	},

	delete: function (req, res) {
		productModel.remove({_id: req.params.id}, function(err) {
			if(err){
				res.status(500).json({ status: 'error', message: "Database Error:" + err,  docs: ""});
			}else {
				res.status(200).json({ status: 'success', message: 'success', docs: ""});
			}
		});
	},
	
	update: function (req, res) {
		productModel.findById(req.params.id, function(err, doc) {
			if(err)
				res.status(500).json({ status: 'error', message: "Database Error:" + err,  docs: ""});
				doc.firstName = req.body.firstName;
				doc.lastName = req.body.lastName;
				doc.email = req.body.email;
				doc.password = req.body.password;
				doc.save(function(err) {
					if(err){
						res.status(500).json({ status: 'error', message: "Database Error:" + err,  docs: ""});
					}else {
						res.status(200).json({ status: 'success', message: 'success', docs: ""});
					}
				})				
			});
		}
}

module.exports = products;