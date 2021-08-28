var Tag=class{
    constructor(){

    }

    Compile(element,childsCode,code){
        return element.startContentIndex + ' ' + element.endContentIndex;
    }

    GetInputs(element,childsCode,code){
        var endTagIndex=element.startContentIndex;

        for(var i=element.startContentIndex;i<=element.endContentIndex;i++){
            if((code.data[i]=='>' && !this.isAutoClose)
                || (code.data[i]=='/' && (this.isAutoClose))){
                endTagIndex=i;
                break;
            }
        }

        var startInputIndex=element.startContentIndex;
        
        for(var i=element.startContentIndex;i<endTagIndex;i++){
            var ch=code.data[i];

            if(ch=='<'){
                var tagStart=i;
                var tagEnd=i;
                var startN=i+1;
                for(var j=i+1;j<code.data.length;j++){
                    var chj=code.data[j];

                    if(chj!='/'&&chj!=' '){
                        startN=j;
                        break;
                    }

                }
                if(code.data[startN]=='N'){
                    
                    if(code.data[startN+1]==':' && code.data[startN+2]!=':'){
                        
                        var endTagName=startN+1;
                        
                        for(var j=startN+2;j<code.data.length;j++){
                            var chj=code.data[j];

                            if(chj==' '||chj=='>'||chj=='/'){
                                endTagName=j-1;
                                startInputIndex=endTagName+1;
                                break;
                            }

                        }
                    }
                }
            }
        }

        var inputsStr=code.data.substring(startInputIndex,endTagIndex);
    
        var inputs=inputsStr.split(' ');

        var inputsCache=[];

        for(var i=0;i<inputs.length;i++){
            if(inputs[i]!=''){
                inputsCache.push(inputs[i]);
            }
        }

        inputs=inputsCache;

        return inputs;
    }


    GetContent(element,childsCode,code){

        var result=[];

        
        var endTagIndex=element.startContentIndex;

        for(var i=element.startContentIndex;i<=element.endContentIndex;i++){
            if(code.data[i]=='>'){
                endTagIndex=i;
                break;
            }
        }

        var startContent=endTagIndex+1;

        var currentContentPart=new Object();
        currentContentPart.code='';

        for(var i=startContent;i<element.endContentIndex;i++){

            var isInAnyElement=false;

            var getEndElement=function(element){
                var end=element.endContentIndex;
                for(var t=element.endContentIndex;t<code.data.length;t++){
                    if(code.data[t]=='>'){
                        end=t;
                        break;
                    }
                }
                return end;
            }

            for(var j=0;j<element.childs.length;j++){
                var celementEnd=getEndElement(element.childs[j]);
                if(i>=element.childs[j].startContentIndex && i<=celementEnd){
                    isInAnyElement=true;
                    result.push(currentContentPart);
                    
                    currentContentPart=new Object();
                    currentContentPart.code=element.childs[j].code;
                    currentContentPart.type='childCode';
                    result.push(currentContentPart);

                    currentContentPart=new Object();
                    currentContentPart.code='';
                    i=celementEnd+1;
                    break;
                }
            }

            if(!isInAnyElement){
                currentContentPart.code+=code.data[i];
                currentContentPart.type='textContent';
            }
        }
        

        result.push(currentContentPart);

        return result;

    }


}



module.exports=Tag;