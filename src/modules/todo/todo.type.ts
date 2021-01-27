/**
 * Hold all information about types regarding current domain
 */
import { StoreInitialState } from '../../tools/types/StoreStateStatus';

export interface Todo {
  id: string;
  title: string;
  description: string;
}

export interface InitialState extends StoreInitialState {
  items: Todo[];
}
