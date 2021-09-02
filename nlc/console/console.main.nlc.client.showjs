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

        nmodule.name='console-main';
    
    

    
        nmodule.AddMethod('setup',async (...args)=>{
                var f=async function(){
            

        }

    
                var f2=f.bind(nmodule);
                await f2(...args);
            }
    
        );
    
    

    
        nmodule.AddMethod('start',async (...args)=>{
                var f=async function(){
            
            manager.GetModule('console').GetThisWithCallback((module)=>{
                            return module.Get('log2');
                        })('dfg');

        }

    
                var f2=f.bind(nmodule);
                await f2(...args);
            }
    
        );
    
    


        
            var nmoduleManager=window.NFramework.nmoduleManager;
            nmoduleManager.ImportModule(nmodule);
        
            })();
        
                
                
                