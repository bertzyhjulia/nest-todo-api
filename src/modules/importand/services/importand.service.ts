import { Injectable, Inject } from '@nestjs/common';
import { Repository } from 'typeorm';
import { Relation } from '../entities/importand.entity';

@Injectable()
export class RelationService {
  constructor(
    @Inject('IMPORTAND_REPOSITORY')
    private relationRepository: Repository<Relation>,
  ) {}

  async findAll(): Promise<Relation[]> {
    return this.relationRepository.find();
  }
}
