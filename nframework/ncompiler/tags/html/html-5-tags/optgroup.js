
        var htmlImport=require('./import');

        var htmlTagCompile=require('./htmlTag');

        var Tag=require('../../tag/tag');

        var tag=new Tag();

        tag.isAutoClose=false;

        tag.Compile=function(element,childsCode,code,manager){
            return htmlTagCompile(element,childsCode,code,manager,'optgroup',tag);
        }

        module.exports=tag;
    