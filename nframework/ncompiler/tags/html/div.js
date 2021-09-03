var htmlImport=require('./import');

var Tag=require('../../tag/tag');

var tag=new Tag();

tag.isAutoClose=false;

tag.Compile=function(element,childsCode,code){
    var contents=tag.GetContent(element,childsCode,code);
    
    var inputs=tag.GetInputs(element,childsCode,code);

    var childs=`
        var childs=[];
    `;

    for(var i=0;i<contents.length-1;i++){
        if(contents[i].type=='childCode'){
            childs+=`childs.push(${contents[i].code})`;
        }
    }
    var i=contents.length-1;
    if(contents[i].type=='childCode'){
        childs+=`childs.push(${contents[i].code})`;
    }
    console.log(contents);
    

    var compiledCode=`

        ${htmlImport}

        ()=>{

            var result=document.createElement('div');

            ${childs}
            
            
            return result;

        }
            

    `;

    return compiledCode;
}

module.exports=tag;