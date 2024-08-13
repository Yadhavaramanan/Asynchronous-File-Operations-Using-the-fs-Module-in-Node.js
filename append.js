const fs=require('fs');
fs.appendFile('Yadhavaramanan.txt','\n I am from Paundamangalam,\nThis is my text File.',function(err){
  if(err) throw err;
    console.log('Content appended');  
});