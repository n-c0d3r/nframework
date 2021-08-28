const NModule = require("../../nmodule/nmodule");

var global_nmodule=new NModule();

global_nmodule.isGlobal=true;

global_nmodule.name='global';

global_nmodule.baseModules=[];

return global_nmodule;