#!/usr/bin/env node

let args = [];

for (let i = 2; i < process.argv.length; i++)
    args.push(process.argv[i]);

let inputArgs = [];

let dow = new Object();

for (let i = 0; i < args.length; i++) {
    if (args[i][0] + args[i][1] == '--') {
        dow[args[i].substring(2, args[i].length)] = true;
    } else {
        inputArgs.push(args[i]);
    }
}

let cwd = process.cwd();

let input = {
    cwd: cwd,
    dow: dow,
    args: inputArgs
}

if (dow['compile'])     require('./nlc-compile')(input);
else if (dow['init'])   require('./nlc-init')(input);
else if (dow['run'])    require('./nlc-run')(input);
