var Tag=require('../tag/tag');

var tag=new Tag();

tag.isAutoClose=false;

tag.Compile=function(element,childsCode,code,manager){

    if(element.forSV){
        var inputs=tag.GetInputs(element,childsCode,code);
    
        var contents=tag.GetContent(element,childsCode,code);
    
        var compiledCode='';
        
        for(var i=0;i<contents.length;i++){
            compiledCode+=contents[i].code;
        }
    
        var compiledJSCode=''+compiledCode+'';
    
        manager.jsCode[inputs[0]]=compiledJSCode;
    
        compiledCode=`(()=>{
            var data=${compiledCode};
            return data;
        })()`
    
        return `exports.customTypeDatas.Add('${inputs[0]}',${compiledCode})`;
    }
    else
    return '';
}


module.exports=tag;