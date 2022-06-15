const http= require('http');

const server = http.createServer(function(req, res){
    if (req.url === '/'){
        console.log('Its the Home Page');
        res.end("Welcome to Our Home Page");
    } 

    if (req.url === '/about'){
        res.end("Here is Our Brief History");
    }
    res.end('<h1>Oops!! </h1><p> We could Not Find What You asked for</p><a href="/">back home<a/>')
});

server.listen(5000) 

    