var JSCLPath = "D:\\nframework_gr/nlc/pages/home/home.page.nlc.client.js";module.exports=(manager)=>{
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

                    
                
                    

    
    
    var Page=require('D:\\nframework_gr\\nframework\\ncompiler\\tags/../../page/page');
    
    var page_homePage=new Page();

    page_homePage.name='homePage';

    page_homePage.Setup=function(){

    

    
    
        this.ejs_src='home.ejs';
    
    

    
    
        this.customTypeDatas=[];
    this.customTypeDatas.push('demoGlobal');
        
    
    

    
    
        this.modules=[];
    this.modules.push('home-client');
        this.modules.push('home-client-base');
        
    
    


    }
        page_homePage.Setup.call(page_homePage);
        page_homePage.manager=manager;
        page_homePage.AfterSetup();
        pages.push( page_homePage);

    
    
    
                
                
                    
                    exports.nmodules=nmodules;
                    exports.pages=pages;
                    return exports;
                }
                