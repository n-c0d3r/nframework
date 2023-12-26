var JSCLPath = "/Users/macos/Documents/NCoder/nframework/nlc/demo.nlc.client.js";
                            var a815f11f1_3579_46c5_8087_ac6b0d64c4cd_module;
                        var a3452bdaf_de05_4cb1_88dc_82592ccea7d5_module;
                        module.exports=(manager)=>{
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

            return require("/Users/macos/Documents/NCoder/nframework/nframework/ncompiler/tags/../../nmodule/nmodule");

        }()
    
    ;
    
        var nmodule=new NModule();

        var This=nmodule;

        nmodule.side='both';

        nmodule.name='demo';

        nmodule.__TYPE='NMODULE';

        nmodule.RunExternalMethod=function(callback){
            callback.call(nmodule);
        }


        nmodule.RunExternalMethod(function(){
    

    

    this.AddSyncProperty('content');

    

    

        
        this.AddMethod('setup',async (...args)=>{
                var f=async function(){

                (manager.Get('console')).GetThisWithCallback((module)=>{
                            return module.Get('log');
                        })('server running');

                this.AsyncGetThisWithCallback(async (module)=>{
                            a815f11f1_3579_46c5_8087_ac6b0d64c4cd_module=module;
                        })
                        var getterObj815f11f1_3579_46c5_8087_ac6b0d64c4cd={
                            set stter(value) {
                                (async ()=>{
                                    await a815f11f1_3579_46c5_8087_ac6b0d64c4cd_module.AsyncSet('content',value);
                                })();
                            }
                        }
                        getterObj815f11f1_3579_46c5_8087_ac6b0d64c4cd.stter= "Hello";
                console.log(await this.AsyncGetThisWithCallback(async (module)=>{
                            a3452bdaf_de05_4cb1_88dc_82592ccea7d5_module=module;
                            return await a3452bdaf_de05_4cb1_88dc_82592ccea7d5_module.AsyncGet('content');
                        })
                        );

            }


        
                var f2=f.bind(this);
                return await f2(...args);
            }
    
        );
    
    

    

    


        });
    
        
    
        var fs=require('fs');

        var clientVersion=JSCLPath;

        nmodule.client_js_code=fs.readFileSync(clientVersion);

        
        
        if(nmodule.side!='server'){
            nmodule.Routing('/nmodules/demo',(req,res)=>{
                res.send(nmodule.client_js_code);
            });
        }

        

            nmodules.push(nmodule);
        
        

                

                exports.nmodules=nmodules;
                exports.pages=pages;
                return exports;
            }
            