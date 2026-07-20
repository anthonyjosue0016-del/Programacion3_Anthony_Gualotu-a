import {
  ExceptionFilter,
  Catch,
  ArgumentsHost,
  HttpException,
  HttpStatus,
} from '@nestjs/common';
import { Response } from 'express';
import { ErrorResponseDto } from '../dto/response.dto';

@Catch()
export class GlobalHttpExceptionFilter implements ExceptionFilter {
  private extractMessage(exceptionResponse: any): string {
    if (typeof exceptionResponse === 'string') {
      return exceptionResponse;
    }

    if (exceptionResponse && typeof exceptionResponse === 'object') {
      if (Array.isArray(exceptionResponse.message)) {
        return exceptionResponse.message.join(' ');
      }
      if (typeof exceptionResponse.message === 'string') {
        return exceptionResponse.message;
      }
      if (typeof exceptionResponse.error === 'string') {
        return exceptionResponse.error;
      }
    }

    return 'Unexpected server error';
  }

  catch(exception: any, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse<Response>();

    const status = exception instanceof HttpException
      ? exception.getStatus()
      : HttpStatus.INTERNAL_SERVER_ERROR;

    const exceptionResponse = exception instanceof HttpException
      ? exception.getResponse()
      : 'Internal server error';

    const message = this.extractMessage(exceptionResponse);
    const error = exceptionResponse && typeof exceptionResponse === 'object' && 'error' in exceptionResponse ? exceptionResponse.error : undefined;

    const errorResponse = new ErrorResponseDto(message, status, error);
    response.status(status).json(errorResponse);
  }
}
