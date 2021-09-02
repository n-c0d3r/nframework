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
    
    

    

        
        nmodule.AddMethod('setup',async (...args)=>{
                var f=async function() {

            }

        
                var f2=f.bind(nmodule);
                return await f2(...args);
            }
    
        );
    
    

    


        
            var nmoduleManager=window.NFramework.nmoduleManager;
            nmoduleManager.ImportModule(nmodule);
        
            })();
        
                
                
                