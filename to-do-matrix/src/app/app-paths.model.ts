// Starting with / so it is an absolute path instead of relative
export const ROUTE_PATHS = {
    OVERVIEW: () => `/${PATH_DEFINITIONS.OVERVIEW}`,
    CREATE_TASK: () => `/${PATH_DEFINITIONS.CREATE_TASK}`,
    EDIT_TASK: (taskId: string) => `/${PATH_DEFINITIONS.EDIT_TASK.replace(PATH_DEFINITIONS.EDIT_TASK_ID_KEY, taskId)}`
};

// Routing paths for routing module may not start with a /
export const PATH_DEFINITIONS = {
    OVERVIEW: 'overview',
    CREATE_TASK: 'edit/new',
    EDIT_TASK: 'edit/:id',
    EDIT_TASK_ID_KEY: 'id'
};
