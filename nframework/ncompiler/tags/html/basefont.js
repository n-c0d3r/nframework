
        var htmlImport=require('./import');

        var htmlTagCompile=require('./htmlTag');

        var Tag=require('../../tag/tag');

        var tag=new Tag();

        tag.isAutoClose=true;

        tag.Compile=function(element,childsCode,code,manager){
            return htmlTagCompile(element,childsCode,code,manager,'basefont',tag);
        }

        module.exports=tag;
    