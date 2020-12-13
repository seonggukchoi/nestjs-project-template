import { Entity, PrimaryGeneratedColumn } from 'typeorm';

import { ITestModel } from '@app/models/data-models';

import { BaseEntity } from './base.entity';

@Entity({ name: 'test' })
export class TestEntity extends BaseEntity implements ITestModel {
  @PrimaryGeneratedColumn()
  public id!: number;
}
