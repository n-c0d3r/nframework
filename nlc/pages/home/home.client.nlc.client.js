
                            var a0d13a722_9357_408a_a479_e346889c849c_module;
                        var abac083c2_0661_45ce_b358_ec0c0f0de92b_module;
                        var afa947c3e_12b1_4283_841a_1e8adc1b1f1b_module;
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
                            a0d13a722_9357_408a_a479_e346889c849c_module=module;
                        })
                        var getterObj0d13a722_9357_408a_a479_e346889c849c={
                            set stter(value) {
                                (async ()=>{
                                    await a0d13a722_9357_408a_a479_e346889c849c_module.AsyncSet('syncProp',value);
                                })();
                            }
                        }
                        getterObj0d13a722_9357_408a_a479_e346889c849c.stter= (await this.AsyncGetThisWithCallback(async (module)=>{
                            abac083c2_0661_45ce_b358_ec0c0f0de92b_module=module;
                            return await abac083c2_0661_45ce_b358_ec0c0f0de92b_module.AsyncGet('syncProp');
                        })
                        )+5;

                console.log(await manager.GetModule('home-client').AsyncGetThisWithCallback(async (module)=>{
                            afa947c3e_12b1_4283_841a_1e8adc1b1f1b_module=module;
                            return await afa947c3e_12b1_4283_841a_1e8adc1b1f1b_module.AsyncGet('syncProp');
                        })
                        );
            }

        
                f.call(nmodule);
            }
    
        );
    
    

    


        
            var nmoduleManager=window.NFramework.nmoduleManager;
            nmoduleManager.ImportModule(nmodule);
        
            })();
        
                
                
                