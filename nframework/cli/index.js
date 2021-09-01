#!/usr/bin/env node


var args=[];

for(var i=2;i<process.argv.length;i++){
    args.push(process.argv[i]);
}

var inputArgs=[];

var dow=new Object();

for(var i=0;i<args.length;i++){
    if(args[i][0]+args[i][1]=='--'){
        dow[args[i].substring(2,args[i].length)]=true;
    }
    else{
        inputArgs.push(args[i]);
    }
}

var cwd=process.cwd();

var input={
    cwd:cwd,
    dow:dow,
    args:inputArgs
}

if(dow['compile']==true){
    require('./nlc-compile')(input);
}
else if(dow['init']==true){
    require('./nlc-init')(input);
}
else if(dow['run']==true){
    require('./nlc-run')(input);
}