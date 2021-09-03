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

    var moduleName=inputs[inputs.length-1];
    
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

    var side='both';

    if(!element.forSV){
        
    }

    var compiledCode=`

        var NModule=${nmoduleImportCode};
    
        var nmodule=new NModule();

        var This=nmodule;

        nmodule.side='${side}';

        nmodule.name='${moduleName}';

        nmodule.RunExternalMethod=function(callback){
            callback.call(nmodule);
        }


        nmodule.RunExternalMethod(function(){
    `;
    
    for(var i=0;i<contents.length;i++){
        compiledCode+=contents[i].code;
    }

    compiledCode+=`
        });
    `;

    if(element.forSV){
        compiledCode+=`
        
    
        var fs=require('fs');

        var clientVersion=JSCLPath;

        nmodule.client_js_code=fs.readFileSync(clientVersion);

        
        
        if(nmodule.side!='server'){
            nmodule.Routing('/nmodules/${moduleName}',(req,res)=>{
                res.send(nmodule.client_js_code);
            });
        }

        `;
    }
    else{
        compiledCode+=`
        
            var nmoduleManager=window.NFramework.nmoduleManager;
            nmoduleManager.ImportModule(nmodule);
        `;
    }

    if(element.forSV){
        compiledCode+=`

            nmodules.push(nmodule);
        
        `;
    }


    
    if(!element.forSV){
        compiledCode=`
            (()=>{
                ${compiledCode}
            })();
        `;
    }

    return compiledCode;
}


module.exports=tag;