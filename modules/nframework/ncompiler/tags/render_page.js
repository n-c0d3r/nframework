var Tag=require('../tag/tag');

var tag=new Tag();

tag.isAutoClose=true;

tag.Compile=function(element,childsCode,code){
    var inputs=tag.GetInputs(element,childsCode,code);
    
    var pageName=inputs[0];

    return `

        ((req,res)=>{
            var framework=nmodule.manager.NFramework;
            var modules=page_${pageName}.modules;

            var miejs='';

            var frameworkCLEJS=framework.clejs;

            miejs+=frameworkCLEJS;

            for(var i=0;i<modules.length;i++){
                var module=modules[i];
                miejs+=' <script  src="/nmodules/'+module+'"></script>';
            }

            res.render( page_${pageName}.ejs_src,{
                NFramework:miejs
            });
        })(req,res);
    
    `;
}


module.exports=tag;