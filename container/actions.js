import * as actions from "./actionTypes";

export const bugAdded = description => ({
    type: "actions.BUG_ADDED",
        payload: {
          description: "Bug1"
        }
});

export const bugResolved = description => ({
    type: "actions.BUG_RESOLVED",
        payload: {
            description: "BugResolved"
        }
})
