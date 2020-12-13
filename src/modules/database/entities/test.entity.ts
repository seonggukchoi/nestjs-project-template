import { Entity, PrimaryGeneratedColumn } from 'typeorm';

import { BaseEntity } from './base.entity';

@Entity({ name: 'test' })
export class TestEntity extends BaseEntity {
  @PrimaryGeneratedColumn()
  public id!: number;
}
