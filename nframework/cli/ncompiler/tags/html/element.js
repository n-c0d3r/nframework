var htmlImport=require('./import');

var Tag=require('../../tag/tag');

var tag=new Tag();

tag.isAutoClose=false;

tag.Compile=function(element,childsCode,code){
    var contents=tag.GetContent(element,childsCode,code);
    
    var inputs=tag.GetInputs(element,childsCode,code);

    var compiledCode=`
    `;

    return compiledCode;
}

module.exports=tag;