var Tag=require('../tag/tag');

var tag=new Tag();

tag.isAutoClose=false;

tag.Compile=function(element,childsCode,code){
    var contents=tag.GetContent(element,childsCode,code);
    
    var inputs=tag.GetInputs(element,childsCode,code);

    var compiledCode=`{
        this.AddServerMethod('${inputs[0]}',(clientSocket,...args)=>{
            var f=
    `;
    
    for(var i=0;i<contents.length;i++){
        compiledCode+=contents[i].code;
    }

    compiledCode+=`
        
    return f.call(this,...args); 

}
    
    );
}
    `;

    return compiledCode;
}

module.exports=tag;