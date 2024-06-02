import { UserModel } from "./model";


// ---------- add --------------
export type AddUserUseCaseParams = UserModel

export type AddUserUseCaseResponse = {
    data?: UserModel
    error?: string;
}

export type AddUserRepositoryParams = UserModel

export type  AddUserRepositoryResponse  = UserModel | null

// ---------- verify exists --------------

export type FindUserExistsParams = {
    cpf: string
    email: string
}
export type FindUserExistsResponse = {
    exists: boolean
}
