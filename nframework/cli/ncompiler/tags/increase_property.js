var Tag=require('../tag/tag');

var tag=new Tag();

tag.isAutoClose=true;

tag.Compile=function(element,childsCode,code){
    var inputs=tag.GetInputs(element,childsCode,code);

    return `nmodule.Set('${inputs[0]}',nmodule.Get('${inputs[0]}')+1)`;
}


module.exports=tag;