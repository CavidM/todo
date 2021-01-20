export enum actionStatus {
  success = 'success',
  fail = 'fail',
  empty = ''
}

export interface ActionMeta {
  status: actionStatus;
}

export interface BaseAction {
  /**
   * Action type or Event name which triggered from any part of application by user
   * Should hold basic important information about triggered action.
   *  domain name, operation which perform on this domain and may hold the final status about operation
   * Example: domain/action:status, user/add -> user/add:(success | fail)
   */
  type: string;

  /**
   * The main data which this action (event) will trigger for.
   */
  payload: any;

  /**
   * Hold any information about how action was performed
   */
  meta: ActionMeta;

  /**
   * @param status
   * Call this on action object which indicate that action is complete for using it in anywhere in application
   * It can add extra data to meta property giving more  information about how action was finished
   */
  finish: (status: actionStatus) => void;
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
