import { Injectable } from "@nestjs/common";
import { User } from "../interfaces/user.interface";

@Injectable()
export class UserRepository {
    // Almacena usuarios en memoria.
    private users: User[] = [];

     // Agregar un usuario.
    addUser(user: User) {
        this.users.push(user);
    }

    // Encontrar un usuario por ID.
    findById(userId: string) {
        return this.users.find(user => user.id === userId);
    }
}