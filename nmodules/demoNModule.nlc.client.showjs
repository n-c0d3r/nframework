
                
                    

        var NModule=
            function(){

                return window.NFramework.NModule;

            }()

        ;
    
        var nmodule=new NModule();

        var This=nmodule;

        nmodule.side='client';

        nmodule.name='demoClientModule';
    
    

    

        
    
    nmodule.AddProperty('demoProp');
    
    
    
        
        
        nmodule.AddMethod('Setup',(...args)=>{
            var f=
    

            function(){
                
                this.Get('SM')();
            }

        
        
    f.call(nmodule,...args); 

}
    
    );
    
    

        
        nmodule.AddMethod('Start',(...args)=>{
            var f=
    

            function(){



            }

        
        
    f.call(nmodule,...args); 

}
    
    );
    
    

    
    
    

    
    
        nmodule.AddClientMethod('CM',(...args)=>{
            var f=
    
        function(a,b){
            
            console.log(a,b);
        }
    
        
    f.call(nmodule,...args); 

}
    
    );
    
    

    
    {
        nmodule.AddServerMethod('SM',(clientSocket,...args)=>{
            var f=
    
        function(){
            console.log('Server Side');
            
            this.Get('CM')(clientSocket,5,2);
        }
    
        
    f.call(nmodule,...args); 

}
    
    );
}
    


        
            var nmoduleManager=window.NFramework.nmoduleManager;
            nmoduleManager.ImportModule(nmodule);
        
                
                