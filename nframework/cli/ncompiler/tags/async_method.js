var Tag=require('../tag/tag');

var tag=new Tag();

tag.isAutoClose=false;

tag.Compile=function(element,childsCode,code){
    
    var contents=tag.GetContent(element,childsCode,code);
    
    var inputs=tag.GetInputs(element,childsCode,code);

    var codeFunc='';
    for(var i=0;i<contents.length;i++){
        codeFunc+=contents[i].code;
    }
    
    var compiledCodeFunc='';

    var start=0;
    for(;start<codeFunc.length;start++){
        if(codeFunc[start]=='f'){
            start;
            break;
        }
    }

    for(var i=start;i<codeFunc.length;i++){
        var strChar='';

        if(codeFunc[i]=='"' || codeFunc[i]=='`' || codeFunc[i]==`"`){
            strChar=codeFunc[i];
            compiledCodeFunc+=strChar;
            i++;
            for(;i<codeFunc.length;i++){
                if(codeFunc[i]=='"' || codeFunc[i]=='`' || codeFunc[i]==`"`){
                    break;
                }
                compiledCodeFunc+=codeFunc[i];
            }
            compiledCodeFunc+=strChar;
        }
        else{
            /*
            if(codeFunc[i]+codeFunc[i+1]+codeFunc[i+2]+codeFunc[i+3]=='this'){
                i=i+3;
                compiledCodeFunc+='nmodule';
            }
            else*/{
                compiledCodeFunc+=codeFunc[i];
            }
        }

        if(i>=codeFunc.length){
            break;
        }


    }

    compiledCodeFunc='async '+compiledCodeFunc;

    var compiledCode=`
        nmodule.AddMethod('${inputs[0]}',(...args)=>{
                var f=${compiledCodeFunc}
                f.call(nmodule);
            }
    
        );
    
    `;

    return compiledCode;
}

module.exports=tag;