const express = require('express');
const appForClass= express.Router();
const mysql = require('mysql');
var connection =mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'manager',
    database:'react'
});
appForClass.get("/",(request,response)=>{
    connection.query("select * from movies",(error,result)=>{
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
        var query=`insert into movies values(${request.body.movieid},'${request.body.moviename}','${request.body.director}',${request.body.rating})`
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
 appForClass.delete("/:movieid",(request,response)=>{
    var query = `delete from movies where movieid = ${request.params.movieid}`;
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
 appForClass.put("/:movieid",(request,response)=>{
    var query=`update movies set moviename='${request.body.moviename}',director='${request.body.director}',rating='${request.body.rating}' where No=${request.params.movieid} `;
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
