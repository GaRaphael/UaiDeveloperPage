import { User } from '../../domain/model';
import { NextFunction, Request, Response } from 'express';
import { StatusCodes } from 'http-status-codes';
import { verify } from 'jsonwebtoken';

export default function auth(req: Request, res: Response, next: NextFunction) {

  const headerToken = req.headers.authorization;
  const token = headerToken?.replace('Bearer ', '');
  const secret = process.env.TOKEN_SECRET || '';

  if (headerToken) {

    try {
      const user: any | User = verify(token ?? '', secret);

      if (!user) {
        return res.status(StatusCodes.UNAUTHORIZED).json({ error: 'Sessão inválida ou expirada, faça o login novamente para continuar' });
      }

      // req.user = user;

      next();
    } catch (error) {
      return res.status(StatusCodes.UNAUTHORIZED).json({ error: 'Sessão inválida ou expirada, faça o login novamente para continuar' });
    }

  } else {
    return res.status(StatusCodes.FORBIDDEN).json({ error: 'Bearer Token Not Found' });
  }

}
