import { IExampleInstanceModel } from './example-instance.model';

export interface ICreateExampleInstanceInputModel extends Pick<IExampleInstanceModel, 'data'> {}
