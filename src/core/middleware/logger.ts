import { Injectable, NestMiddleware, UnauthorizedException} from '@nestjs/common'
import { Request, Response} from 'express'

@Injectable()
export class LoggerMiddleware implements NestMiddleware {
  use(req: Request, res: Response, next: any) {
    console.log('Request...')
    console.log('auth check')
    const headers = req.headers
    if(headers.authorization) {
      next();
    }
    throw new UnauthorizedException();
  }
}