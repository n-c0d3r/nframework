var framework=window.NFramework;

var nmoduleManager=framework.nmoduleManager;

framework.IOConnectToServer(()=>{
    
});

nmoduleManager.AfterConnected();

nmoduleManager.Setup();
    
nmoduleManager.Start();