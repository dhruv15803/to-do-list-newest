import { BrowserRouter,Routes,Route } from 'react-router-dom';
import './App.css';
import Pending from './Pages/Pending';
import Navbar from './Components/Navbar';
import Completed from './Pages/Completed';
import { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {

  let taskItems = JSON.parse(localStorage.getItem('taskItems'));
  let completeItems = JSON.parse(localStorage.getItem('completeItems'));
  if(taskItems===null){
    taskItems=[];
  }
  if(completeItems===null){
    completeItems=[];
  }
  const [tasks,setTasks] = useState(taskItems);
  const [complete,setComplete] = useState(completeItems);

  const [formData,setFormData] = useState({
    'task':'',
    'description':'',
  })

  const handleChange = (event)=>{
    const {name,value} = event.target;
    setFormData(prevFormData=>{
      return {
        ...prevFormData,
        [name]:value
      }
    });
  }

  const addTask = (event)=>{
    event.preventDefault();
    if(formData.task.trim()===''){
      toast.error('Enter a task please!');
      return;
    }
    setTasks(prevTasks=>[...prevTasks,{
      'task':formData.task,
      'description':formData.description,
      'show':false
    }]);
    setFormData({
      'task':'',
      'description':'',
    })
  }

  const deleteTask = (index)=>{
    const temp = [...tasks];
    temp.splice(index,1);
    setTasks(temp);
  }

  const clearTasks = ()=>{
    setTasks([]);
  }

  const clearComplete = ()=>{
    setComplete([]);
  }

  const completeTask = (index)=>{
    setComplete(prevComplete=>[...prevComplete,tasks[index]]);
    const temp = [...tasks];
    temp.splice(index,1);
    setTasks(temp);
  }

  const changeShowTasks = (index)=>{
    const newState = tasks.map((item,i)=>{
      if(i===index){
        return {
          ...item,
          'show':!item.show
        }
      }
      else{
        return item;
      }
    })
    setTasks(newState);
  }

  const changeShowComplete = (index)=>{
    const newState = complete.map((item,i)=>{
      if(i===index){
        return {
          ...item,
          'show':!item.show
        }
      }
      else{
        return item;
      }
    })
    setComplete(newState);
  }

  useEffect(()=>{
    localStorage.setItem('taskItems',JSON.stringify(tasks));
  },[tasks])

  useEffect(()=>{
    localStorage.setItem('completeItems',JSON.stringify(complete));
  },[complete])

  console.log(tasks);

  return (
    <>
    <BrowserRouter>
    <Navbar complete={complete}/>
    <Routes>
      <Route path='/' element={<Pending 
      clearTasks={clearTasks}
      addTask={addTask}
      handleChange={handleChange}
      formData={formData}
      tasks={tasks}
      deleteTask={deleteTask}
      completeTask={completeTask}
      changeShowTasks={changeShowTasks}
        />}
        />
      <Route path='/completed' element={<Completed complete={complete}
      clearComplete={clearComplete}
      changeShowComplete={changeShowComplete}
      />}/>
    </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
