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
    
    

    

        
        nmodule.AddMethod('am',async (...args)=>{
                var f=async function() {

                var a = await fetch(`http:/localhost:7070/home`);
                return a;

            }

        
                var f2=f.bind(nmodule);
                await f2(...args);
            }
    
        );
    
    

        
        nmodule.AddMethod('setup',async (...args)=>{
                var f=async function() {

                console.log(this.GetThisWithCallback((module)=>{
                            return module.Get('am');
                        })());

            }

        
                var f2=f.bind(nmodule);
                await f2(...args);
            }
    
        );
    
    

    


        
            var nmoduleManager=window.NFramework.nmoduleManager;
            nmoduleManager.ImportModule(nmodule);
        
            })();
        
                
                
                