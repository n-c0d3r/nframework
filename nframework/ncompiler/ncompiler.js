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

        var prs_fileJSCPath='';

        for(var i=0;i<fileJSCPath.length;i++){
            if(fileJSCPath[i]=='\\'){
                prs_fileJSCPath+='\\';
            }
            prs_fileJSCPath+=fileJSCPath[i];
        }

        codeSV='var JSCLPath = "' + prs_fileJSCPath +'";' + codeSV;

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
        var result=null;

        if(name!=''){
            result = require('./tags/'+name+'.js');
        }
        else{
            result = require('./tags/region.js');
        }
        result.name=name;
        return result;
    }

    IsStartTag(index,code){
        var result=true;
        for(var i=index+1;i<code.length;i++){
            var ch=code[i];
            if(ch=='|'){
                result=false;
                break;
            }
            else
            if(ch=='>'||ch=='/'){
                break;
            }
        }
        return result;
    }

    GetTagNameFromString(code){
        var input=code;
        var inputr='';
        var regex=/^[a-zA-Z]+$/;
        var j=0;
        var start=0;
        var end=0;
        for(;j<input.length;j++){
            if(input[j]!=' '){
                start=j;
                break;
            }
        }
        for(j=input.length-1;j>=start;j--){
            if(input[j]!=' ' && input[j]!='\n' && input[j]!='\r'){
                end=j;
                break;
            }
        }
        inputr=input.substring(start,end+1);
        return inputr;
    }

    GetTagsOrder(code){
        var tagsOrder=[];

        for(var i=0;i<code.length;i++){
            var ch=code[i];

            var strch='';

            if(code[i]=='"' || code[i]=="'" || code[i]=='`'){
                strch=code[i];

                i++;

                for(;i<code.length;i++){
                    if(code[i]=='"' || code[i]=="'" || code[i]=='`'){
                        break;
                    }
                }

                if(i>=code.length){
                    break;
                }
    
            }

            if(ch=='<' && this.IsStartTag(i,code)){
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
                if(true){//code[startN]=='N'){
                    
                    if(true){//code[startN+1]==':' && code[startN+2]!=':'){
                        
                        var endTagName=startN+1;
                        
                        for(var j=startN+1;j<code.length;j++){
                            var chj=code[j];

                            /*
                            if(chj=='"' || chj=="'" || chj=='`'){
                                var strChr=chj;
                                j++;
                                for(;j<code.length;j++){
                                    if(j+1!=strChr){
                                        break;
                                    }
                                }
                            }*/

                            if(chj==' '||chj=='>'||chj=='/'){
                                endTagName=j-1;
                                break;
                            }

                        }

                        var tagName=code.substring(startN,endTagName+1);

                        tagName=this.GetTagNameFromString(tagName);


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
                    element.NFramework=this.NFramework;
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
                element.NFramework=this.NFramework;
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
/*
            if(code[i]=='N' && code[i+1]==':' && code[i+2]==':'){
                compiledChr='N:';
                isSpecialChr=true;
                i+=2;
            }

            if(!isSpecialChr){
            */    
           result+=code[i];
            /*}
            else{
                result+=compiledChr;
            }*/
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
            if(element.forSV){
                code=`module.exports=(manager)=>{
                var exports=new Object();
                    var nmodules=[];
                    var pages=[];

                    ${code}
                    
                    exports.nmodules=nmodules;
                    exports.pages=pages;
                    return exports;
                }
                `;
            }
            else{
                code=`manager=window.NFramework.nmoduleManager;
                ${code}
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

    CompileFastGetNModule(code){
        var result='';        
        
        var isInStr=false;

        var strC='';

        var isVarInTemplateLiterals=false;

        for(var i=0;i<code.length;i++){

            if(code[i]+code[i+1]=='////'){
                for(;i<code.length;i++){
                    if(code[i]=='\r' || code[i]=='\n'){
                        break;
                    }
                }
            }
            else if(code[i]+code[i+1]=='//*'){
                i+=2;
                for(;i<code.length;i++){
                    if(code[i]=='*' || code[i+1]=='//'){
                        break;
                    }
                }
            }
            else{
                if(!isInStr){
                    if(code[i]=='"' || code[i]=="'"){
                
                        isInStr=true;
                        strC=code[i];
                        
                    }
                    else
                    if(code[i]=='`'){
        
                        isInStr=true;    
                        strC=code[i];                
                        isVarInTemplateLiterals=false;
    
                    }
                }else{
                    if(code[i]=='"' || code[i]=="'"){
                
                        isInStr=false;
                        
                    }
                    else
                    if(code[i]=='`'){
                        isInStr=false;
                    }
                }


                if(!isInStr && code[i]=='@'){
                    i++;
                    var startName=i;
                    var endName=i;
                    var regex=/^[a-zA-Z]+$/;
    
                    for(;i<code.length;i++){ 
                        if(!(code[i].match(regex) || code[i]=='_'  || code[i]=='-')){
                            endName=i;
                            break;
                        }
                    }

                    var name=code.substring(startName,endName);
                    
                    result+=`manager.GetModule('${name}')`;

                    i--;
                }
                else{
                    result+=code[i];
                }
    
            }
        }

        return result;
    }

    CompileNModuleFastGetterAndSetter(code){
        var result='';
        var top='';

        var strC=code[i];

        var isInStr=false;

        var isVarInTemplateLiterals=false;

        for(var i=0;i<code.length;i++){

            if(code[i]+code[i+1]=='////'){
                for(;i<code.length;i++){
                    if(code[i]=='\r' || code[i]=='\n'){
                        break;
                    }
                }
            }
            else if(code[i]+code[i+1]=='//*'){
                i+=2;
                for(;i<code.length;i++){
                    if(code[i]=='*' || code[i+1]=='//'){
                        break;
                    }
                }
            }
            else{
                if(!isInStr){
                    if(code[i]=='"' || code[i]=="'"){
                
                        isInStr=true;
                        strC=code[i];
                        
                    }
                    else
                    if(code[i]=='`'){
        
                        isInStr=true;    
                        strC=code[i];                
                        isVarInTemplateLiterals=false;
    
                    }
                }else{
                    if(code[i]=='"' || code[i]=="'"){
                
                        isInStr=false;
                        
                    }
                    else
                    if(code[i]=='`'){
                        isInStr=false;
                    }
                }
    
                if(code[i]+code[i+1]=='->' && (!isInStr || isVarInTemplateLiterals)){
                    var name='';
                    i+=2;
                    for(;i<code.length;i++){ 
                        if(code[i]!=' '){
                            break;
                        }
                    }
                    var startPropName=i;
    
                    if(i>=code.length){
                        break;
                    }
    
                    var regex=/^[a-zA-Z]+$/;
    
                    for(;i<code.length;i++){ 
                        if(!(code[i].match(regex) || code[i]=='_')){
                            break;
                        }
                    }
                    
                    var endPropName=i;
    
                    name=code.substring(startPropName,endPropName);
    
                    var forCheckIsSetterIndex=endPropName;
    
                    var isSetter=false;
    
                    var setterEqualChrIndex=forCheckIsSetterIndex;
    
                    var endSetterIndex=forCheckIsSetterIndex;
    
                    for(var j=forCheckIsSetterIndex;j<code.length;j++){
    
                        if((code[j].match(regex) || code[j]=='_') || code[i]==';' || code[i]=='.' ||  code[i]=='}' || code[i]=='{' || code[i]=='(' || code[i]==')'  || code[i]=='+'  || code[i]=='-'  || code[i]=='>'  || code[i]=='<'  || code[i]=='\\'  || code[i]=='*' ){
                            break;
                        }
    
                        if(code[j]=='='){
                            setterEqualChrIndex=j;
                            isSetter=true;
                            break;
                        }
    
                    }
                    if(!isSetter){
                        result+=`.GetThisWithCallback((module)=>{
                            return module.Get('${name}');
                        })`;
                        i--;
                    }
                    else{
                        var nextCode = code.substring(setterEqualChrIndex+1,code.length);
                        const { v4: uuidv4 } = require('uuid');
                        var fid = uuidv4();
    
                        var fid2='';
    
                        for(var fi=0;fi<fid.length;fi++){
                            if(fid[fi]=='-'){
                                fid2+='_';
                            }
                            else{
                                fid2+=fid[fi];
                            }
                        }
    
                        fid=fid2;
    
    //.Set('${name}',${value})
                        top+=`
                            var a${fid}_module;
                        `;
                        result+=`.GetThisWithCallback((module)=>{
                            a${fid}_module=module;
                        })
                        var getterObj${fid}={
                            set stter(value) {
                                a${fid}_module.Set('${name}',value);
                            }
                        }
                        getterObj${fid}.stter=`;
                        result+=nextCode;
                        var nextCompile=this.CompileNModuleFastGetterAndSetter(result);
                        result=nextCompile.code;
                        top+=nextCompile.top;
                        break;
                    }
    
                    
                }
                else if(code[i]+code[i+1]+code[i+2]=='-->' && (!isInStr || isVarInTemplateLiterals)){
                    var name='';
                    i+=3;
                    for(;i<code.length;i++){ 
                        if(code[i]!=' '){
                            break;
                        }
                    }
                    var startPropName=i;
    
                    if(i>=code.length){
                        break;
                    }
    
                    var regex=/^[a-zA-Z]+$/;
    
                    for(;i<code.length;i++){ 
                        if(!(code[i].match(regex) || code[i]=='_')){
                            break;
                        }
                    }
                    
                    var endPropName=i;
    
                    name=code.substring(startPropName,endPropName);
    
                    var forCheckIsSetterIndex=endPropName;
    
                    var isSetter=false;
    
                    var setterEqualChrIndex=forCheckIsSetterIndex;
    
                    var endSetterIndex=forCheckIsSetterIndex;
    
                    for(var j=forCheckIsSetterIndex;j<code.length;j++){
    
                        if((code[j].match(regex) || code[j]=='_') || code[i]==';' || code[i]=='.' || code[i]=='}' || code[i]=='{' || code[i]=='(' || code[i]==')'  || code[i]=='+'  || code[i]=='-'  || code[i]=='>'  || code[i]=='<'  || code[i]=='\\'  || code[i]=='*' ){
                            break;
                        }
    
                        if(code[j]=='='){
                            setterEqualChrIndex=j;
                            isSetter=true;
                            break;
                        }
    
                    }
    
                    const { v4: uuidv4 } = require('uuid');
                    var fid = uuidv4();
    
                    var fid2='';
    
                    for(var fi=0;fi<fid.length;fi++){
                        if(fid[fi]=='-'){
                            fid2+='_';
                        }
                        else{
                            fid2+=fid[fi];
                        }
                    }
    
                    fid=fid2;
    
                    if(!isSetter){
                        top+=`var a${fid}_module;
                        `;
                        result+=`.AsyncGetThisWithCallback(async (module)=>{
                            a${fid}_module=module;
                            return await a${fid}_module.AsyncGet('${name}');
                        })
                        `;
                        i--;
                    }
                    else{
                        var nextCode = code.substring(setterEqualChrIndex+1,code.length);
                        
    
    //.Set('${name}',${value})
                        top+=`
                            var a${fid}_module;
                        `;
                        result+=`.AsyncGetThisWithCallback(async (module)=>{
                            a${fid}_module=module;
                        })
                        var getterObj${fid}={
                            set stter(value) {
                                (async ()=>{
                                    await a${fid}_module.AsyncSet('${name}',value);
                                })();
                            }
                        }
                        getterObj${fid}.stter=`;
                        result+=nextCode;
                        var nextCompile=this.CompileNModuleFastGetterAndSetter(result);
                        result=nextCompile.code;
                        top+=nextCompile.top;
                        break;
                    }
    
                    
                }
                else{
                    result+=code[i];
                }
            }


        }

        return {'code':result,'top':top};
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

        var cmpiledNModuleFastGetterAndSetter=this.CompileNModuleFastGetterAndSetter(compiledSpecialCharactersCode);

        var cnmfgas=cmpiledNModuleFastGetterAndSetter.top+cmpiledNModuleFastGetterAndSetter.code;

        result=this.CompileFastGetNModule(cnmfgas);

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