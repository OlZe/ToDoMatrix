export const PATHS = {
    OVERVIEW: () => 'overview',
    CREATE_TASK: () => 'edit/new',
    EDIT_TASK: (taskId: string) => `edit/${taskId}`
};
