var JSCLPath = "D:\\nframework_gr/nlc/pages/home/home.router.nlc.client.js";module.exports=(manager)=>{
                var exports=new Object();
                    var nmodules=[];
                    var pages=[];
                    exports.customTypeDatas=[];
                    exports.customTypeDatas.Add=function(key,value){
                        exports.customTypeDatas.push({
                            'key':key,
                            'value':value
                        });
                    }

                    
                
                    

        var NModule=
        function(){

            return require("D:\\nframework_gr\\nframework\\ncompiler\\tags/../../nmodule/nmodule");

        }()
    
    ;
    
        var nmodule=new NModule();

        var This=nmodule;

        nmodule.side='both';

        nmodule.name='home-router';
    
    

    
        
        {
            path='';
            callback=()=>{};
            

        
        path=
    
            '/home'
        
    
    

        
        callback=
    
            (req,res)=>{
                

        ((req,res)=>{
            var framework=manager.NFramework;

            var modules=manager.pages['homePage'].modules;

            var miejs='';

            var frameworkCLEJS=framework.clejs;

            miejs+=frameworkCLEJS;

            for(var i=0;i<modules.length;i++){
                var module=modules[i];
                miejs+=' <script  src="/nmodules/'+module+'"></script>';
            }

            var globalObjects=manager.pages['homePage'].customTypeDatas;

            for(var globalObjectName of globalObjects){
                miejs+="\n<script src='/global-objects/"+globalObjectName+"'></script>";
            }

            miejs+="\n<script src='/appcl'></script>";

            miejs="<nframework-scripts>" +miejs+ "</nframework-scripts>";

            res.render( manager.pages['homePage'].ejs_src,{
                NFramework:miejs
            });
        })(req,res);
    
    
            }
        
    
    

    
            nmodule.Routing(path,callback);
        }
    
    
    


        
    
        var fs=require('fs');

        var clientVersion=JSCLPath;

        nmodule.client_js_code=fs.readFileSync(clientVersion);

        
        
        if(nmodule.side!='server'){
            nmodule.Routing('/nmodules/home-router',(req,res)=>{
                res.send(nmodule.client_js_code);
            });
        }

        

            nmodules.push(nmodule);
        
        
                
                
                    
                    exports.nmodules=nmodules;
                    exports.pages=pages;
                    return exports;
                }
                