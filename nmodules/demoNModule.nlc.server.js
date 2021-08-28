
                
                    

        var NModule=
        function(){

            return require("D:\\nframework_git_repo\\modules\\nframework\\ncompiler\\tags/../../nmodule/nmodule");

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
    
    


    
        module.exports = nmodule;
    
    
                
                