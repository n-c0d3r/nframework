var fs=require('fs');

var tags=JSON.parse(fs.readFileSync(__dirname+'/html-5-tags.json').toString());

for(var tag of tags){

    var fileCode=`
        var htmlImport=require('./import');

        var htmlTagCompile=require('./htmlTag');

        var Tag=require('../../tag/tag');

        var tag=new Tag();

        tag.isAutoClose=false;

        tag.Compile=function(element,childsCode,code,manager){
            return htmlTagCompile(element,childsCode,code,manager,'${tag}',tag);
        }

        module.exports=tag;
    `;

        fs.writeFileSync(__dirname+'/'+tag+'.js',fileCode);

}