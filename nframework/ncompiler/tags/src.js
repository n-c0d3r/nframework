var Tag=require('../tag/tag');

var tag=new Tag();

tag.isAutoClose=true;

tag.Compile=function(element,childsCode,code){
    var inputs=tag.GetInputs(element,childsCode,code);

    var compiledPath = inputs[0];
    
    return `
    
        this.src='${compiledPath}';
    
    `;
}


module.exports=tag;