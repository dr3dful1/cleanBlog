const mongoose= require('mongoose');
const BlogPost= require('./models/BlogPost');
mongoose.connect('mongodb://localhost/my_database',{useNewUrlParser:true})

// BlogPost.create({
//     title: ' The   Mythbusters guirtyryfghhgfghde.wgfhfgeevbnvbwrwererwhgg...',
//     body: ' if you ever been here a long time, you...'
// }, (error, blogpost)=>{
//     console.log(error,blogpost)
// })

// BlogPost.create({
//     title: '  bghde.wgfhfgeevbnvbwrwererwhgg...',
//     body: '  en here a long time, you...'
// }, (error, blogpost)=>{
//     console.log(error,blogpost)
// })

// BlogPost.create({
//     title: ' The The  bghde.wgfhfgeevbnvbwrwererwhgg...',
//     body: '  en here a long time, you...'
// }, (error, blogpost)=>{
//     console.log(error,blogpost)
// })

// BlogPost.find({
//     title:/the/
// }, (error, blogpost)=>{
//     console.log(error,blogpost)
// })

 var id="5ea9bb5fa8dab43b0013cd3c";
//  BlogPost.findById(id,(error,blogspot)=>{
//      console.log(error,blogspot)
//  })
BlogPost.findByIdAndDelete(id,(error,blogspot)=>{
    console.log(error,blogspot)
})