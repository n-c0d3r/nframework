var Tag=require('../tag/tag');

var tag=new Tag();

tag.isAutoClose=false;

tag.Compile=function(element,childsCode,code){
    var contents=tag.GetContent(element,childsCode,code);
    
    var inputs=tag.GetInputs(element,childsCode,code);

    var compiledCode=`
        var ${inputs[0]}=function(){
            
        }

        ${inputs[0]}.base=
    `;
    
    for(var i=0;i<contents.length;i++){
        compiledCode+=contents[i].code;
    }

    compiledCode+=`
        
    `;

    return compiledCode;
}

module.exports=tag;