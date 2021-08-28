var Tag=require('../tag/tag');

var tag=new Tag();

tag.isAutoClose=false;

var parsed__dirname='';

for(var i=0;i<__dirname.length;i++){
    if(__dirname[i]=='\\'){
        parsed__dirname+='\\\\';
    }
    else{
        parsed__dirname+=__dirname[i];
    }
}

var nmodulePath=parsed__dirname+'/../../nmodule/nmodule';

tag.Compile=function(element,childsCode,code){
    var contents=tag.GetContent(element,childsCode,code);

    var inputs=tag.GetInputs(element,childsCode,code);

    var nmoduleImportCode=`
        function(){

            return require("${nmodulePath}");

        }()
    
    `;

    if(!element.forSV){
        nmoduleImportCode=`
            function(){

                return window.NFramework.NModule;

            }()

        `;
    }

    var compiledCode=`

        var NModule=${nmoduleImportCode};
    
        var nmodule=new NModule();

        var This=nmodule;

        nmodule.name='${inputs[0]}';
    
    `;
    
    for(var i=0;i<contents.length;i++){
        compiledCode+=contents[i].code;
    }

    compiledCode+=`
    
        module.exports = nmodule;
    
    `;

    return compiledCode;
}


module.exports=tag;