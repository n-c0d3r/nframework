var NCompiler=require('../ncompiler');

compiler=new NCompiler();

compiler.NFramework=new Object();



var args=[];

for(var i=2;i<process.argv.length;i++){
    args.push(process.argv[i]);
}

var path=args[0];

if(args[0][0]=='.'){
    path=__dirname+''+args[0].substring(1,args[0].length);
}

var cr = compiler.CompileFile(path);

console.log(`Compiled ${path}`);

