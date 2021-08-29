var Tag=require('../tag/tag');

var tag=new Tag();

tag.isAutoClose=true;

tag.Compile=function(element,childsCode,code){
    var inputs=tag.GetInputs(element,childsCode,code);
    
    return `
        document.createElement('${inputs[0]}')
    `;
}


module.exports=tag;