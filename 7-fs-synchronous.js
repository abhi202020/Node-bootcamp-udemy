const fs=require('fs');
const readfile=fs.readFileSync('./content/first.txt','utf8');
const readfileSecond=fs.readFileSync('./content/second.txt','utf8');
console.log(readfile,readfileSecond);
const writeinFile=fs.writeFileSync('./content/newAutoFileCreated.txt',//this has written text in newAutoFileCreated.
`This is third text:${readfile}${readfileSecond}`,
{flag:'a'});//flsg :'a" helps to write the same input text again. 