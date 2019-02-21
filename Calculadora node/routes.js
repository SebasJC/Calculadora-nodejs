var controllercalculadora = require('./Calculadora controller.js');
// Cuando un usuario entre con esa alguna URL, se irá a la función indicada//
module.exports = function(app){
	app.post('/Asumar', controllercalculadora.sumar);
	app.post('/Arestar', controllercalculadora.restar);
	app.post('/Amultiplicar', controllercalculadora.multiplicar);
	app.post('/Adividir', controllercalculadora.dividir);
};