var mongoose = require('mongoose')
var schema = require('./schema')

mongoose.connect("mongodb://localhost:27017/test")

//modelo, Model name, schema, Collection Name
var Reg = mongoose.model('registro', schema, 'registros') 

var reg = new Reg({
    title : 'Ejemplo01',
    author : 'nombre ejemplo',
    body : 'body'
});

reg.save(err=>{
    if (err){
        console.log(err)
        process.exit(1)
    }
    console.log('Saved!!')
    process.exit(0)
})