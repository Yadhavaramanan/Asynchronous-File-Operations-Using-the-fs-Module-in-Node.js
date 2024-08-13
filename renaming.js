const fs=require('fs');
fs.rename('Yadhavaramanan.txt','YadhavaramananC.txt',function(err){
  if(err) throw err;
    console.log('File Renamed Successfully!');  
});