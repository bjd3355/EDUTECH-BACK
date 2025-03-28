// src/modules/emploi-du-temps/DTO/update-emploi-du-temps.dto.ts
export class UpdateEmploiDuTempsDto {
  date?: Date;
  heureDebut?: string;
  heureFin?: string;
  module?: string;
  professeur?: number;
  filiere?: number;
  matiere?: number;
  niveau?: number;
  section?: number;
}
