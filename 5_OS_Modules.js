const os= require('os');
//info about current user
const users=os.userInfo();
console.log(users);
console.log(os.uptime());

const multiOSdata={
    totalmem:os.totalmem(),
    freemem:os.freemem(),
    release:os.release(),
    name:os.type()
};
console.log(multiOSdata);