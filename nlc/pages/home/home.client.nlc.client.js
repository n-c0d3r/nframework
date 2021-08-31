
                            var a7660be3b_148c_4d21_9b47_7f08521b6bd8_module;
                        var a5ea409bc_da4c_423f_83aa_a7517d7c38a2_module;
                        var ae7ce5d65_18b8_4156_8162_deca57ec4797_module;
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
                            a7660be3b_148c_4d21_9b47_7f08521b6bd8_module=module;
                        })
                        var getterObj7660be3b_148c_4d21_9b47_7f08521b6bd8={
                            set stter(value) {
                                (async ()=>{
                                    await a7660be3b_148c_4d21_9b47_7f08521b6bd8_module.AsyncSet('syncProp',value);
                                })();
                            }
                        }
                        getterObj7660be3b_148c_4d21_9b47_7f08521b6bd8.stter= (await this.AsyncGetThisWithCallback(async (module)=>{
                            a5ea409bc_da4c_423f_83aa_a7517d7c38a2_module=module;
                            return await a5ea409bc_da4c_423f_83aa_a7517d7c38a2_module.AsyncGet('syncProp');
                        })
                        )+5;

                console.log(await this.AsyncGetThisWithCallback(async (module)=>{
                            ae7ce5d65_18b8_4156_8162_deca57ec4797_module=module;
                            return await ae7ce5d65_18b8_4156_8162_deca57ec4797_module.AsyncGet('syncProp');
                        })
                        );
            }

        
                f.call(nmodule);
            }
    
        );
    
    

    


        
            var nmoduleManager=window.NFramework.nmoduleManager;
            nmoduleManager.ImportModule(nmodule);
        
            })();
        
                
                
                