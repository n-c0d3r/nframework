const fs=require('fs');

var NModule=require('../nmodule/nmodule');

var Element=require('./element/element');

var NCompiler = class{

    constructor(){

    }

    CreateModuleFromCode(codeSV,codeCL,path){
        var fileNLCPath=path;
        var dirNLCPath='';
        var fileNLCName='';
        var fileJSNameSV='';
        var fileJSSVPath=path;

        var fileJSNameC='';
        var fileJSCPath=path;

        var endDIndex=0;
        for(var i=path.length-1;i>=0;i--){
            if(path[i]=='\\' || path[i]=='/'){
                endDIndex=i;
                break;
            }
        }

        dirNLCPath=fileNLCPath.substring(0,endDIndex);

        fileNLCName=fileNLCPath.substring(endDIndex+1,path.length);

        fileJSNameSV=fileNLCName+'.server.js';

        fileJSSVPath=dirNLCPath+'/'+fileJSNameSV;

        fileJSNameC=fileNLCName+'.client.js';

        fileJSCPath=dirNLCPath+'/'+fileJSNameC;

        fs.writeFileSync(fileJSSVPath,codeSV);

        fs.writeFileSync(fileJSCPath,codeCL);

        var cResult=new Object();

        cResult.codeSV=codeSV;

        cResult.codeCL=codeCL;

        cResult.fileNLCPath=fileNLCPath;
        cResult.dirNLCPath=dirNLCPath;
        cResult.fileNLCName=fileNLCName;
        cResult.fileJSNameSV=fileJSNameSV;
        cResult.fileJSSVPath=fileJSSVPath;
        cResult.fileJSNameC=fileJSNameC;
        cResult.fileJSCPath=fileJSCPath;

        return cResult;
    }

    GetTag(name){
        var result=require('./tags/'+name+'.js');
        result.name=name;
        return result;
    }

    GetTagsOrder(code){
        var tagsOrder=[];

        for(var i=0;i<code.length;i++){
            var ch=code[i];

            if(ch=='<'){
                var tagStart=i;
                var tagEnd=i;
                var startN=i+1;
                for(var j=i+1;j<code.length;j++){
                    var chj=code[j];

                    if(chj!='/'&&chj!=' '){
                        startN=j;
                        break;
                    }

                }
                if(code[startN]=='N'){
                    
                    if(code[startN+1]==':' && code[startN+2]!=':'){
                        
                        var endTagName=startN+1;
                        
                        for(var j=startN+2;j<code.length;j++){
                            var chj=code[j];

                            if(chj==' '||chj=='>'||chj=='/'){
                                endTagName=j-1;
                                break;
                            }

                        }

                        var tagName=code.substring(startN+2,endTagName+1);

                        var tagNameCache='';

                        for(var j=0;j<tagName.length;j++){
                            var isSTN=false;

                            if(tagName[j]=='-'){
                                isSTN=true;
                                tagNameCache+='_';
                            }

                            if(tagName[j]==':'){
                                isSTN=true;
                                tagNameCache+='/';
                            }

                            if(!isSTN)
                            tagNameCache+=tagName[j];
                        }
                        
                        tagName=tagNameCache;

                        var tag={...this.GetTag(tagName)};

                        tag.start=tagStart;

                        tagsOrder.push(tag);

                    }

                }
            }

        }

        return tagsOrder;
    }

    GetElementsFromTagsOrder(tagsOrder,code){
        var result=new Element();

        var level=0;

        var openTags=new Object();

        var currentElement=result;

        for(var i=0;i<tagsOrder.length;i++){
            if(!tagsOrder[i].isAutoClose){
                if(openTags[tagsOrder[i].name]==null){
                    level++;
                    openTags[tagsOrder[i].name]=tagsOrder[i];
                    var element=new Element();
                    element.tag=tagsOrder[i];
                    element.startContentIndex=tagsOrder[i].start;
                    currentElement.AppendChild(element);
                    currentElement=element;
                }
                else{
                    level--;
                    openTags[tagsOrder[i].name]=null;
                    currentElement.endContentIndex=tagsOrder[i].start;
                    currentElement=currentElement.parent;
                }
            }
            else{
                var element=new Element();
                element.tag=tagsOrder[i];
                element.startContentIndex=tagsOrder[i].start;
                for(var j=element.startContentIndex;j<code.length;j++){
                    if(code[j]=='>'){
                        element.endContentIndex=j;
                        break;
                    }
                }
                currentElement.AppendChild(element);
            }

            tagsOrder[i].level=level;

        }

        return result;
    }

    CompileSpecialCharaters(code){
        var result='';


        for(var i=0;i<code.length;i++){
            var isSpecialChr=false;

            var compiledChr='';

            if(code[i]=='N' && code[i+1]==':' && code[i+2]==':'){
                compiledChr='N:';
                isSpecialChr=true;
                i+=2;
            }

            if(!isSpecialChr){
                result+=code[i];
            }
            else{
                result+=compiledChr;
            }
        }

        return result;
    }

    GetElementsFromCode(code){
        var result=[];
        
        var tagsOrder=this.GetTagsOrder(code);
        
        var elements=this.GetElementsFromTagsOrder(tagsOrder,code);

        result=elements;

        return result;
    }

    CompileElement(element,codeinput){
        var code='';
        var einputCode=new Object();

        einputCode.data=codeinput;

        if(element.tag==null){
            for(var i=0;i<element.childs.length;i++){
                var ei_code = this.CompileElement(element.childs[i],codeinput);
                code+=`
                
                    ${ei_code}
                
                `;
            }
            element.code=code;
        }
        else{
            if(element.tag.isAutoClose){
                code=element.tag.Compile(element,'',einputCode);
                element.code=code;
            }
            else{
                var childsCode='';
                for(var i=0;i<element.childs.length;i++){
                    var ei_code = this.CompileElement(element.childs[i],codeinput);
                    element.childs[i].code=ei_code;
                    childsCode+=`
                    
                        ${ei_code}
                    
                    `;
                }
                code=element.tag.Compile(element,childsCode,einputCode);
                element.code=code;
            }
        }
        return code;
    }

    SetSideForElements(elements,forSV){

        elements.forSV=forSV;

        for(var i=0;i<elements.childs.length;i++){
            elements.childs[i]=this.SetSideForElements(elements.childs[i],forSV);
        }

        return elements;
    }

    RemoveComments(code){
        var result='';
        for(var i=0;i<code.length;i++){
            if(code[i]=='/'&code[i+1]=='*'){
                for(var j=i+1;j<code.length;j++){
                    if(code[j-1]=='*'&&code[j]=='/'){
                        i=j+1;
                        break;
                    }
                }
            }

            if(code[i]=='/'&code[i+1]=='/'){
                for(var j=i+1;j<code.length;j++){
                    if(code[j]=='\r'||code[j]=='\n'){
                        i=j+1;
                        break;
                    }
                }
            }

            if(i>=code.length){
                break;
            }

            result+=code[i];
        }
        return result;
    }

    CompileCode(code,forSV){
        var result=code;

        var removedCommentsCode=this.RemoveComments(code);

        var elements=this.GetElementsFromCode(removedCommentsCode);

        elements=this.SetSideForElements(elements,forSV);

        var compiledElement=this.CompileElement(elements,removedCommentsCode);
        
        var compiledSpecialCharactersCode=this.CompileSpecialCharaters(compiledElement);


        result=compiledSpecialCharactersCode;

        return result;
    }

    CompileFile(path){

        var code=fs.readFileSync(path).toString();

        var compiledCodeSV=this.CompileCode(code,true);

        var compiledCodeCL=this.CompileCode(code,false);

        var cResult = this.CreateModuleFromCode(compiledCodeSV,compiledCodeCL,path);

        return cResult;
    }

}

module.exports=NCompiler;