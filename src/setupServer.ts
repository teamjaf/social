import {Application, json, urlencoded, Response, Request, NextFunction} from 'express'
import * as http from 'http'
import cors from 'cors'
import helmet from 'helmet'
import hpp from 'hpp' 
import cookierSession from 'cookie-session'
import HTTP_STATUS from 'http-status-codes'
import 'express-async-errors'
 
export class ChattyServer{
    private app: Application
 
    constructor(app: Application){
        this.app = app
    }

    public start(): void{
        this.securityMiddleware(this.app)
        this.standardMiddleware(this.app)
        this.routeMiddleware(this.app)
        this.globalMiddleware(this.app)
        this.startMiddleware (this.app)

    }

    private securityMiddleware(app: Application): void {
        app.use(
            cookierSession({
                
            })
        )
    }

    private standardMiddleware(app: Application): void {} 

    private routeMiddleware(app: Application): void {}

    private globalMiddleware(app: Application): void {}

    private startMiddleware(app: Application): void {}

    private createSocketIO(httpserver: http.Server): void {}

    private startHttpServer(app: Application): void {}







}
