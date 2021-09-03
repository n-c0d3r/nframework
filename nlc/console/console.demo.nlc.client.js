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

        nmodule.name='console-demo';

        nmodule.RunExternalMethod=function(callback){
            callback.call(nmodule);
        }


        nmodule.RunExternalMethod(function(){
    

    
        this.AddMethod('setup',async (...args)=>{
                var f=async function(){

            var input = await (manager.Get('console')).GetThisWithCallback((module)=>{
                            return module.Get('readLine');
                        })();
            
            (manager.Get('console')).GetThisWithCallback((module)=>{
                            return module.Get('log');
                        })(input);

            (manager.Get('console')).GetThisWithCallback((module)=>{
                            return module.Get('clear');
                        })();

        }

    
                var f2=f.bind(this);
                return await f2(...args);
            }
    
        );
    
    


        });
    
        
            var nmoduleManager=window.NFramework.nmoduleManager;
            nmoduleManager.ImportModule(nmodule);
        
            })();
        
                
                
                