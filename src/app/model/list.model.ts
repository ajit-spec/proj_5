export interface ListModel {
  title: string,
  tasks: TaskModel[],
  _id: string
}

export interface TaskModel {
  title: String,
  list_id: String,
  _id: string

}
