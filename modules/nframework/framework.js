var fs=require('fs');

var NCompiler = require('./ncompiler/ncompiler');

var NModuleManager = require('./nmoduleManager/nmoduleManager');

var NModule=require('./nmodule/nmodule');

var NFramework=class{

    constructor(){
        this.ncompiler=new NCompiler();
        this.ncompiler.NFramework=this;

        this.nmoduleManager=new NModuleManager();
        this.nmoduleManager.NFramework=this;

        this.framework_nmodules_src_dir=__dirname+'/nmodules';

        this.debug=new Object();

        this.debug.show_nlc_compiled_js=false;

        this.server=new Object();

        this.server.PORT=7070;
    }

    Init(){
    }

    Build(){
        this.nmoduleManager.BuildModulePathsArray();
        this.nmoduleManager.CompileModules();
        this.nmoduleManager.ImportModules();
    }

    Run(){
        this.nmoduleManager.Setup();
        this.nmoduleManager.Start();
    }

    LoadSetting(path){
        var str=fs.readFileSync(path).toString();
        var settingObj=JSON.parse(str);
        var keys=Object.keys(settingObj);
        for(var i=0;i<keys.length;i++){
            this[keys[i]]=settingObj[keys[i]];
        }
        if(this.nmodules_src_dir[0]=='.'){
            this.nmodules_src_dir=this.appDir+this.nmodules_src_dir.substring(1,this.nmodules_src_dir.length);
        }
    }

    CompileModule(path){
        return this.ncompiler.CompileFile(path);
        
    }

}


module.exports=()=>{

    return new NFramework();

}