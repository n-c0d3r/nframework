var fs=require('fs-extra');

var CreateNFrameworkFolder=function(target){
    if(!fs.existsSync(target+'/nframework')){
        fs.copy(__dirname+'/../', target+'/nframework', function (err) {
            if (err){
                console.log('An error occured while copying the nframework folder.')
                return console.error(err)
            }
        });
    }
}

var CreateNLCFolder=function(target){
    if(!fs.existsSync(`${target}/nlc`)){
        fs.mkdirSync(`${target}/nlc`);
    }
}

var CreateSettingFile=function(target) {
    if(!fs.existsSync(target+'/setting.json')){
        fs.copyFileSync(__dirname+'/default_app/setting.json',target+'/setting.json');
    }
}

var CreateAppFile=function(target) {
    if(!fs.existsSync(target+'/app.js')){
        fs.copyFileSync(__dirname+'/default_app/app.js',target+'/app.js');
    }
}

var CreatePackageLockFile=function(target) {
    if(!fs.existsSync(target+'/package-lock.json')){
        fs.copyFileSync(__dirname+'/default_app/package-lock.json',target+'/package-lock.json');
    }
}

var CreateViewsFolder=function(target){
    if(!fs.existsSync(`${target}/views`)){
        fs.mkdirSync(`${target}/views`);
    }
}

var CreateNodeModulesFolder=function(target) {
    if(!fs.existsSync(`${target}/node_modules`)){
        fs.copy(__dirname+'/../../node_modules', `${target}/node_modules`, function (err) {
            if (err){
                console.log('An error occured while copying the node_modules folder.')
                return console.error(err)
            }
        });
    }
}


module.exports=(input)=>{
    
    var target=input.cwd;

    console.log(`Init new project in ${target}`);

    CreateNFrameworkFolder(target);

    CreateNLCFolder(target);

    CreateSettingFile(target);

    CreateViewsFolder(target);

    CreatePackageLockFile(target);
    
    CreateAppFile(target);

    CreateNodeModulesFolder(target);
}