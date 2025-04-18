// src/modules/google-agenda/google-agenda.service.ts
import { Injectable } from "@nestjs/common";
import { EmploiDuTemps } from "../modules/emploi-du-temps/emploi-du-temps.entity";

@Injectable()
export class GoogleAgendaService {
  async createOrUpdateEvent(emploi: EmploiDuTemps): Promise<void> {
    console.log(
      `Synchronisation de l'événement ${emploi.id} avec Google Agenda.`,
    );
  }

  async deleteEvent(emploi: EmploiDuTemps): Promise<void> {
    console.log(`Suppression de l'événement ${emploi.id} de Google Agenda.`);
  }
}
