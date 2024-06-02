import { PrismaHelper } from '../helpers';
import {
    AddUserRepositoryParams,
    AddUserRepositoryResponse,
    FindUserExistsParams,
    FindUserExistsResponse,
} from '../../../domain';

const { prisma } = PrismaHelper;
export class UserRepository {

    public async add(params: AddUserRepositoryParams): Promise<AddUserRepositoryResponse> {
        const {
            cpf,
            email,
            name,
            password,
            profile_id
        } = params;

        const { user: UserModel } = prisma;

        const user = await UserModel.create({
            data: {
                cpf,
                email,
                name,
                password,
                profile_id,
                user_has_profile: {
                    create: {
                        profile_id
                    }
                }
            },

        });

        return user
    }

    public async verifyExists(params: FindUserExistsParams): Promise<FindUserExistsResponse> {

        const { user: UserModel } = prisma;
    
        const user = await UserModel.findFirst({
          where: {
            OR: [
              { cpf: params.cpf },
              { email: params.email }
            ]
          },
        });
    
        return { exists: !!user };
      }
}