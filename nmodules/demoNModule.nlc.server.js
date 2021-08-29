var JSCLPath = "D:\\nframework_git_repo/nmodules/demoNModule.nlc.client.js";
                
                    

        var NModule=
        function(){

            return require("D:\\nframework_git_repo\\modules\\nframework\\ncompiler\\tags/../../nmodule/nmodule");

        }()
    
    ;
    
        var nmodule=new NModule();

        var This=nmodule;

        nmodule.side='server';

        nmodule.name='demoClientModule';
    
    

    
    
    

        
    
    nmodule.AddProperty('demoProp');
    
    
    
        
        nmodule.AddMethod('Setup',(...args)=>{
            var f=
    

            function(){

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
    


        
    
        var fs=require('fs');

        var clientVersion=JSCLPath;

        var code=fs.readFileSync(clientVersion);

        nmodule.Routing('/nmodules/demoClientModule',(req,res)=>{
            res.send(code);
        });

        

            module.exports = nmodule;
        
        
                
                