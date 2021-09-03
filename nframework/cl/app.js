var framework=window.NFramework;

var nmoduleManager=framework.nmoduleManager;

framework.IOConnectToServer(()=>{
    
});

(async ()=>{

    await nmoduleManager.GetDatasFromServer();

    nmoduleManager.AutoSetParentForModules();
    
    nmoduleManager.AfterConnected();
    
    nmoduleManager.Setup();
        
    nmoduleManager.Start();

})()
