const mongoose= require('mongoose');
const BlogPost= require('./models/BlogPost');
mongoose.connect('mongodb://localhost/my_database',{useNewUrlParser:true})

BlogPost.create({
    title: ' The   Mythbusters guirtyryfghhgfghde.wgfhfgeevbnvbwrwererwhgg...',
    body: ' if you ever been here a long time, you...'
}, (error, blogpost)=>{
    console.log(error,blogpost)
})

