import Student from './Components/Student';
import TaskInput from './Components/TaskInput';
import './index.css'

function App() {

  return (
    <div className="w-full h-[100vh] flex justify-center items-center ">
      <Student />
      <TaskInput />
    </div>
  )
  }

export default App;
