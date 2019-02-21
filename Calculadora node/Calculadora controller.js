class operacion{
	constructor(_numero1,_numero2){
		//Esta función almacena los valores
		this.numero1 = _numero1;
		this.numero2 = _numero2;
	}
	sumar(){
		//Esta función se encarga de sumar//
		return this.numero1+this.numero2;
	}
	restar(){
		//Esta función se encarga de restar//
		return this.numero1-this.numero2;
	}
	multiplicar(){
		//Esta función se encarga de multiplicar//
		return this.numero1*this.numero2;
	}
	dividir(){
		//Esta función se encarga de dividir//
		return this.numero1/this.numero2;
	}
}
//Todas estas de abajo se meten en la función y segun la operación, tiran el resultado.//
exports.sumar=function(req,res){
	console.log(req)
	let claseinstanciada= new operacion(req.body.numero1,req.body.numero2);
	res.json(claseinstanciada.sumar());
}
exports.restar=function(req,res){
	let claseinstanciada= new operacion(req.body.numero1,req.body.numero2);
	res.json(claseinstanciada.restar());
}
exports.multiplicar=function(req,res){
	let claseinstanciada= new operacion(req.body.numero1,req.body.numero2);
	res.json(claseinstanciada.multiplicar());
}
exports.dividir=function(req,res){
	let claseinstanciada= new operacion(req.body.numero1,req.body.numero2);
	res.json(claseinstanciada.dividir());
}