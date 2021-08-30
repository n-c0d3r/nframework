var Tag=require('../tag/tag');

var tag=new Tag();

tag.isAutoClose=true;

tag.Compile=function(element,childsCode,code){
    var inputs=tag.GetInputs(element,childsCode,code);

    var code=`this.modules=[];
    `;

    for(var i=0;i<inputs.length;i++){
        code+=`this.modules.push('${inputs[i]}');
        `;
    }
    
    return `
    
        ${code}
    
    `;
}


module.exports=tag;