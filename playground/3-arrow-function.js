const tasks = [
    {
        title: 'Clean the house',
        completed: true
    },
    {   
        title: 'Renew inspection',
        completed: false
    },
    {
        title: 'Pot plants',
        completed: false
    }
]
const tasksToDo = tasks.filter((task)=> task.completed === false);
console.log(tasksToDo);