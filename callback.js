let callbackFunction = function(callback){
    let i=0;
    setTimeout(function(){
        i = 42;
       callback(null, i);

    },2000);

}
callbackFunction(function(err, result){
   console.log(err, result);
});