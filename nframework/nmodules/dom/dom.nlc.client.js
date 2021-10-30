var a49920e54_8f8f_4961_9b94_3edc8c8e7d4a_module;

manager = window.NFramework.nmoduleManager;

(function() {
    const NModule = function() {
        return window.NFramework.NModule;
    }();

    let nmodule = new NModule();

    var This = nmodule;

    nmodule.side = 'both';
    nmodule.name = 'dom';
    nmodule.__TYPE = 'NMODULE';

    nmodule.RunExternalMethod = (callback) => callback.call(nmodule);

    nmodule.RunExternalMethod(function() {
        this.AddProperty('body');

        this.AddMethod('setup', (...args) => {
            let f = () => {
                this.GetThisWithCallback((module) => a49920e54_8f8f_4961_9b94_3edc8c8e7d4a_module = module);
                let getterObj49920e54_8f8f_4961_9b94_3edc8c8e7d4a = {
                    set stter(value) {
                        a49920e54_8f8f_4961_9b94_3edc8c8e7d4a_module.Set('body', value);
                    }
                };
                getterObj49920e54_8f8f_4961_9b94_3edc8c8e7d4a.stter = document.body;
            }
            return f.call(this, ...args);
        });

        this.AddMethod('getElementById', (...args) => {
            let f = function(pr0) {
                return document.getElementById(pr0);
            }
            return f.call(this, ...args);
        });

        this.AddMethod('getElementsByName', (...args) => {
            let f = function(pr0) {
                return document.getElementsByName(pr0);
            }
            return f.call(this, ...args);
        });

        this.AddMethod('getElementsByClassName', (...args) => {
            let f = function(pr0) {
                return document.getElementsByClassName(pr0);
            }
            return f.call(this, ...args);
        });

        this.AddMethod('getElementsByTagName', (...args) => {
            let f = function(pr0) {
                return document.getElementsByTagName(pr0);
            }
            return f.call(this, ...args);
        });

        this.AddMethod('querySelector', (...args) => {
            let f = function(pr0) {
                return document.querySelector(pr0);
            }
            return f.call(this, ...args);
        });

        this.AddMethod('querySelectorAll', (...args) => {
            let f = function(pr0) {
                return document.querySelectorAll(pr0);
            }
            return f.call(this, ...args);
        });
    });


    var nmoduleManager = window.NFramework.nmoduleManager;
    nmoduleManager.ImportModule(nmodule);

})();
