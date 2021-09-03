var Tag=require('../tag/tag');

var tag=new Tag();

tag.isAutoClose=true;

tag.Compile=function(element,childsCode,code){
    var inputs=tag.GetInputs(element,childsCode,code);
    var baseModules=``;

    if(inputs.length==1){
        baseModules=`'${inputs[0]}'`;
    }
    else{
        for(var i=0;i<inputs.length-1;i++){
            baseModules+=`'${inputs[i]}',`;
        }
        baseModules+=`'${inputs[inputs.length-1]}'`;
    }

    return `
    
        this.baseModules = [${baseModules}];
    
    `;
}


module.exports=tag;