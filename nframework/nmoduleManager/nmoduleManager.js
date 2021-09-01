var fs = require('fs');

var global_nmodule=require('./global_nmodule/global_nmodule');

var NModuleManager=class{
    constructor(){
        this.modulePaths=[];
        this.svMJSPaths=[];
        this.clMJSPaths=[];
        this.nlcPaths=[];
        this.pages=new Object();
        this.modules=new Object();
        this.watches=[];
    }

    SetupGetterAndSetterForSyncProps(){
        var express_server=this.NFramework.express_server;
        var manager=this;
        express_server.get('/getSyncProp/:module/:name',(req,res)=>{
            var moduleName=req.params.module;
            var syncPropName=req.params.name;

            var property=manager.GetModule(moduleName).Get(syncPropName);

            var data={
                value:property
            };

            var jsonText=JSON.stringify(data);

            res.send(jsonText);

        })
        express_server.get('/setSyncProp/:module/:name/:data',(req,res)=>{
            var moduleName=req.params.module;
            var syncPropName=req.params.name;
            var data=JSON.parse(req.params.data);

            manager.GetModule(moduleName).Set(syncPropName,data);

            res.send('DONE');
        })
    }

    BuildModulePathsArray(){
        var src_path=this.NFramework.nmodules_src_dir;
        var framework_src_path=this.NFramework.framework_nmodules_src_dir;
        
        var nmm=this;

        var buildmpa=function (file) {
            var parts=file.split('.');
            if(parts[parts.length-1]=='nlc'){
                nmm.modulePaths.push(file);
            }
            else{
                if(parts[parts.length-1]=='showjs'){
                    fs.unlinkSync(file);
                }
                else
                if( 
                    parts[parts.length-3]=='nlc' 
                    && parts[parts.length-1]=='js' 
                    && (parts[parts.length-2]=='server' || parts[parts.length-2]=='client'))
                {

                    fs.unlinkSync(file);
                    
                }
            }
        };

        var isDir=function(path){
            var isD=false;
            var stats = fs.statSync(path);
            isD=stats.isDirectory();
            return isD;
        }

        var DoWithAllFile=function(dirPath){
            fs.readdirSync(dirPath).forEach(file => {
            
                var filePath=dirPath+'/'+file;
    
                if(isDir(filePath)){
                    DoWithAllFile(filePath);
                }
                else{
                    buildmpa(filePath);
                }
    
            });
        }

        DoWithAllFile(framework_src_path);
        DoWithAllFile(src_path);

    }

    CompileModules(){

        for(var filePath of this.watches){
            fs.unwatchFile(filePath);
        }

        this.watches=[];

        var compiler=this.NFramework.ncompiler;
        for(var i=0;i<this.modulePaths.length;i++){
            var cr = compiler.CompileFile(this.modulePaths[i]);
            
            if(this.NFramework.debug.show_nlc_compiled_js){
                var showerCompiledFileSV='';
                showerCompiledFileSV+=cr.dirNLCPath;
                showerCompiledFileSV+='/';
                showerCompiledFileSV+=cr.fileNLCName;
                showerCompiledFileSV+='.server.showjs';

                fs.writeFileSync(showerCompiledFileSV,cr.codeSV);

                var showerCompiledFileC='';
                showerCompiledFileC+=cr.dirNLCPath;
                showerCompiledFileC+='/';
                showerCompiledFileC+=cr.fileNLCName;
                showerCompiledFileC+='.client.showjs';

                fs.writeFileSync(showerCompiledFileC,cr.codeCL);


            }
                
            this.svMJSPaths.push(cr.fileJSSVPath);

            this.clMJSPaths.push(cr.fileJSCPath);

            this.nlcPaths.push(cr.fileNLCPath);

            
            var nlcfilePath=cr.fileNLCPath;

            if(this.NFramework.debug.client_nlc){
                var manager=this;
                this.watches.push(nlcfilePath);
                fs.watchFile(nlcfilePath, (curr, prev) => {
                    manager.CompileModules();
                    manager.ReRoutingModulesForClient();
                });
            }
        }

    }

    ReRoutingModulesForClient(){
        var keys=Object.keys(this.modules);
        for(var i=0;i<keys.length;i++){
            var clMJSPath=this.modules[keys[i]].clMJSPath;
            this.modules[keys[i]].client_js_code=fs.readFileSync(clMJSPath);
        }
    }

    ImportModules(){
        for(var i=0;i<this.svMJSPaths.length;i++){
            var modulePath=this.svMJSPaths[i];
            var eps=require(modulePath)(this);


            eps.manager=this;
            var modules=eps.nmodules;
            for(var module of modules){
                var moduleName=module.name;
                this.modules[moduleName]=module;
                this.modules[moduleName].manager=this;
                this.modules[moduleName].clMJSPath=this.clMJSPaths[i];
                this.modules[moduleName].AfterImported();
            }
            var pages=eps.pages;
            for(var page of pages){
                this.pages[page.name]=page;
            }
        }
    }

    Setup(){
        var keys=Object.keys(this.modules);
        for(var i=0;i<keys.length;i++){
            this.modules[keys[i]].Setup();
        }
    }

    Start(){
        var keys=Object.keys(this.modules);
        for(var i=0;i<keys.length;i++){
            this.modules[keys[i]].Start();
        }
    }

    GetModule(name){
        return this.modules[name];
    }

    GetPage(name){
        return this.pages[name];
    }

}

module.exports=NModuleManager;