var framework=window.NFramework;

var nmoduleManager=framework.nmoduleManager;

framework.IOConnectToServer(()=>{
    
});

nmoduleManager.AutoSetParentForModules();

nmoduleManager.AfterConnected();

nmoduleManager.Setup();
    
nmoduleManager.Start();