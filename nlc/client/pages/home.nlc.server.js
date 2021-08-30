var JSCLPath = "D:\\nframework_gr/nlc/client/pages/home.nlc.client.js";
                    var nmodules=[];
                    var pages=[];
                    
                
                    

    
    
    var Page=require('D:\\nframework_gr\\modules\\nframework\\ncompiler\\tags/../../page/page');
    
    var page_homePage=new Page();

    page_homePage.name='homePage';

    page_homePage.Setup=function(){

    

    
    
        this.ejs_src='home.ejs';
    
    

    
    
        this.modules=[];
    this.modules.push('home');
        
    
    


    }
        page_homePage.Setup.call(page_homePage);
        pages.push( page_homePage);

    
    
    
                
                
                
                    

        var NModule=
        function(){

            return require("D:\\nframework_gr\\modules\\nframework\\ncompiler\\tags/../../nmodule/nmodule");

        }()
    
    ;
    
        var nmodule=new NModule();

        var This=nmodule;

        nmodule.side='both';

        nmodule.name='home';
    
    

    
        nmodule.AddMethod('Setup',(...args)=>{
            var f=
    

        function() {
            
        }

    
        
    f.call(nmodule,...args); 

}
    
    );
    
    


        
    
        var fs=require('fs');

        var clientVersion=JSCLPath;

        var code=fs.readFileSync(clientVersion);
        
        if(nmodule.side!='server'){
            nmodule.Routing('/nmodules/home',(req,res)=>{
                res.send(code);
            });
        }

        

            nmodules.push(nmodule);
        
        
                
                
                    var exports=new Object();
                    exports.nmodules=nmodules;
                    exports.pages=pages;
                    module.exports=exports;
                