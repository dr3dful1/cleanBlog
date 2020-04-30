const express = require('express');

const app =  new express();
const path= require('path');
app.use(express.static('public'));
const ejs= require('ejs');
const mongoose = require('mongoose');


mongoose.connect('mongodb://localhost/my_database',{useUnifiedTopology: true, useNewUrlParser:true}).then(() => console.log('DB Connected!'))
.catch(err => {
console.log(`DB Connection Error: ${err.message}`);
});


const bodyParser = require('body-parser');
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:true}))
app.set('view engine','ejs');
const BlogPost = require('./models/BlogPost.js');


app.listen(4000,()=>{
    console.log('app listening on port 4000');

    app.get('/',async (req,res)=>{
        const blogposts = await BlogPost.find({})
        res.render('index',{
            blogposts
        });
    });
    app.get('/about',(req,res)=>{
        
       res.render('about');
    })
    app.get('/contact',(req,res)=>{
       
        res.render('contact');
    })
    app.get('/post/:id',async (req,res)=>{
         const blogpost = await BlogPost.findById(req.params.id)
        res.render('post',{
            blogpost
        })
    })
    app.get('/posts/new',(req,res)=>{
        res.render('create')
    })

    app.post('/posts/store',(req,res)=>{
        BlogPost.create(req.body,(error,blogpost)=>{
            res.redirect('/')

        })
    })

    





})