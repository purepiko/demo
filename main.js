var MongoClient = require('mongodb').MongoClient
let url = "mongodb://localhost:27017/"

/* CREATE DB
MongoClient.connect(url, (err, db) => { 
    if(err) throw err //show error
    console.log("DB created!")
    db.close()
})
*/
// CREATE COLLECTION --> "dbo.createCollection()"
// INSERT DATA IN TO COLLECTION --> dbo.collection("ชื่อตาราง").insertOne()
MongoClient.connect(url, (err, db) => { 
    if(err) throw err //show error
    let dbo = db.db("mydb") // DB name is 'mydb'
    let myobject = {name: "Company Inc", Address: "123/456", Phone: "023984576"}

    dbo.collection("customers").insertOne(myobject, (err, res)  => { 
        if(err) throw err
        console.log("1 Doc Created!")
        db.close()
    })
})