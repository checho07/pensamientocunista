const sqlite3 = require('sqlite3').verbose();
let db = new sqlite3.Database('./sqlite.db');
let userModel = {};

userModel.getEstudiante = (param,callback) => {

  
   
   // let stmt = db.prepare("SELECT * FROM 'presencial' where c1 = ?  order by c2 asc");
   // stmt.bind(param);
   db.all("SELECT c1,c2 FROM 'presencial' where c1 = ?  order by c2 asc",param
   ,function(error,rows){
      if(error) 
        {
            throw error;
        }
        else 
        {
        	//retornamos la fila con los datos del usuario
            if(rows) 
            {
               let result = []
               console.log(rows)
               rows.forEach((row)=>{
                  result.push(row)
               })
                callback("", result);
               
               //  stmt.finalize()
            }
            else
            {
            	console.log("El usuario no existe");
            }
        }
   })
 
// close the database connection
 
      
}

userModel.getEstudianteVirtual = (param,callback) => {

   let db = new sqlite3.Database('./sqlite.db');
   
   let stmt = db.prepare("SELECT c1,c2 FROM 'virtual' where c1 = ?  order by c2 asc");
   stmt.bind(param);
   stmt.all(function(error,rows){
      if(error) 
        {
            throw err;
        }
        else 
        {
        	//retornamos la fila con los datos del usuario
            if(rows) 
            {
               let result = []
               console.log(rows)
               rows.forEach((row)=>{
                  result.push(row)
               })
                callback("", result);
                stmt.finalize()
            }
            else
            {
            	console.log("El usuario no existe");
            }
        }
   });

  
 
// close the database connection

db.close();  
}

userModel.createLog = (userData,callback)=>{
      
   var stmt = db.prepare("INSERT INTO 'matriculados' VALUES (?,?)");
   stmt.bind(userData.id,userData.fecha);
   stmt.all(function(error,rows){
      if(error) 
        {
            throw err;
        }
        else 
        {
        	//retornamos la fila con los datos del usuario
            if(rows) 
            {
              
                callback("", rows);
                stmt.finalize()
            }
            else
            {
            	console.log("El usuario no existe");
            }
        }
   });
 
       
   
  
}
module.exports = userModel;