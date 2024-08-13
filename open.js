const fs=require('fs');
fs.open('Yadhavaramanan.txt','w',function(err,file){
   if(err){
    throw err;l
   }
   else{
    console.log('Opened!');
   }
});