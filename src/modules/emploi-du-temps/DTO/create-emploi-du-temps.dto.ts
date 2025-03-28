// src/modules/emploi-du-temps/DTO/create-emploi-du-temps.dto.ts
export class CreateEmploiDuTempsDto {
  date: Date;
  heureDebut: string;
  heureFin: string;
  module: string;
  professeur: number;
  filiere?: number;
  matiere?: number;
  niveau?: number;
  section?: number;
}
