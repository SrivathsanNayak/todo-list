function todo (todoPriority, todoTitle, todoDescription, todoDate, todoProject, todoStatus, todoDeleted) {
    return { 
        todoPriority,
        todoTitle,
        todoDescription,
        todoDate,
        todoProject,
        todoStatus,
        todoDeleted
    };
};

export { todo };