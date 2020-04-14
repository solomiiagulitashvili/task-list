import { ICategory } from './category-interface';

export interface ITask {
  title: string;
  id: string;
  completed: boolean;
  date: string;
  steps: number;
  level: number;
  category: ICategory;
  progress: number;
}
