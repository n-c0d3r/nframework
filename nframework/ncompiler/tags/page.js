var Tag=require('../tag/tag');

var tag=new Tag();

tag.isAutoClose=false;

var parsed__dirname='';

for(var i=0;i<__dirname.length;i++){
    if(__dirname[i]=='\\'){
        parsed__dirname+='\\\\';
    }
    else{
        parsed__dirname+=__dirname[i];
    }
}

var pagePath=parsed__dirname+'/../../page/page';


tag.Compile=function(element,childsCode,code){
    var inputs=tag.GetInputs(element,childsCode,code);

    var contents=tag.GetContent(element,childsCode,code);

    var pageCode=`
    
    var Page=require('${pagePath}');
    
    var page_${inputs[0]}=new Page();
    
    page_${inputs[0]}.customTypeDatas=[];

    page_${inputs[0]}.useAllGlobalObjects=false;

    page_${inputs[0]}.name='${inputs[0]}';

    page_${inputs[0]}.Setup=function(){

    `;
    
    for(var i=0;i<contents.length;i++){
        pageCode+=contents[i].code;
    }


    pageCode+=`
    }
        page_${inputs[0]}.Setup.call(page_${inputs[0]});
        page_${inputs[0]}.manager=manager;
        page_${inputs[0]}.AfterSetup();
        pages.push( page_${inputs[0]});

    `;

    if(!element.forSV){
        pageCode='';
    }
    
    return `

    ${pageCode}
    
    `;
}


module.exports=tag;