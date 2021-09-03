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
    
    

    
        nmodule.AddMethod('setup',(...args)=>{
            var f=
    

        function(){

            
            
        }

    
        
    return f.call(nmodule,...args); 

}
    
    );
    
    


        
            var nmoduleManager=window.NFramework.nmoduleManager;
            nmoduleManager.ImportModule(nmodule);
        
            })();
        
                
                
                