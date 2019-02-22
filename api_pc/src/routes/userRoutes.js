const User = require('../models/user')

module.exports = function (app){
    
    ////// GET   

    
    app.get('/estudiante/presencial/:ccid',(req,res)=>{
        
        var param = req.params.ccid;
       User.getEstudiante(param, (err,data)=>{
           if (data) {
            res.status(200).json(data);
            console.log(data)
           }else{
            res.json(err);
            console.log(err)
           }
           
       })
    })

    app.get('/estudiante/virtual/:ccid',(req,res)=>{
        
        var param = req.params.ccid;
       User.getEstudianteVirtual(param, (err,data)=>{
           if (data) {
            res.status(200).json(data);
            console.log(data)
           }else{
            res.json(err);
            console.log(err)
           }
           
       })
    })


    /////// POST

    app.post('/registro',(req,res)=>{
       
        const userData = {
              id:req.body.id,
              fecha:req.body.fecha
        }
        User.createLog(userData,(err,data)=>{
            if (data && data.InsertId) {
                res.json({
                    success:true,
                    data:data,
                    msg:'Usuario Insertado'
                })
            } else {
                res.status(500).json({
                    success:false,
                    msg:'Error'
                })
            }
        })
    })

};