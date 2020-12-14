import { Entity, PrimaryGeneratedColumn } from 'typeorm';

import { BaseEntity } from './base.entity';

@Entity({ name: 'example' })
export class ExampleEntity extends BaseEntity {
  @PrimaryGeneratedColumn()
  public id!: number;
}
