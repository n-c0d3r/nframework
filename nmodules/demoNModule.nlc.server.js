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
    
    

    
    
    nmodule.AddSyncProperty('syncProp');
    
    

    
    
    
    
        
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
    
    

    

    {
        nmodule.AddServerMethod('LogSyncProp',(clientSocket,...args)=>{
            var f=
    
        function() {
            console.log(this.Get('syncProp'));
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
        
        
                
                