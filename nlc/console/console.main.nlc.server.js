var JSCLPath = "D:\\nframework_gr/nlc/console/console.main.nlc.client.js";module.exports=(manager)=>{
                var exports=new Object();
                    var nmodules=[];
                    var pages=[];

                    
                
                    

        var NModule=
        function(){

            return require("D:\\nframework_gr\\nframework\\ncompiler\\tags/../../nmodule/nmodule");

        }()
    
    ;
    
        var nmodule=new NModule();

        var This=nmodule;

        nmodule.side='both';

        nmodule.name='console-main';
    
    

    
        nmodule.AddMethod('setup',async (...args)=>{
                var f=async function(){
            

        }

    
                var f2=f.bind(nmodule);
                await f2(...args);
            }
    
        );
    
    

    
        nmodule.AddMethod('start',async (...args)=>{
                var f=async function(){
            
            manager.GetModule('console').GetThisWithCallback((module)=>{
                            return module.Get('log2');
                        })('dfg');

        }

    
                var f2=f.bind(nmodule);
                await f2(...args);
            }
    
        );
    
    


        
    
        var fs=require('fs');

        var clientVersion=JSCLPath;

        nmodule.client_js_code=fs.readFileSync(clientVersion);

        
        
        if(nmodule.side!='server'){
            nmodule.Routing('/nmodules/console-main',(req,res)=>{
                res.send(nmodule.client_js_code);
            });
        }

        

            nmodules.push(nmodule);
        
        
                
                
                    
                    exports.nmodules=nmodules;
                    exports.pages=pages;
                    return exports;
                }
                