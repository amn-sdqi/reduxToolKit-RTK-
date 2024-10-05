import "./App.css";
import AddTodo from "./components/AddTodo";
import Todods from "./components/Todo";

function App() {
	return (
		<>
			<div className="flex flex-col justify-center items-center">
				<AddTodo />
				<Todods />
			</div>
		</>
	);
}

export default App;
