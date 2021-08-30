var IORouterManager=class{
    constructor(){
        this.routers=[];
    }

    AddRouter(e){
        this.routers.push(e);
    }

    IORouting(clientSocket,router){
        clientSocket.on(router.path,(data)=>{
            router.callback(clientSocket,data);
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