const express = require('express');
const app = express();

let todos = [
  {id: 1, task: 'Belajar PKN', completed: false},
  {id: 2, task: 'Bermain sepeda', completed: false},
  {id: 3, task: 'Melakukan daily', completed: false}
];

app.use(express.json());

app.get('/', (req, res) => {
  res.send('Selamat datang <3');
})

app.get('/todos', (req, res) => {
  res.json(todos);
})

// Update ToDo
app.put('/todo/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const { task, completed } = req.body;

  const todo = todos.find(t => t.id === id);
  if (!todo) {
    return res.status(404).json({ message: 'Todo ga ada' });
  }

  if (task) todo.task = task;
  if (typeof completed === 'boolean') todo.completed = completed;

  res.json({ message: 'Todo udh diupdate y', todo });
});

// Hapus ToDo
app.delete('/todo/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const index = todos.findIndex(t => t.id === id);
  
  if (index === -1) {
    return res.status(404).json({ message: 'Todo ga ada' });
  }

  todos.splice(index, 1);

  res.json({ message: 'Todo dah diapus' });
});

app.get('/todo/:id', (req, res) => {
     const id = parseInt(req.params.id);
     const todo = todos.find(t => t.id === id);

     if(!todo){
      return res.status(404).json({message: 'todo ga ada coy'});
    }

     res.json(todo);
    })
    
    app.delete('/', (req, res) => {
      res.send('kamu dihapus');
    })
    
    const port = 5000;
    app.listen(port, () => {
    console.log(`Aplikasi telah berjalan pada http://localhost:${port}`);
});
