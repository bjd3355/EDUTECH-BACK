import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Schedule } from './schedule.entity';
import { ScheduleEvent } from './event.entity';
import { CreateScheduleDto } from './DTO/CreateScheduleDto';
import { UpdateScheduleDto } from './DTO/UpdateScheduleDto';

@Injectable()
export class ScheduleService {
  constructor(
    @InjectRepository(Schedule)
    private readonly schedRepo: Repository<Schedule>,
  ) {}

  async create(dto: CreateScheduleDto): Promise<any> {
    const sched = this.schedRepo.create({
      weekStart: dto.weekStart,
      weekEnd: dto.weekEnd,
      weekLabel: dto.weekLabel,
      note: dto.note,
      published: dto.published ?? false,
      niveau: { id: dto.niveauId } as any,
      filiere: { id: dto.filiereId } as any,
      section: { id: dto.sectionId } as any,
      events: dto.events.map(e => ({
        date: e.date,
        startTime: e.startTime,
        endTime: e.endTime,
        room: e.room,
        professeur: { id: e.professeurId } as any,
        matiere: { id: e.matiereId } as any,
      } as any)),
    });
    const saved = await this.schedRepo.save(sched);
    return this.transform(saved);
  }

  async findAll(filters?: any): Promise<any[]> {
    const where: any = {};
    if (filters.niveauId)  where.niveau   = { id: +filters.niveauId };
    if (filters.filiereId) where.filiere  = { id: +filters.filiereId };
    if (filters.sectionId) where.section  = { id: +filters.sectionId };

    const list = await this.schedRepo.find({
      where,
      order: { weekStart: 'DESC' },
    });
    return list.map(s => this.transform(s));
  }

  async findOne(id: number): Promise<any> {
    const sched = await this.schedRepo.findOne({ where: { id } });
    if (!sched) throw new NotFoundException('Schedule non trouvé');
    return this.transform(sched);
  }

  async update(id: number, dto: UpdateScheduleDto): Promise<any> {
    const preload: any = { id, ...dto };
    if (dto.events) {
      preload.events = dto.events.map(e => ({
        id: (e as any).id,
        date: e.date,
        startTime: e.startTime,
        endTime: e.endTime,
        room: e.room,
        professeur: { id: e.professeurId } as any,
        matiere: { id: e.matiereId } as any,
      }));
    }
    const sched = await this.schedRepo.preload(preload);
    if (!sched) throw new NotFoundException('Schedule non trouvé');
    const saved = await this.schedRepo.save(sched);
    return this.transform(saved);
  }

  async remove(id: number): Promise<void> {
    const sched = await this.schedRepo.findOne({ where: { id } });
    if (!sched) throw new NotFoundException('Schedule non trouvé');
    await this.schedRepo.remove(sched);
  }

  /** Transforme pour le front */
  private transform(s: Schedule): any {
    const days = ['lundi','mardi','mercredi','jeudi','vendredi','samedi','dimanche'];
    const scheduleMap = days.reduce((acc, d) => ({
      ...acc,
      [d.charAt(0).toUpperCase()+d.slice(1)]: []
    }), {} as any);

    s.events.forEach(evt => {
      const dayName = new Date(evt.date)
        .toLocaleDateString('fr-FR',{ weekday: 'long' });
      const key = dayName.charAt(0).toUpperCase() + dayName.slice(1);
      if (!scheduleMap[key]) return;
      scheduleMap[key].push({
        startTime: evt.startTime,
        endTime: evt.endTime,
        module: evt.matiere.nom,
        professor: evt.professeur.nom,
        room: evt.room || '',
        timeSlot: `${evt.startTime}-${evt.endTime}`,
      });
    });

    return {
      id: s.id,
      niveau: s.niveau.nom,
      filiere: s.filiere.nom,
      section: s.section.nom,
      published: s.published,
      note: s.note,
      weekPeriod: s.weekLabel,
      schedule: scheduleMap,
      daysStatus: Object.keys(scheduleMap)
        .reduce((acc, day) => ({ ...acc, [day]: 'workday' }), {}),
    };
  }
}
