export interface UserModel{
    id: number;    
    cpf: string;          
    email: string;           
    name: string;           
    password: string;  
    profile_id: number;         
} 

export interface User {
    id: number
    cpf: string | null
    name: string | null
    email: string | null
    active: boolean
    profiles: Array<{
        id: number,
        profile: string
    }>
    created_at: Date
    updated_at: Date
}