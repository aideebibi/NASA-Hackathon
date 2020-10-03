//Este método realiza una consulta a la base de datos en Dynamo
//Debe preconfigurarse una política para que tenga permiso de 
//Escribir y Escanear

console.log('starling function')

const AWS = require('aws-sdk');
const documentClient = new AWS.DynamoDB.DocumentClient({region: "us-east-1"})


exports.handler = function(event,context,callback){
    
    //Obtiene el request de los 100 valores más recientes en la base
    let scanningParameters = {
        TableName: 'NewAnimalSightings',
        Limit: 100
    };
    
    //Regresa el request exitoso o un error en la consulta
    documentClient.scan(scanningParameters,function(err,data){
        if(err){
            callback(err,null)
        } else{
            callback(null,data)
        }
        
    });
}