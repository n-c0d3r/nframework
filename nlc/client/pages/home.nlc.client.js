
                
                    

    
    
    
                
                
                
                    
            (()=>{
                

        var NModule=
            function(){

                return window.NFramework.NModule;

            }()

        ;
    
        var nmodule=new NModule();

        var This=nmodule;

        nmodule.side='both';

        nmodule.name='home';
    
    

    
        nmodule.AddMethod('Setup',(...args)=>{
            var f=
    

        function() {
            
        }

    
        
    f.call(nmodule,...args); 

}
    
    );
    
    


        
            var nmoduleManager=window.NFramework.nmoduleManager;
            nmoduleManager.ImportModule(nmodule);
        
            })();
        
                
                