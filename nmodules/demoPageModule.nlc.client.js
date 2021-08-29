
                
                    

    
    
    
                
                
                
                    

        var NModule=
            function(){

                return window.NFramework.NModule;

            }()

        ;
    
        var nmodule=new NModule();

        var This=nmodule;

        nmodule.side='client';

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

    
    


        
            var nmoduleManager=window.NFramework.nmoduleManager;
            nmoduleManager.ImportModule(nmodule);
        
                
                