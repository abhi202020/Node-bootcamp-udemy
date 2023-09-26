const path=require('path');
console.log(path.sep);

const textfilepath=path.join('/content','subContent','text.txt');//this shows path of a file
console.log(textfilepath);

const folderFilename=path.basename(textfilepath);
console.log(folderFilename);//this shows text.txt

const getfullUserPath=path.resolve(__dirname,'content','subContent','text.txt');
console.log(getfullUserPath);
