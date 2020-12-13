import { Entity, PrimaryGeneratedColumn } from 'typeorm';

import { BaseEntity } from '@app/models/bsae.entity';

@Entity({ name: 'test' })
export class TestEntity extends BaseEntity {
  @PrimaryGeneratedColumn()
  public id!: number;
}
