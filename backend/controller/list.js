const List = require('../model/list')
const Task = require('../model/task')

const addlist = async (req, res) => {
    try {
        const list = new List(
            {
                title: req.body.title
            }
        )
        await list.save()
        res.send(
            {
                status: 1,
                msg: 'list added'

            }
        )
    } catch (e) {
        console.log(e.message)
    }
}

const getlists = async (req, res) => {
    const result = await List.find()
        .populate({
            path: 'tasks'
        })

    res.send(
        {
            status: 1,
            tasks: result
        }
    )
}

const editlist = async (req, res) => {
    const title = req.body.title;
    const list_id = req.body.list_id;
    await List.findByIdAndUpdate(
        list_id,
        {
            title
        }
    )
    res.send(
        {
            status: 1,
            msg: 'list edited'
        }
    )
}

const deletelist = async (req, res) => {
    const list_id = req.body.list_id;
    await List.findByIdAndDelete(list_id)
    await Task.deleteMany(
        {
            list_id
        }
    )
    res.send(
        {
            status: 1,
            msg: 'list deleted'
        }
    )
}

const getsinglelist = async (req, res) => {
    const list_id = req.body.list_id;
    const result = await List.findById(list_id)
    res.send(
        {
            status: 1,
            msg: 'list found',
            list: result
        }
    )
}


module.exports = {
    addlist,
    getlists,
    editlist,
    deletelist,
    getsinglelist
}