var JSCLPath = "/Users/macos/Documents/NCoder/nframework/nlc/demo.page.nlc.client.js";module.exports=(manager)=>{
            var exports=new Object();
                var nmodules=[];
                var pages=[];
                exports.customTypeDatas=[];
                exports.customTypeDatas.Add=function(key,value){
                    exports.customTypeDatas.push({
                        'key':key,
                        'value':value
                    });
                }

                

                    

    
    
    var Page=require('/Users/macos/Documents/NCoder/nframework/nframework/ncompiler/tags/../../page/page');
    
    var page_demoPage=new Page();
    
    page_demoPage.customTypeDatas=[];

    page_demoPage.useAllGlobalObjects=false;

    page_demoPage.name='demoPage';

    page_demoPage.__TYPE='PAGE';
    
    page_demoPage.modules=[];

    page_demoPage.Setup=function(){

    

    

        this.src='demo.ejs';

    
    
    
            this.useAllGlobalObjects=true;
        

    
    
        
    this.modules.push('dom');
        
    
    

    
    
        
    this.modules.push('demo');
        
    
    


    }
        page_demoPage.Setup.call(page_demoPage);
        page_demoPage.manager=manager;
        page_demoPage.AfterSetup();
        pages.push( page_demoPage);

    
    
    

                

                exports.nmodules=nmodules;
                exports.pages=pages;
                return exports;
            }
            