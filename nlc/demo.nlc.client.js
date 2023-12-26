
                            var a35d788a5_1ea6_4d61_afaa_c4aad9c8cd33_module;
                        var a81c0aa4d_e86d_4765_bbd8_e2056b95e43e_module;
                        
                            var a5dd4d4f5_3347_4c3e_908e_b8f543f92b37_module;
                        var ae6c2fb2c_8380_48b6_844b_d45544fdb297_module;
                        manager=window.NFramework.nmoduleManager;
            

                    
            (()=>{
                

        var NModule=
            function(){

                return window.NFramework.NModule;

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
                            a35d788a5_1ea6_4d61_afaa_c4aad9c8cd33_module=module;
                        })
                        var getterObj35d788a5_1ea6_4d61_afaa_c4aad9c8cd33={
                            set stter(value) {
                                (async ()=>{
                                    await a35d788a5_1ea6_4d61_afaa_c4aad9c8cd33_module.AsyncSet('content',value);
                                })();
                            }
                        }
                        getterObj35d788a5_1ea6_4d61_afaa_c4aad9c8cd33.stter= "Hello";
                console.log(await this.AsyncGetThisWithCallback(async (module)=>{
                            a81c0aa4d_e86d_4765_bbd8_e2056b95e43e_module=module;
                            return await a81c0aa4d_e86d_4765_bbd8_e2056b95e43e_module.AsyncGet('content');
                        })
                        );

            }


        
                var f2=f.bind(this);
                return await f2(...args);
            }
    
        );
    
    

    

    

        
        this.AddMethod('setup',async (...args)=>{
                var f=async function(){

                console.log('client running');

                for(var i = 0; i < 1000; i++){

                    this.AsyncGetThisWithCallback(async (module)=>{
                            a5dd4d4f5_3347_4c3e_908e_b8f543f92b37_module=module;
                        })
                        var getterObj5dd4d4f5_3347_4c3e_908e_b8f543f92b37={
                            set stter(value) {
                                (async ()=>{
                                    await a5dd4d4f5_3347_4c3e_908e_b8f543f92b37_module.AsyncSet('content',value);
                                })();
                            }
                        }
                        getterObj5dd4d4f5_3347_4c3e_908e_b8f543f92b37.stter= i;
                }
                console.log(await this.AsyncGetThisWithCallback(async (module)=>{
                            ae6c2fb2c_8380_48b6_844b_d45544fdb297_module=module;
                            return await ae6c2fb2c_8380_48b6_844b_d45544fdb297_module.AsyncGet('content');
                        })
                        );

            }


        
                var f2=f.bind(this);
                return await f2(...args);
            }
    
        );
    
    

    


        });
    
        
            var nmoduleManager=window.NFramework.nmoduleManager;
            nmoduleManager.ImportModule(nmodule);
        
            })();
        

                
            