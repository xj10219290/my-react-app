import { useState } from 'react'

function App() {
  const [todos, setTodos] = useState([])
  const [input, setInput] = useState('')

  // 添加任务
  const addTodo = ()=>{
    if(input.trim() === '')return; 
    setTodos([...todos, input]);
    setInput('');
  }

  //删除任务
  const deleteTodo = (index)=>{
    setTodos(todos.filter((_, i)=> i!==index));
  }

  return (
   <div style={styles.container}>
      <h1>📝 我的 ToDoList</h1>
      <div style={styles.inputBox}>
        <input
          style={styles.input}
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="输入待办事项..."
        />
        <button style={styles.addBtn} onClick={addTodo}>
          添加
        </button>
      </div>

      <ul style={styles.list}>
        {todos.map((todo, index) => (
          <li key={index} style={styles.listItem}>
            <span>{todo}</span>
            <button style={styles.delBtn} onClick={() => deleteTodo(index)}>
              删除
            </button>
          </li>
        ))}
      </ul>
    </div>
  )
}

const styles = {
  container: {
    width: "400px",
    margin: "50px auto",
    textAlign: "center",
    fontFamily: "sans-serif",
  },
  inputBox: { display: "flex", justifyContent: "center", gap: "10px" },
  input: { padding: "8px", width: "200px" },
  addBtn: { padding: "8px 12px", cursor: "pointer" },
  list: { listStyle: "none", padding: 0, marginTop: "20px" },
  listItem: {
    display: "flex",
    justifyContent: "space-between",
    background: "#f3f3f3",
    padding: "8px 12px",
    marginBottom: "8px",
    borderRadius: "4px",
  },
  delBtn: { cursor: "pointer", color: "red", border: "none", background: "none" },
};

export default App
