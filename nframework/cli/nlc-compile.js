let compiler = new(require(__dirname + '/../ncompiler/ncompiler'))();

compiler.NFramework = new Object();

module.exports = (input) => {
    let path = input.args[0];

    if (input.args[0][0] == '.')
        path = input.cwd + '' + input.args[0].substring(1, input.args[0].length);

    let cr = compiler.CompileFile(path);

    console.log(`Compiled ${path}`);
}
