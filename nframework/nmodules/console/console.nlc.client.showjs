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

        nmodule.name='console';
    
    

    
        nmodule.AddMethod('log',(...args)=>{
            var f=
    
        function(...args) {
            console.log(...args);
        }
    
        
    return f.call(nmodule,...args); 

}
    
    );
    
    

    
        nmodule.AddMethod('log2',async (...args)=>{
                var f=async function(...args) {
            console.log(...args);
        }
    
                var f2=f.bind(nmodule);
                return await f2(...args);
            }
    
        );
    
    


        
            var nmoduleManager=window.NFramework.nmoduleManager;
            nmoduleManager.ImportModule(nmodule);
        
            })();
        
                
                
                