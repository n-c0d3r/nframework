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

        nmodule.name='checkGlobalDemo';

        nmodule.RunExternalMethod=function(callback){
            callback.call(nmodule);
        }


        nmodule.RunExternalMethod(function(){
    

    
        this.AddMethod('setup',(...args)=>{
            var f=
    

        function(){

            
            
        }

    
        
    return f.call(this,...args); 

}
    
    );
    
    


        });
    
        
            var nmoduleManager=window.NFramework.nmoduleManager;
            nmoduleManager.ImportModule(nmodule);
        
            })();
        
                
                
                