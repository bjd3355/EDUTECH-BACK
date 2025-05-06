import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Availability } from './availability.entity';
import { CreateAvailabilityDto } from './DTO/create-availability.dto';
import { UpdateAvailabilityDto } from './DTO/update-availability.dto';

@Injectable()
export class AvailabilityService {
  constructor(
    @InjectRepository(Availability)
    private readonly repo: Repository<Availability>,
  ) {}

  create(dto: CreateAvailabilityDto) {
    const ent = this.repo.create({
      professeur: { id: dto.professeurId } as any,
      date: dto.date,
      startTime: dto.startTime,
      endTime: dto.endTime,
      type: dto.type,
    });
    return this.repo.save(ent);
  }

  findAll(filters?: any) {
    const qb = this.repo.createQueryBuilder('av');
    if (filters.professeurId) {
      qb.andWhere('av.professeur = :pid', { pid: filters.professeurId });
    }
    if (filters.date) {
      qb.andWhere('av.date = :d', { d: filters.date });
    }
    return qb.orderBy('av.date','ASC').getMany();
  }

  async findOne(id: number) {
    const ent = await this.repo.findOne({ where: { id } });
    if (!ent) throw new NotFoundException('Availability not found');
    return ent;
  }

  async update(id: number, dto: UpdateAvailabilityDto) {
    const ent = await this.repo.preload({ id, ...dto });
    if (!ent) throw new NotFoundException('Availability not found');
    return this.repo.save(ent);
  }

  async remove(id: number) {
    const ent = await this.findOne(id);
    await this.repo.remove(ent);
  }
}
