import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Slot } from './slot.entity';
import { CreateSlotDto } from './DTO/create-slot.dto';
import { UpdateSlotDto } from './DTO/update-slot.dto';

@Injectable()
export class SlotService {
  constructor(
    @InjectRepository(Slot)
    private readonly repo: Repository<Slot>,
  ) {}

  create(dto: CreateSlotDto) {
    const ent = this.repo.create(dto);
    return this.repo.save(ent);
  }

  findAll(filters?: any) {
    const qb = this.repo.createQueryBuilder('s');
    if (filters.className) {
      qb.andWhere('s.className = :cn', { cn: filters.className });
    }
    if (filters.day) {
      qb.andWhere('s.day = :d', { d: filters.day });
    }
    return qb.getMany();
  }

  async findOne(id: number) {
    const ent = await this.repo.findOne({ where: { id } });
    if (!ent) throw new NotFoundException('Slot not found');
    return ent;
  }

  async update(id: number, dto: UpdateSlotDto) {
    const ent = await this.repo.preload({ id, ...dto });
    if (!ent) throw new NotFoundException('Slot not found');
    return this.repo.save(ent);
  }

  async remove(id: number) {
    const ent = await this.findOne(id);
    await this.repo.remove(ent);
  }
}
