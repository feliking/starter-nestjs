import { BadRequestException } from '@nestjs/common';
import { SuccessResponseDto } from './success-response.dto';

export abstract class AbstractController {
  makeResponse(data, message: string): SuccessResponseDto {
    return {
      success: true,
      message: message,
      data: data,
    };
  }

  success(data, message = '¡Tarea completada con éxito!'): SuccessResponseDto {
    return this.makeResponse(data, message);
  }

  successList(
    data,
    message = 'Registro(s) obtenido(s) con éxito!',
  ): SuccessResponseDto {
    return this.makeResponse(data, message);
  }

  successUpdate(
    data,
    message = 'Registro actualizado con éxito!',
  ): SuccessResponseDto {
    return this.makeResponse(data, message);
  }

  successDelete(
    data,
    message = 'Registro eliminado con éxito!',
  ): SuccessResponseDto {
    return this.makeResponse(data, message);
  }

  successCreate(
    data,
    message = 'Registro creado con éxito!',
  ): SuccessResponseDto {
    return this.makeResponse(data, message);
  }

  // successListRows(data, message = Messages.SUCCESS_LIST): SuccessResponseDto {
  //   const [filas, total] = data
  //   return this.makeResponse({ total, filas }, message)
  // }

  getUser(req) {
    if (req?.user?.id) {
      return req.user.id;
    }
    throw new BadRequestException(
      `Es necesario que este autenticado para consumir este recurso.`,
    );
  }
}
