var htmlImport=require('./import');

var Tag=require('../../tag/tag');

var tag=new Tag();

tag.isAutoClose=false;

tag.Compile=function(element,childsCode,code){
    var contents=tag.GetContent(element,childsCode,code);
    
    var inputs=tag.GetInputs(element,childsCode,code);

    var tagContent=`
        textContent=[0
    `;

    for(var i=0;i<contents.length;i++){
        tagContent+=',`contents[i].code`';
    }

    tagContent+=`]`;

    var compiledCode=`

        ${htmlImport}

        ()=>{

            var result=document.createElement('div');
            
            return result;

        }
            

    `;

    return compiledCode;
}

module.exports=tag;