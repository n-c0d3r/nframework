var JSCLPath = "D:\\nframework_gr/nlc/server/pages/home.nlc.client.js";
                    var nmodules=[];
                    var pages=[];
                    
                
                    

        var NModule=
        function(){

            return require("D:\\nframework_gr\\modules\\nframework\\ncompiler\\tags/../../nmodule/nmodule");

        }()
    
    ;
    
        var nmodule=new NModule();

        var This=nmodule;

        nmodule.side='both';

        nmodule.name='homeRouter';
    
    

    
        
        {
            path='';
            callback=()=>{};
            

        path='/home'

        callback=(req,res)=>{
            

        ((req,res)=>{
            var framework=nmodule.manager.NFramework;
            var modules=nmodule.manager.pages['homePage'].modules;

            var miejs='';

            var frameworkCLEJS=framework.clejs;

            miejs+=frameworkCLEJS;

            for(var i=0;i<modules.length;i++){
                var module=modules[i];
                miejs+=' <script  src="/nmodules/'+module+'"></script>';
            }
            

            miejs+="<script src='/appcl'></script>";

            res.render( nmodule.manager.pages['homePage'].ejs_src,{
                NFramework:miejs
            });
        })(req,res);
    
    
        }

    
            nmodule.Routing(path,callback);
        }
    
    
    


        
    
        var fs=require('fs');

        var clientVersion=JSCLPath;

        var code=fs.readFileSync(clientVersion);
        
        if(nmodule.side!='server'){
            nmodule.Routing('/nmodules/homeRouter',(req,res)=>{
                res.send(code);
            });
        }

        

            nmodules.push(nmodule);
        
        
                
                
                    var exports=new Object();
                    exports.nmodules=nmodules;
                    exports.pages=pages;
                    module.exports=exports;
                