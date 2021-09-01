var Tag=require('../tag/tag');

var tag=new Tag();

tag.isAutoClose=true;

tag.Compile=function(element,childsCode,code){
    return `
    
        var Import=function(path){
            return require(path);
        }
    
    `;
}


module.exports=tag;