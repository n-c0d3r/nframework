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

            var result_cd4de762_fb6e_4970_b90f_4c054e1b7392=document.createElement('div');
            
            
        var attributes_cd4de762_fb6e_4970_b90f_4c054e1b7392=[];
    
            var acd4de762_fb6e_4970_b90f_4c054e1b7392id=true;
            attributes_cd4de762_fb6e_4970_b90f_4c054e1b7392.push({
                key:'id',
                value:(()=>{return acd4de762_fb6e_4970_b90f_4c054e1b7392id="div1"})()
            });
        
        for(var attribue of attributes_cd4de762_fb6e_4970_b90f_4c054e1b7392){
            result_cd4de762_fb6e_4970_b90f_4c054e1b7392.setAttribute(attribue.key,attribue.value);
        }
    

            result_cd4de762_fb6e_4970_b90f_4c054e1b7392.textContent+=manager.GetTextContent('4243f153-8f6f-4b2b-b88a-fcdb0b3b480c');
            result_cd4de762_fb6e_4970_b90f_4c054e1b7392.textContent+=manager.GetTextContent('659d5c0b-be92-439c-9a5c-a6ab4bcd19d5');
            

            
                result_cd4de762_fb6e_4970_b90f_4c054e1b7392.appendChild(

        (()=>{

            var result_f8aabf5b_6b6b_4da3_b165_1253b74e0bd3=document.createElement('a');
            
            
        var attributes_f8aabf5b_6b6b_4da3_b165_1253b74e0bd3=[];
    
            var af8aabf5b_6b6b_4da3_b165_1253b74e0bd3href=true;
            attributes_f8aabf5b_6b6b_4da3_b165_1253b74e0bd3.push({
                key:'href',
                value:(()=>{return af8aabf5b_6b6b_4da3_b165_1253b74e0bd3href="https://youtube.com"})()
            });
        
        for(var attribue of attributes_f8aabf5b_6b6b_4da3_b165_1253b74e0bd3){
            result_f8aabf5b_6b6b_4da3_b165_1253b74e0bd3.setAttribute(attribue.key,attribue.value);
        }
    

            result_f8aabf5b_6b6b_4da3_b165_1253b74e0bd3.textContent+=manager.GetTextContent('e0fd6d89-dabd-4a3c-b0e7-8bbc3915e33e');
            

            
            
            return result_f8aabf5b_6b6b_4da3_b165_1253b74e0bd3;

        })()
            

    );
                
            
            return result_cd4de762_fb6e_4970_b90f_4c054e1b7392;

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
                            background-color:white;
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
        
                
                
                