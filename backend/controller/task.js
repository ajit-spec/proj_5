const Task = require('../model/task')

const addtask = async (req, res) => {
    try {
        const task = new Task(
            {
                title: req.body.title,
                list_id: req.body.list_id,
            }
        )
        await task.save()
        res.send(
            {
                status: 1,
                msg: 'task added'

            }
        )
    } catch (e) {
        console.log(e.message)
    }
}


const edittask = async (req, res) => {
    const title = req.body.title;
    const task_id = req.body.task_id;
    await Task.findByIdAndUpdate(
        task_id,
        {
            title
        }
    )
    res.send(
        {
            status: 1,
            msg: 'task edited'
        }
    )
}

const deletetask = async (req, res) => {
    const task_id = req.body.task_id;
    await Task.findByIdAndDelete(task_id)
    await Task.deleteMany(
        {
            task_id
        }
    )
    res.send(
        {
            status: 1,
            msg: 'task deleted'
        }
    )
}

const getsingletask = async (req, res) => {
    const task_id = req.body.task_id;
    const result = await Task.findById(task_id)
    res.send(
        {
            status: 1,
            msg: 'task found',
            task: result
        }
    )
}

module.exports = {
    addtask,
    edittask,
    deletetask,
    getsingletask
}