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

            var result_6cf7a076_a05d_41ea_a4c7_642e2be86687=document.createElement('div');
            
            
        var attributes_6cf7a076_a05d_41ea_a4c7_642e2be86687=[];
    
            attributes_6cf7a076_a05d_41ea_a4c7_642e2be86687.push({
                key:'id',
                value:(()=>{return id="div1"})()
            });
        
        for(var attribue of attributes_6cf7a076_a05d_41ea_a4c7_642e2be86687){
            result_6cf7a076_a05d_41ea_a4c7_642e2be86687.setAttribute(attribue.key,attribue.value);
        }
    

            result_6cf7a076_a05d_41ea_a4c7_642e2be86687.textContent+=manager.GetTextContent('7b90b44f-d3d7-471b-85e5-acb96db082b7');
            result_6cf7a076_a05d_41ea_a4c7_642e2be86687.textContent+=manager.GetTextContent('c0a8e01d-0ab2-45a6-90bd-f2474246150c');
            

            
                result_6cf7a076_a05d_41ea_a4c7_642e2be86687.appendChild(

        (()=>{

            var result_c2029ede_5c05_4c4a_9f66_312f49115545=document.createElement('a');
            
            
        var attributes_c2029ede_5c05_4c4a_9f66_312f49115545=[];
    
            attributes_c2029ede_5c05_4c4a_9f66_312f49115545.push({
                key:'href',
                value:(()=>{return href="https://youtube.com"})()
            });
        
        for(var attribue of attributes_c2029ede_5c05_4c4a_9f66_312f49115545){
            result_c2029ede_5c05_4c4a_9f66_312f49115545.setAttribute(attribue.key,attribue.value);
        }
    

            result_c2029ede_5c05_4c4a_9f66_312f49115545.textContent+=manager.GetTextContent('e1eabd01-5eec-4a4d-974f-81ec62747a9b');
            

            
            
            return result_c2029ede_5c05_4c4a_9f66_312f49115545;

        })()
            

    );
                
            
            return result_6cf7a076_a05d_41ea_a4c7_642e2be86687;

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
        
                
                
                