import "./App.css";
import Card from "./components/Card";
const imgs = [10,12,]
const object = {
  imgs: "https://images.unsplash.com/photo-1546961329-78bef0414d7c?ixlib=rb-4.0.3&amp;ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fHVzZXJ8ZW58MHx8MHx8&amp;auto=format&amp;fit=crop&amp;w=100&amp;q=60",
  name:"yogesh"
 }
function App() {
  return (
    <>
      <Card objects={ object } array={ imgs} imgs="https://images.unsplash.com/photo-1546961329-78bef0414d7c?ixlib=rb-4.0.3&amp;ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fHVzZXJ8ZW58MHx8MHx8&amp;auto=format&amp;fit=crop&amp;w=100&amp;q=60" />
    </>
  );
}

export default App;
