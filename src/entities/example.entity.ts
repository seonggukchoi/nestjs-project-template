import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

import { BaseEntity } from './base.entity';

@Entity({ name: 'example' })
export class ExampleEntity extends BaseEntity {
  @PrimaryGeneratedColumn()
  public id!: number;

  @Column({ name: 'data', type: 'int' })
  public data!: number;
}
