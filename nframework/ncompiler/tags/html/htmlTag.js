var htmlImport=require('./import');

var Tag=require('../../tag/tag');

var tag=new Tag();

tag.isAutoClose=false;

const { v4: uuidv4 } = require('uuid');

tag.Compile=function(element,childsCode,code,manager){
    var contents=tag.GetContent(element,childsCode,code);
    
    var inputs=tag.GetInputs(element,childsCode,code);

    var rfid = uuidv4();

    var rfid2='';

    for(var i=0;i<rfid.length;i++){
        if(rfid[i]!='-'){
            rfid2+=rfid[i];
        }
        else
        rfid2+='_'
    }

    rfid=rfid2;

    var childs=``;

    for(var i=0;i<contents.length;i++){
        if(contents[i].type=='childCode'){
            childs+=`
            result_${rfid}.appendChild(${contents[i].code});
            `;
        }
    }

    var attributes=`
        var attributes_${rfid}=[];
    `;

    var regex=/^[a-zA-Z]+$/;
    var regex2=/^[0-9]+$/;

    for(var i=0;i<inputs.length;i++){
        var atbName='';
        var isStart=false;
        for(var j=0;j<inputs[i].length;j++){
            if(!isStart && (inputs[i][j].match(regex) || inputs[i][j].match(regex2) || inputs[i][j]=='-' || inputs[i][j]=='_')){
                isStart=true;
            }
            if(isStart && !(inputs[i][j].match(regex) || inputs[i][j].match(regex2) || inputs[i][j]=='-' || inputs[i][j]=='_')){
                isStart=false;
                break;
            }
            if(isStart){
                atbName+=inputs[i][j];
            }
        }
        attributes+=`
            attributes_${rfid}.push({
                key:'${atbName}',
                value:(()=>{return ${inputs[i]}})()
            });
        `;
    }

    attributes+=`
        for(var attribue of attributes_${rfid}){
            result_${rfid}.setAttribute(attribue.key,attribue.value);
        }
    `;

    var textContent=``;//result.textContent+=



    for(var i=0;i<contents.length;i++){
        if(contents[i].type=='textContent'){
            var fid = uuidv4();
            manager.textContents[fid]=contents[i].code;
            textContent+=`result_${rfid}.textContent+=manager.GetTextContent('${fid}');
            `;
        }
    }


    var compiledCode=`

        ${htmlImport}

        (()=>{

            var result_${rfid}=document.createElement('${this.htmlTagName}');
            
            ${attributes}

            ${textContent}

            ${childs}
            
            return result_${rfid};

        })()
            

    `;

    return compiledCode;
}

module.exports=tag;