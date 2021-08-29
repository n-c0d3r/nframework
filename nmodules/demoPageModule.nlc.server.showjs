var JSCLPath = "D:\\nframework_git_repo/nmodules/demoPageModule.nlc.client.js";
                
                    

    
    
    var Page=require('D:\\nframework_git_repo\\modules\\nframework\\ncompiler\\tags/../../page/page');
    
    var page_demoPage=new Page();

    page_demoPage.Setup=function(){

    

    
    
        this.ejs_src='demo.ejs';
    
    

    
    
        this.modules=[];
    this.modules.push('demoClientModule');
        
    
    


    }
        page_demoPage.Setup.call(page_demoPage);

    
    
    
                
                
                
                    

        var NModule=
        function(){

            return require("D:\\nframework_git_repo\\modules\\nframework\\ncompiler\\tags/../../nmodule/nmodule");

        }()
    
    ;
    
        var nmodule=new NModule();

        var This=nmodule;

        nmodule.side='server';

        nmodule.name='demoPageModule';
    
    

    {
        nmodule.AddServerMethod('demoCrossSideMethod',(clientSocket,...args)=>{
            var f=
    

        function(){
            
        }

    
        
    f.call(nmodule,...args); 

}
    
    );
}
    
    

    
        
        {
            path='';
            callback=()=>{};
            

        path='/page/:name'

        callback=(req,res)=>{
            
            

        ((req,res)=>{
            var framework=nmodule.manager.NFramework;
            var modules=page_demoPage.modules;

            var miejs='';

            var frameworkCLEJS=framework.clejs;

            miejs+=frameworkCLEJS;

            for(var i=0;i<modules.length;i++){
                var module=modules[i];
                miejs+=' <script  src="/nmodules/'+module+'"></script>';
            }
            

            miejs+="<script src='/appcl'></script>";

            res.render( page_demoPage.ejs_src,{
                NFramework:miejs
            });
        })(req,res);
    
    

        }

    
            nmodule.Routing(path,callback);
        }
    
    
    


        
    
        var fs=require('fs');

        var clientVersion=JSCLPath;

        var code=fs.readFileSync(clientVersion);

        nmodule.Routing('/nmodules/demoPageModule',(req,res)=>{
            res.send(code);
        });

        

            module.exports = nmodule;
        
        
                
                