import { Router } from 'express';
import {
    AddUserController,
} from '../../presentation/controller/user';
import {
    AddUserUseCase,
} from '../../data/useCase/user';

import { adaptRoute } from '../adapter/expressRouteAdapter';
import { Controller } from '../../presentation/controller';
import { UserRepository } from '../../infra/db';

const router = Router();

const makeAddUserController = (): Controller => {

    const userRepository = new UserRepository();

    const addUserUseCase = new AddUserUseCase(userRepository);
    const addUserController = new AddUserController(addUserUseCase);

    return addUserController;
};

// const makeFindByIdUserController = (): Controller => {
//   const userRepository = new UserRepository();
//   const findByIdUserUseCase = new FindByIdUserUseCase(userRepository);
//   const findByIdUserController = new FindByIdUserController(findByIdUserUseCase);

//   return findByIdUserController;
// }  

// const makeFindAllUserController = (): Controller => {  

//   const userRepository = new UserRepository();  
//   const findAllUserUseCase = new FindAllUserUseCase(userRepository);
//   const findAllUserController = new FindAllUserController(findAllUserUseCase);

//   return findAllUserController;
// };


router
    .post('/user', adaptRoute(makeAddUserController()))
//   .get('/user/all', auth, adaptRoute(makeFindAllUserController()))
//   .get('/user/:id', auth, adaptRoute(makeFindByIdUserController()))


export default router;
