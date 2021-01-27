export enum StoreStateStatus {
  idle = 'idle',
  pending = 'pending',
  success = 'success',
  fail = 'fail'
}

export interface StoreInitialState {
  status: StoreStateStatus;
}
