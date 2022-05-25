var express = require("express");
var bodyParser = require("body-parser");
const mongoose = require('mongoose');
const { home } = require("nodemon/lib/utils");
port = 5501

console.log(mongoose.connect('mongodb://localhost:27017/HMS'));
var db = mongoose.connection;
// console.log('2', db)
db.on('error', console.log.bind(console, "connection error"));
db.once('open', function (callback) {
	console.log("connection succeeded..");
	// console.log('4', callback)
})

var app = express()

// app.set('title','nimish suri')
// console.log(app.get('title'))

app.use(bodyParser.json());
app.use(express.static('public'));
app.use(bodyParser.urlencoded({
	extended: true
}));
// app.use(bodyParser.)
app.post('/feedback', function (req, res) {
	let name = req.body.Name;
	let email = req.body.email;
	let feedback = req.body.feedback;
	let rate = req.body.rate;
	var data = {
		"name": name,
		"email": email,
		"feedback": feedback,
		"rating": rate
	}
	db.collection('feedback').insertOne(data, function (err, collection) {
		if (err) throw err;
		console.log("Record inserted Successfully in the feedback Collection");

	});
	// console.log(app.get())
	// res.sendStatus(500)
	// console.log(req.statusCode)
	return res.redirect('feedback.html');
})

app.post('/bookAppointment', function (req, res) {
	var firstname = req.body.firstname;
	var lastname = req.body.lastname;
	var dept = req.body.dept;
	var gender = req.body.gender;
	var phoneNo = req.body.phoneNo;
	var date = req.body.date;
	var address = req.body.address;
	var email = req.body.email;

	var data = {
		"firstname": firstname,
		"lastname": lastname,
		"dept": dept,
		"gender": gender,
		"phoneNo": phoneNo,
		"date": date,
		"address": address,
		"email": email
	}
	db.collection('appointment').insertOne(data, function (err, collection) {
		if (err) throw err;
		console.log("Record inserted Successfully in the Appointment Collections");

	});
	// prompt('form submitted')
	return res.redirect('bookAppointment.html');
})

app.post('/contactUs', function (req, res) {
	let name = req.body.name;
	let email = req.body.email;
	let message = req.body.message;

	var data = {
		"name": name,
		"email": email,
		"message": message
	}
	db.collection('contactUs').insertOne(data, function (err, collection) {
		if (err) throw err;
		console.log("Record inserted Successfully in the contactUs Collection");

	});

	return res.redirect('contactUs.html');
})

app.post('/details', function (req, res) {
	let name = req.body.Name;
	let phoneNo = req.body.phoneNo;
	let email = req.body.email;
	let Address = req.body.Address;
	let paymentMethod = req.body.paymentMethod;
	var data = {
		"name": name,
		"phoneNo": phoneNo,
		"email": email,
		"Address": Address,
		"paymentMethod": paymentMethod
	}
	db.collection('orderDetails').insertOne(data, function (err, collection) {
		if (err) throw err;
		console.log("Record inserted Successfully in the orderDetails Collection");

	});
	return res.redirect('submit.html');
})


Listner1 = app.get('/feedback', function (req, res) {
	res.set({
		'Access-control-Allow-Origin': '*'
	});
	return res.redirect('feedback.html');
});

Listner2 = app.get('/bookAppointment', function (req, res) {
	res.set({
		'Access-control-Allow-Origin': '*'

	});
	return res.redirect('bookAppointment.html');
});

Listner3 = app.get('/contactUs', function (req, res) {
	res.set({
		'Access-control-Allow-Origin': '*'
	});
	// console.log(res.get('Access-control-Allow-origin'))
	return res.redirect('contactUs.html');
});

Listner4 = app.get('/details', function (req, res) {
	res.set({
		'Access-control-Allow-Origin': '*'
	});
	return res.redirect('cart.html');
});

// console.log('---------',Listner1)
// Listner1.enabled()?console.log('****',Listner1.enabled()):console.log('*--*',Listner2.enabled())
Listner1.enabled() ? Listner1.listen(port) : (Listner2.enabled() ? Listner2.listen(port) : (Listner3.enabled() ? Listner3.listen(port) : Listner4.listen(port)))

console.log("server listening at port 5501");
//modal in bootstrap