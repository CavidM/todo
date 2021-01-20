export enum actionStatus {
  success = 'success',
  fail = 'fail',
  empty = ''
}

export interface ActionMeta {
  status: actionStatus;
}

export interface BaseAction {
  payload: any;
  meta: ActionMeta;
  finish: (status: actionStatus) => void;
  type: string;
}

const baseAction: BaseAction = {
  meta: {
    status: actionStatus.success
  },
  finish(status: actionStatus) {
    this.meta.status = status;
  },
  type: '',
  payload: null
};

export default function createAction(type: string, payload: any) {
  return {
    ...baseAction,
    type,
    payload
  };
}
