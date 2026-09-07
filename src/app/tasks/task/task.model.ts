export interface Task {
    title: string;
    summary: string;
    id: string;
    dueDate: string; 
    userId: string;
}

export interface NewTaskData {title: string; summary: string; date: string;}