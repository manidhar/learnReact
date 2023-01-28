var dbConnection=require("../config/dbConnection");

var connection=dbConnection.getConnection();
connection.connect();

var express=require("express");
var router=express.Router();


router.get("/",(req,res)=>{
    connection.query("select * from product",(err,records,fields)=>{
        if(err){
            console.error("Error while fetching data");
        }
       // console.log(records);
        res.send(records);
    })
})


router.get("/:id",(req,res)=>{
    connection.query("select * from product where id="+req.params.id,(err,records,fields)=>{
        if(err){
            console.error("Error while fetching data");
        }
        //console.log(records);
        res.send(records);
    })
})

router.post("/",(req,res)=>{
    var id=req.body.id;
    //console.log("id :"+id);
    console.log("name : "+req.body)
    var name=req.body.name;
    var desc=req.body.description;
    var price=req.body.price;
    connection.query("insert into product values("+id+",'"+name+"','"+desc+"',"+price+")",(err,result)=>{
        if(err){
            console.error("Error while fetching data");
        }
       
        res.send({insert:"Prouct inserted successful"});
    })
})

router.put("/",(req,res)=>{
    var id=req.body.id;
    var name=req.body.name;
    var price=req.body.price;
    console.log("update product set name ='"+name+"',price="+price+" where id ="+id);
    connection.query("update product set name ='"+name+"',price="+price+" where id ="+id,(err,result)=>{
        if(err){
            console.error("Error while updating record"+err);
            res.send({update:"Error while updating record"});
        }
       
        res.send({update:"Prouct updated successful"});
    })
})

router.delete("/:id",(req,res)=>{
    connection.query("delete from product where id="+req.params.id,(err,records,fields)=>{
        if(err){
            console.error("Error while deleting record");
            res.send({delete:err});
        }
        //console.log(records);
        res.send({delete:"Deleted record successfully"});
    })
})


module.exports=router;