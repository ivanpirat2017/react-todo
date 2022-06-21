


export interface TasksInterface {
    id: number,
    name: string,
    del: number,
    done: number,
    end_date: string,
    plan_id: number
}


export interface ToDoInterface {
    id: number,
    name: string,
    img: {
        id: number,
        path: string
    },
    del: number,
    tasks: Array<TasksInterface>
}
export interface ImgInterface {
    id: number,
    name: string,
    path: string
}
