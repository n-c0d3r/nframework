var Tag=require('../tag/tag');

var tag=new Tag();

tag.isAutoClose=false;

tag.Compile=function(element,childsCode,code){
    var contents=tag.GetContent(element,childsCode,code);
    
    var inputs=tag.GetInputs(element,childsCode,code);

    var compiledCode=``;
    
    for(var i=0;i<contents.length;i++){
        compiledCode+=contents[i].code;
    }

    compiledCode=`
    {
        var styleE = document.createElement('style');

        styleE.textContent = `+'`' +compiledCode + '`;'+`

        document.body.appendChild(styleE);
    }
    `;

    if(element.forSV){
        compiledCode='';
    }

    return compiledCode;
}

module.exports=tag;