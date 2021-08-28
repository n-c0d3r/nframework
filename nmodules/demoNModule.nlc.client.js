
                
                    

        var NModule=
            function(){

                return window.NFramework.NModule;

            }()

        ;
    
        var nmodule=new NModule();

        var This=nmodule;

        nmodule.name='demoNModule';
    
    

    nmodule.side='both';

    
    
    nmodule.AddProperty('demoProp');
    
    

    
        nmodule.AddMethod('Setup',
    

        function(){
            
        }

    
        );
    
    

    
        nmodule.AddMethod('Start',
    

        function(){



        }

    
        );
    
    

    
        nmodule.AddServerMethod('demoCrossSideMethod',

    

        function(){
        }

    
        );
    
    

    
        nmodule.AddClientMethod('demoCrossSideMethod2',

    

        function(){
            
        }

    
        );
    
    


    
        module.exports = nmodule;
    
    
                
                