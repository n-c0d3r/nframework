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

        nmodule.RunExternalMethod=function(callback){
            callback.call(nmodule);
        }


        nmodule.RunExternalMethod(function(){
    

    
    
        this.baseModules = ['home-client-base'];
    
    

    

        
        this.AddMethod('setup',async (...args)=>{
                var f=async function() {
                (manager.Get('demoGlobal'))();
            }

        
                var f2=f.bind(this);
                return await f2(...args);
            }
    
        );
    
    

    


        });
    
        
            var nmoduleManager=window.NFramework.nmoduleManager;
            nmoduleManager.ImportModule(nmodule);
        
            })();
        
                
                
                