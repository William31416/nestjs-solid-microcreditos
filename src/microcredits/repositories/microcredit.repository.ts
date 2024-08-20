import { Injectable } from "@nestjs/common";
import { Microcredit } from "../interfaces/microcredit.interface";

@Injectable()
export class MicrocreditRepository {
    // Almacena microcréditos en memoria.
    private microcredits: Microcredit[] = [];

    // Agregar un microcrédito.
    addMicrocredit(microcredit: Microcredit) {
        this.microcredits.push(microcredit);
    }

    // Encontrar un microcrédito por ID.
    findById(microcreditId: string) {
        return this.microcredits.find(mc => mc.id === microcreditId);
    }
}