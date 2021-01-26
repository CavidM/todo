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
  payload?: any;
}

export default function createAction(
  type: string,
  payload: any
): BaseAction {
  return {
    type,
    payload
  };
}
