import './App.css';

function App() {
  return (
    <div className="App">
      <Job salary={90000} position="Senior SDE" company="Amazon"/>
      <Job salary={12000} position="Junior SDE" company="Google"/>
      <Job salary={10000} position="Project Manager" company="Netflix"/>
    </div>
  );
}


const Job = (proops) => {
  return(
    <div>
      <h1>{proops.salary}</h1>
      <h1>{proops.position}</h1>
      <h1>{proops.company}</h1>
    </div>
  )
}

export default App;
