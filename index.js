var { MongoClient } = require("mongodb"); 
var mongoClient = require('mongodb').MongoClient;  //creating mongodb object
var url = "mongodb://localhost:27017/"  //defining url

// task 1

// //create connection
// mongoClient.connect(url, (err, db) =>{
//     if (err) throw err;
//     console.log("MongoDB Successfully Connected");
//     db.close();
// }) 

// task 2

// //creating database and connections
// mongoClient.connect(url, (err, db) =>{
//     if(err) throw err;
//     let dbo = db.db("quiz");
//     dbo.createCollection("questions", (err, res) =>{
//         if(err) throw err;
//         console.log("questions collection created")
//     });
//     dbo.createCollection("options", (err, res) =>{
//         if(err) throw err;
//         console.log("options collection created")
//     });
//     dbo.createCollection("answers", (err, res) =>{
//         if(err) throw err;
//         console.log("answers collection created")
//     });
// })

// task 3

//inserting documents in collections
// const questions = [{ questions: "Which of the following is not an operating system?"},
// {questions: "When was the first operating system developed?"},
// {questions: "Which of the following is the extension of Notepad?"},
// {questions: "What else is a command interpreter called?"},
// {questions: "What is the mean of the Booting in the operating system?"}]


// const options = [{ options: ["Windows", "Linux", "Oracle", "DOS"]},
// { options: ["1948", "1949", "1950", "1951"]},
// { options: [".txt", ".xls", ".ppt", ".bmp"]},
// { options: ["prompt", "kernel", "shell", "command"]},
// { options: ["Restarting computer", "Install the program", "To scan", "To turn off"]}]

// const answers = [{ answers: "Oracle"}, { answers: "1950"}, { answers: ".txt"}, { answers: "shell"},{ answers: "Restarting computer"}]

// mongoClient.connect(url,(err, db) =>{
//     if (err) throw err;
//     var dbo = db.db("quiz")  

//     //inserting question data into questions collection
//     dbo.collection("questions").insertMany(questions, (err, res) =>{
//         if(err) throw err;
//         console.log("data inserted into questions collection")
//     })

//    //inserting options data into options collection
//     dbo.collection("options").insertMany(options, (err, res) =>{
//         if(err) throw err;
//         console.log("data inserted into options collection")
//     })

//     //inserting answers data into answers collection
//     dbo.collection("answers").insertMany(answers, (err, res) =>{
//         if(err) throw err;
//         console.log("data inserted into answers collection")
//     })

//     db.close();
// })

// task 4

    // displaying the above data
    MongoClient.connect(url, (err, db)=>{
        if(err) throw err;
        var dbo = db.db("quiz")

    // displaying all the qestions data
    dbo.collection("questions").find({}).toArray(function(err, res) {
        if (err) throw err;
        console.log("data displayed successfully");
        console.log(res);
        db.close();
    })

    //for displaying one question only
    dbo.collection("questions").findOne({questions: "Which of the following is not an operating system?"}, (err, res)=>{
        if (err) throw err;
        console.log(res);
        db.close();
    })
})

// task 5

// upadting document
    // mongoClient.connect(url,(err,db)=>{
    //     if(err) throw err;
    //     var dbo = db.db("quiz")
    //     dbo.collection("questions").updateOne({ questions: "Which of the following is not an operating system?" },
    //         { $set: { questions: "Which is not an operating system?"}},(err,res)=>{
    //         if(err) throw err;
    //         console.log("Updated one document");
    //         db.close()
    //     })
    // })

    // task 6

    //deleting document
        mongoClient.connect(url,(err,db)=>{
        if(err) throw err;
        var dbo = db.db("quiz")
        dbo.collection("questions").deleteOne({ questions: "Which is not an operating system?" },(err,res)=>{
            if(err) throw err;
            console.log("Deleted one document");
            db.close()
        })
    })

