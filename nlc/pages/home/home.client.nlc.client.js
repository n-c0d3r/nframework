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
                
                
                
                

                document.body.appendChild(
                    

        

        (()=>{

            var result_ffe72717_dc95_4e4b_acea_ea839943c285=document.createElement('div');
            
            
        var attributes_ffe72717_dc95_4e4b_acea_ea839943c285=[];
    
            attributes_ffe72717_dc95_4e4b_acea_ea839943c285.push({
                key:'id',
                value:(()=>{return id="div1"})()
            });
        
        for(var attribue of attributes_ffe72717_dc95_4e4b_acea_ea839943c285){
            result_ffe72717_dc95_4e4b_acea_ea839943c285.setAttribute(attribue.key,attribue.value);
        }
    

            result_ffe72717_dc95_4e4b_acea_ea839943c285.textContent+=manager.GetTextContent('881ddf35-7010-4452-8173-4bc78f8442ba');
            result_ffe72717_dc95_4e4b_acea_ea839943c285.textContent+=manager.GetTextContent('420688e5-1737-4043-94f3-27cd53990b3a');
            result_ffe72717_dc95_4e4b_acea_ea839943c285.textContent+=manager.GetTextContent('76b33caf-ddf8-42c0-b74c-cc107497271c');
            

            
            result_ffe72717_dc95_4e4b_acea_ea839943c285.appendChild(

        

        (()=>{

            var result_8cd9023d_bc20_40f4_8e6b_8453131c751e=document.createElement('div');
            
            
        var attributes_8cd9023d_bc20_40f4_8e6b_8453131c751e=[];
    
            attributes_8cd9023d_bc20_40f4_8e6b_8453131c751e.push({
                key:'id',
                value:(()=>{return id="div2"})()
            });
        
        for(var attribue of attributes_8cd9023d_bc20_40f4_8e6b_8453131c751e){
            result_8cd9023d_bc20_40f4_8e6b_8453131c751e.setAttribute(attribue.key,attribue.value);
        }
    

            result_8cd9023d_bc20_40f4_8e6b_8453131c751e.textContent+=manager.GetTextContent('c54c4bc8-e094-4535-b695-e4d8235434f7');
            

            
            
            return result_8cd9023d_bc20_40f4_8e6b_8453131c751e;

        })()
            

    );
            
            result_ffe72717_dc95_4e4b_acea_ea839943c285.appendChild(

        

        (()=>{

            var input_3df83639_36cf_4e28_b8e9_f906e5fc2fea=document.createElement('input');
            
            
        var attributes_3df83639_36cf_4e28_b8e9_f906e5fc2fea=[];
    
            attributes_3df83639_36cf_4e28_b8e9_f906e5fc2fea.push({
                key:'type',
                value:(()=>{return type="text"})()
            });
        
        for(let attribue of attributes_3df83639_36cf_4e28_b8e9_f906e5fc2fea){
            input_3df83639_36cf_4e28_b8e9_f906e5fc2fea.setAttribute(attribue.key,attribue.value);
        }
    

            
            
            return input_3df83639_36cf_4e28_b8e9_f906e5fc2fea;

        })()
            

    );
            
            
            return result_ffe72717_dc95_4e4b_acea_ea839943c285;

        })()
            

    
                );

                

                


            }

        
                var f2=f.bind(this);
                return await f2(...args);
            }
    
        );
    
    

    


        });
    
        
            var nmoduleManager=window.NFramework.nmoduleManager;
            nmoduleManager.ImportModule(nmodule);
        
            })();
        
                
                
                