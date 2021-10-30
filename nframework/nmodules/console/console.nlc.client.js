manager = window.NFramework.nmoduleManager;

(function() {
    const NModule = () => {
        return window.NFramework.NModule;
    }();

    var nmodule = new NModule();
    var This = nmodule;

    nmodule.side = 'both';

    nmodule.name = 'console';

    nmodule.__TYPE = 'NMODULE';

    nmodule.RunExternalMethod = (callback) => callback.call(nmodule);

    nmodule.RunExternalMethod(function() {
        // Code
    });


    var nmoduleManager = window.NFramework.nmoduleManager;
    nmoduleManager.ImportModule(nmodule);
})();
