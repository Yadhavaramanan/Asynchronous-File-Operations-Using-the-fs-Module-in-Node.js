const fs=require('fs');
fs.unlink('YadhavaramananC.txt',function(err){
    if (err) throw err;
    console.log('File Deleted Successfully!')
});