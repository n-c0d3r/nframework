manager=window.NFramework.nmoduleManager;
                
                
                    
                
                
                
                    
                
                
                
                    
            (()=>{
                

        var NModule=
            function(){

                return window.NFramework.NModule;

            }()

        ;
    
        var nmodule=new NModule();

        var This=nmodule;

        nmodule.side='both';

        nmodule.name='home-client';

        nmodule.__TYPE='NMODULE';

        nmodule.RunExternalMethod=function(callback){
            callback.call(nmodule);
        }


        nmodule.RunExternalMethod(function(){
    

    
    
        this.baseModules = ['home-client-base'];
    
    

    

        
        this.AddMethod('setup',async (...args)=>{
                var f=async function() {

                

            }

        
                var f2=f.bind(this);
                return await f2(...args);
            }
    
        );
    
    

        
        this.AddMethod('start',async (...args)=>{
                var f=async function() {

                var div1  = 
                    

        (()=>{

            var result_de8daa9b_d1b0_477c_a931_6da501dc0695=document.createElement('div');
            
            
        var attributes_de8daa9b_d1b0_477c_a931_6da501dc0695=[];
    
            attributes_de8daa9b_d1b0_477c_a931_6da501dc0695.push({
                key:'id',
                value:(()=>{return id="div1"})()
            });
        
        for(var attribue of attributes_de8daa9b_d1b0_477c_a931_6da501dc0695){
            result_de8daa9b_d1b0_477c_a931_6da501dc0695.setAttribute(attribue.key,attribue.value);
        }
    

            result_de8daa9b_d1b0_477c_a931_6da501dc0695.textContent+=manager.GetTextContent('bdfd5881-581e-443b-95ce-0ca2dc87d9bb');
            result_de8daa9b_d1b0_477c_a931_6da501dc0695.textContent+=manager.GetTextContent('b6e69ad9-e5f2-4432-b854-d0624d414a39');
            

            
                result_de8daa9b_d1b0_477c_a931_6da501dc0695.appendChild(

        (()=>{

            var result_677721f1_5bbe_4c48_ac81_728162e5fbd9=document.createElement('a');
            
            
        var attributes_677721f1_5bbe_4c48_ac81_728162e5fbd9=[];
    
            attributes_677721f1_5bbe_4c48_ac81_728162e5fbd9.push({
                key:'href',
                value:(()=>{return href="https://youtube.com"})()
            });
        
        for(var attribue of attributes_677721f1_5bbe_4c48_ac81_728162e5fbd9){
            result_677721f1_5bbe_4c48_ac81_728162e5fbd9.setAttribute(attribue.key,attribue.value);
        }
    

            result_677721f1_5bbe_4c48_ac81_728162e5fbd9.textContent+=manager.GetTextContent('07fb3c08-08fd-472a-ab82-6c574f51371e');
            

            
            
            return result_677721f1_5bbe_4c48_ac81_728162e5fbd9;

        })()
            

    );
                
            
            return result_de8daa9b_d1b0_477c_a931_6da501dc0695;

        })()
            

    ;

                (manager.Get('dom')).GetThisWithCallback((module)=>{
                            return module.Get('body');
                        }).appendChild(
                    div1
                );



                var style1=
                    
    (()=>{
        var styleE = document.createElement('style');

        styleE.textContent = `
                        body{
                            background-color:blue;
                        }
                    `;

        document.body.appendChild(styleE);

        return styleE;
    })()
    ;

                div1.appendChild(style1);

            }

        
                var f2=f.bind(this);
                return await f2(...args);
            }
    
        );
    
    

    


        });
    
        
            var nmoduleManager=window.NFramework.nmoduleManager;
            nmoduleManager.ImportModule(nmodule);
        
            })();
        
                
                
                