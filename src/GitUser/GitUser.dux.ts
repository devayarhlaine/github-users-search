import { action,createReducer } from 'typesafe-actions';

export const updateSearchTextAction = (searchText: string) => action('GIT_USER/CHANGE_SEARCH_TEXT', searchText);
export const updateUsersAction = (users: Array<GitUsers>) => action('GIT_USER/UPDATE_USERS', users);
export interface GitUsers{
    login: string,
    id: number,
    avatar_url: string,
    url: string,
}
export interface GitUserProp {
    searchText: string,
    users: Array<GitUsers>
}
const initialState: GitUserProp = {
    searchText: "",
    users: []
};
export const gitUserReducer = createReducer(initialState)
  .handleAction('GIT_USER/CHANGE_SEARCH_TEXT', (state: GitUserProp, action:any) =>
    ({ ...state, searchText: action.payload }))
  .handleAction('GIT_USER/UPDATE_USERS', (state: GitUserProp, action:any) =>
    ({ ...state, users: action.payload }))
  ;