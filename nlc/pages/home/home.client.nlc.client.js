
                            var a16329fda_bc2b_44e9_a93d_a27262fb1237_module;
                        var a3b51a6a9_ae43_4ae2_8bda_9473d985ec60_module;
                        var a5a420281_57cc_49a1_87a5_672f9369621c_module;
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

        nmodule.name='home-client';
    
    

    
    
    nmodule.AddSyncProperty('syncProp');
    
    

    

    

        
        nmodule.AddMethod('Setup',(...args)=>{
                var f=async function() {

                
                manager.GetModule('home-client').AsyncGetThisWithCallback(async (module)=>{
                            a16329fda_bc2b_44e9_a93d_a27262fb1237_module=module;
                        })
                        var getterObj16329fda_bc2b_44e9_a93d_a27262fb1237={
                            set stter(value) {
                                (async ()=>{
                                    await a16329fda_bc2b_44e9_a93d_a27262fb1237_module.AsyncSet('syncProp',value);
                                })();
                            }
                        }
                        getterObj16329fda_bc2b_44e9_a93d_a27262fb1237.stter= (await this.AsyncGetThisWithCallback(async (module)=>{
                            a3b51a6a9_ae43_4ae2_8bda_9473d985ec60_module=module;
                            return await a3b51a6a9_ae43_4ae2_8bda_9473d985ec60_module.AsyncGet('syncProp');
                        })
                        )+5;

                console.log(await this.AsyncGetThisWithCallback(async (module)=>{
                            a5a420281_57cc_49a1_87a5_672f9369621c_module=module;
                            return await a5a420281_57cc_49a1_87a5_672f9369621c_module.AsyncGet('syncProp');
                        })
                        );
            }

        
                f.call(nmodule);
            }
    
        );
    
    

    


        
            var nmoduleManager=window.NFramework.nmoduleManager;
            nmoduleManager.ImportModule(nmodule);
        
            })();
        
                
                
                