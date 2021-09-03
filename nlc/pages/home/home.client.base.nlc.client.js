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

        nmodule.name='home-client-base';

        nmodule.RunExternalMethod=function(callback){
            callback.call(nmodule);
        }


        nmodule.RunExternalMethod(function(){
    

    
    
    this.AddSyncProperty('syncProp');
    
    

    


        });
    
        
            var nmoduleManager=window.NFramework.nmoduleManager;
            nmoduleManager.ImportModule(nmodule);
        
            })();
        
                
                
                