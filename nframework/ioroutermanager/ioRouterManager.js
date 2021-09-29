var IORouterManager=class{
    constructor(){
        this.routers=[];
    }

    AddRouter(e){
        this.routers.push(e);
    }

    IORouting(clientSocket,router){
        clientSocket.on(router.path,(data,clientCallback)=>{
            var rdata = router.callback(clientSocket,data);
            if(clientCallback!=null){
                clientCallback(rdata);
            }
        });
    }

    Emit(clientSocket,path,data){
        clientSocket.emit(path,data);
    }

    SetupFor(clientSocket){
        for(var i=0;i<this.routers.length;i++){
            this.IORouting(clientSocket,this.routers[i]);
        }
    }

}


module.exports=IORouterManager;