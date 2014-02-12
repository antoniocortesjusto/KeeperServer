var Temperature, mongoose ;

mongoose = require("mongoose");
 

var Schema = mongoose.Schema;

var tempSchema = new Schema({
  date:  { type: Date, default: Date.now },
  temp: Number
});

var phSchema = new Schema({
	date:{ type: Date, default: Date.now },
	ph: Number
});

var nitritesSchema = new Schema({
	date:{ type: Date, default: Date.now },
	nitrites: Number
});

var nitratesSchema = new Schema({
	date:{ type: Date, default: Date.now },
	nitrates: Number
});
 
var ammoniaSchema = new Schema({
	date:{ type: Date, default: Date.now },
	ammonia: Number
});


exports.saveTemperature = function(temp, callback){

	mongoose.connect(process.env.MONGOHQ_URL);
 
	Temperature = mongoose.model('Temperature', tempSchema);
	 
	currentTemperature = new Temperature({temp: temp});
	 
	currentTemperature.save(function(err){
		if (err) {
			console.log("Error the temperature couldnt be saved:");
		} else {
			console.log("Temperature: " + temp + " saved!!!");
			Temperature.find({}, function(err, documents) {
				console.log(documents[0]);
				callback(null, documents[0]);
			});
		}
	});
};

exports.getTemperatures = function(callback){
	mongoose.connect(process.env.MONGOHQ_URL);
	Temperature = mongoose.model('Temperature', tempSchema);
	Temperature.find({}, function(err, documents) {
		console.log(documents);
		callback(null, documents);
	});
};

exports.savePh = function(ph, callback){

	mongoose.connect(process.env.MONGOHQ_URL);
 
	Ph = mongoose.model('Ph', phSchema);
	 
	currentPh = new Ph({ph: ph});
	 
	currentTemperature.save(function(err){
		if (err) {
			console.log("Error the PH couldnt be saved:");
		} else {
			console.log("PH: " + ph + " saved!!!");
			Ph.find({}, function(err, documents) {
				console.log(documents[0]);
				callback(null, documents[0]);
			});
		}
	});
};

exports.getPhs = function(callback){
	mongoose.connect(process.env.MONGOHQ_URL);
	Ph = mongoose.model('Ph', phSchema);
	Ph.find({}, function(err, documents) {
		console.log(documents);
		callback(null, documents);
	});
};


exports.saveNitrites = function(nitrites, callback){

	mongoose.connect(process.env.MONGOHQ_URL);
 
	Nitrites = mongoose.model('Nitrites', nitritesSchema);
	 
	currentNitrites = new Nitrites({nitrites: nitrites});
	 
	currentNitrites.save(function(err){
		if (err) {
			console.log("Error the Nitrtites couldnt be saved:");
		} else {
			console.log("Nitrites: " + nitrites + " saved!!!");
			Nitrites.find({}, function(err, documents) {
				console.log(documents[0]);
				callback(null, documents[0]);
			});
		}
	});
};

exports.getNitrites = function(callback){
	mongoose.connect(process.env.MONGOHQ_URL);
	Nitrites = mongoose.model('Nitrites', nitritesSchema);
	Nitrites.find({}, function(err, documents) {
		console.log(documents);
		callback(null, documents);
	});
};


exports.saveNitrates = function(nitrates, callback){

	mongoose.connect(process.env.MONGOHQ_URL);
 
	Nitrates = mongoose.model('Nitrates', nitratesSchema);
	 
	currentNitrates = new Nitrates({nitrates: nitrates});
	 
	currentNitrates.save(function(err){
		if (err) {
			console.log("Error the Nitrtates couldnt be saved:");
		} else {
			console.log("Nitrates: " + nitrates + " saved!!!");
			Nitrates.find({}, function(err, documents) {
				console.log(documents[0]);
				callback(null, documents[0]);
			});
		}
	});
};

exports.getNitrites = function(callback){
	mongoose.connect(process.env.MONGOHQ_URL);
	Nitrates = mongoose.model('Nitrates', nitratesSchema);
	Nitrates.find({}, function(err, documents) {
		console.log(documents);
		callback(null, documents);
	});
};


exports.saveAmmonia = function(ammonia, callback){

	mongoose.connect(process.env.MONGOHQ_URL);
 
	Ammonia = mongoose.model('Ammonia', ammoniaSchema);
	 
	currentAmmonia = new Ammonia({ammonia: ammonia});
	 
	currentAmmonia.save(function(err){
		if (err) {
			console.log("Error the Ammonia couldnt be saved:");
		} else {
			console.log("Ammonia: " + ammonia + " saved!!!");
			Ammonia.find({}, function(err, documents) {
				console.log(documents[0]);
				callback(null, documents[0]);
			});
		}
	});
};

exports.getAmmonia= function(callback){
	mongoose.connect(process.env.MONGOHQ_URL);
	Ammonia = mongoose.model('Ammonia', ammoniaSchema);
	Ammonia.find({}, function(err, documents) {
		console.log(documents);
		callback(null, documents);
	});
};