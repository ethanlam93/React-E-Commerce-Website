import { createSelector } from "reselect";
// Selectors library are used for memorization and efficiency, so when state changes but the value stay the same, the component wouldn't re-render

const selectUser = (state) => state.user;
export const selectCurrentUser = createSelector(
  [selectUser],
  (user) => user.currentUser
);
