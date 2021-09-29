var Tag=require('../tag/tag');

var tag=new Tag();

tag.isAutoClose=true;

tag.Compile=function(element,childsCode,code){
    
    return `
        this.useAllGlobalObjects=true;
    `;
}


module.exports=tag;