
                            var a9d4ae9c8_8850_4d4c_9d3d_71e5a333b918_module;
                        var ac0b59619_58dd_43a7_b9b0_a502184ee778_module;
                        var afeb42335_da2c_4c52_bc6d_16728f5a0ad1_module;
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
    
    

    
    
        nmodule.baseModules = ['home-client-base'];
    
    

    

    

        
        nmodule.AddMethod('Setup',(...args)=>{
                var f=async function() {

                manager.GetModule('home-client').AsyncGetThisWithCallback(async (module)=>{
                            a9d4ae9c8_8850_4d4c_9d3d_71e5a333b918_module=module;
                        })
                        var getterObj9d4ae9c8_8850_4d4c_9d3d_71e5a333b918={
                            set stter(value) {
                                (async ()=>{
                                    await a9d4ae9c8_8850_4d4c_9d3d_71e5a333b918_module.AsyncSet('syncProp',value);
                                })();
                            }
                        }
                        getterObj9d4ae9c8_8850_4d4c_9d3d_71e5a333b918.stter= (await manager.GetModule('home-client').AsyncGetThisWithCallback(async (module)=>{
                            ac0b59619_58dd_43a7_b9b0_a502184ee778_module=module;
                            return await ac0b59619_58dd_43a7_b9b0_a502184ee778_module.AsyncGet('syncProp');
                        })
                        )+5;

                console.log(await manager.GetModule('home-client').AsyncGetThisWithCallback(async (module)=>{
                            afeb42335_da2c_4c52_bc6d_16728f5a0ad1_module=module;
                            return await afeb42335_da2c_4c52_bc6d_16728f5a0ad1_module.AsyncGet('syncProp');
                        })
                        );
            }

        
                f.call(nmodule);
            }
    
        );
    
    

    


        
            var nmoduleManager=window.NFramework.nmoduleManager;
            nmoduleManager.ImportModule(nmodule);
        
            })();
        
                
                
                