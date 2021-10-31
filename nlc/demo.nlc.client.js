manager = window.NFramework.nmoduleManager;


                    
            (()=>{
                

        let NModule=
            function(){

                return window.NFramework.NModule;

            }()

        ;

        let nmodule=new NModule();

        let This=nmodule;

        nmodule.side='both';

        nmodule.name='demo';

        nmodule.__TYPE='NMODULE';

        nmodule.RunExternalMethod=function(callback){
            callback.call(nmodule);
        }


        nmodule.RunExternalMethod(function(){
    

    
        this.AddMethod('setup',(...args) => {
            let f=
    

        function(){
            console.log('running');
        }


    

    return f.call(this,...args);

}

    );

    


        });
    

            let nmoduleManager=window.NFramework.nmoduleManager;
            nmoduleManager.ImportModule(nmodule);
        
            })();
        

                