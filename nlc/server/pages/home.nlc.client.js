
                
                    
            (()=>{
                

        var NModule=
            function(){

                return window.NFramework.NModule;

            }()

        ;
    
        var nmodule=new NModule();

        var This=nmodule;

        nmodule.side='both';

        nmodule.name='homeRouter';
    
    

    
        

        path='/home'

        callback=(req,res)=>{
            

        ((req,res)=>{
            var framework=nmodule.manager.NFramework;
            var modules=nmodule.manager.pages['homePage'].modules;

            var miejs='';

            var frameworkCLEJS=framework.clejs;

            miejs+=frameworkCLEJS;

            for(var i=0;i<modules.length;i++){
                var module=modules[i];
                miejs+=' <script  src="/nmodules/'+module+'"></script>';
            }
            

            miejs+="<script src='/appcl'></script>";

            res.render( nmodule.manager.pages['homePage'].ejs_src,{
                NFramework:miejs
            });
        })(req,res);
    
    
        }

    
    


        
            var nmoduleManager=window.NFramework.nmoduleManager;
            nmoduleManager.ImportModule(nmodule);
        
            })();
        
                
                