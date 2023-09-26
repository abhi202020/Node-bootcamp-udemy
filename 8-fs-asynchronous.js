const fs=require('fs');
console.log("1");
fs.readFile('./content/first.txt','utf8',(err,result)=>{
    if(err){
        console.log(err);
        return;
    }
    else{
        const first=result;
    }



 fs.readFile('./content/second.txt','utf8',(err,result)=>{
    if(err){
        console.log(err);
        return;
    }
    else{
        const second=result;
    }
fs.writeFile('./content/async_new_text_file_created.txt','text created auto by asynchronous method ',(err,result)=>{
    if(err){
        console.log(err);
        return;
    }
    else{
        console.log(2);
    }
})
 })
});
console.log("3");
