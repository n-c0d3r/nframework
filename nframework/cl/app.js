let framework = window.NFramework;
let nmoduleManager = framework.nmoduleManager;

framework.IOConnectToServer(() => {
    // Code
});

(async () => {

    await nmoduleManager.GetDatasFromServer();

    nmoduleManager.AutoSetParentForModules();

    nmoduleManager.AfterConnected();

    nmoduleManager.Setup();

    nmoduleManager.Start();

})()
