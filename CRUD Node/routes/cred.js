const express = require('express');
const appForClass= express.Router();
const mysql = require('mysql');
var connection =mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'manager',
    database:'punedac'
});
appForClass.get("/",(request,response)=>{
    connection.query("select * from emps",(error,result)=>{
        if(error==null)
        {
            var data = JSON.stringify(result)
            response.setHeader("Content-Type","application/json");
            response.write(data);
        }
        else{
            console.log(error);
            response.setHeader("Content-Type","application/json");
            response.write(error);
        }
        response.end();
    })
})
    appForClass.post("/",(request,response)=>{
        var query=`insert into emps values(${request.body.No},'${request.body.Name}','${request.body.Address}')`
        connection.query(query,(error,result)=>{
            if(error==null)
            {
                var data =JSON.stringify(result)
                response.setHeader("Content-type","application/json");
                response.write(data);
            }
            else{
                console.log(error);
                response.setHeader("Content-Type","application/json");
                response.write(error);
            }
            response.end();
     })

 })
 appForClass.delete("/:No",(request,response)=>{
    var query = `delete from emps where No = ${request.params.No}`;
    connection.query(query,(error,result)=>{
        if(error==null)
        {
            var data= JSON.stringify(result)
            response.setHeader("Content-Type","application/json");
            response.send(data);
        }
        else
        {
            console.log(error);
            response.setHeader("Content-Type","application/json");
            response.send();
        }
    })

 })
 appForClass.put("/:No",(request,response)=>{
    var query=`update emps set Name='${request.body.Name}',Address='${request.body.Address}' where No=${request.params.No} `;
    connection.query(query,(error,result)=>
    {
        if(error==null)
        {
            var data = JSON.stringify(result);
            response.setHeader("Content-Type","application/json");
            response.send(data);
        }
        else{
            console.log(error);
            response.setHeader("Content-Type","application/json")
            response.send();
        }
    })
 })

module.exports=appForClass;
