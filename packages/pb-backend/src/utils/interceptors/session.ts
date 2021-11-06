import {
  Injectable,
  NestInterceptor,
  ExecutionContext,
  CallHandler,
} from "@nestjs/common"
import { Request } from "express"
import { tap } from "rxjs/operators"
import { SessionApplicationService } from "src/application-service/session"

@Injectable()
export class SessionInterceptor implements NestInterceptor {
  constructor(
    private sessionApplicationService: SessionApplicationService = new SessionApplicationService()
  ) {}

  intercept(context: ExecutionContext, next: CallHandler) {
    const request: Request = context.switchToHttp().getRequest()

    return next.handle().pipe(
      tap(() => {
        const sessionId = request?.cookies?.sid
        if (sessionId) {
          console.log(sessionId)
          // セッションの期限を更新する
          this.sessionApplicationService.updateSession(sessionId)
        }
      })
    )
  }
}
