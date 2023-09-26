const http =require('http');
const server=http.createServer((req,res)=>{
    if(req.url==='/'){
        res.end("This is our first Homepage")
        
    }
    else if(req.url==='/about'){
        res.end("Here is our short history");
        
    }
    else {
        res.end( `<p>OOPS...</p>
        <h1>There is an error</h1>
        <a href='/'>Back Home</a>`)
      
    }
   
});
server.listen(3000);