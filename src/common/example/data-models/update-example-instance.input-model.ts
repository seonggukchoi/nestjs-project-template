import { IExampleInstanceModel } from './example-instance.model';

export interface IUpdateExampleInstanceInputModel extends Partial<Pick<IExampleInstanceModel, 'data'>> {}
