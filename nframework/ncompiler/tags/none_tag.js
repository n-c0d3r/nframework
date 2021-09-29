var Tag=require('../tag/tag');

var tag=new Tag();

tag.isAutoClose=false;


tag.Compile=function(element,childsCode,code,manager,nlcPath){

    var line=0;

    for(var i=0;i<element.startContentIndex;i++){
        if(code.data[i]=='\n'){
            line++;
        }
    }

    console.log(`${nlcPath}:${line}`);
    console.log(`   '${tag.notFoundName}' tag not found.`);
    process.exit();
    return `
    `;
}


module.exports=tag;