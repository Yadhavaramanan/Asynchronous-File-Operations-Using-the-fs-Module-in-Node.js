const fs=require('fs');
fs.writeFile('Yadhavaramanan.txt','I am Yadhavaramanan C\nDepartment of Artificial Intelligence and Machine Learning,\nM. Kumarasamy College of Engineering Karur.',function(err){
  if(err){
    throw err;
  }
  else{
    console.log('Successfully writed!');
  }
});