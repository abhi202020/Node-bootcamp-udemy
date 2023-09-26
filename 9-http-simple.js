const http =require('http');
const server=http.createServer((req,res)=>{
    //console.log(req);
    res.write("This is our first homepage")
    res.end();
});
server.listen(3000);