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

        nmodule.name='demo';

        nmodule.__TYPE='NMODULE';

        nmodule.RunExternalMethod=function(callback){
            callback.call(nmodule);
        }


        nmodule.RunExternalMethod(function(){
    

    
        this.AddMethod('setup',(...args)=>{
            var f=
    

        function(){
            console.log('running');
        }


    
        
    return f.call(this,...args); 

}
    
    );
    
    


        });
    
        
            var nmoduleManager=window.NFramework.nmoduleManager;
            nmoduleManager.ImportModule(nmodule);
        
            })();
        

                
            