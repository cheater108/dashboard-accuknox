import Category from "./components/Category"
import Header from "./components/Header"
import Navbar from "./components/Navbar"
import Sidenav from "./components/Sidenav"
import { useSelector } from "react-redux"
import type { RootState } from "./store/store"


function App() {
	const categories = useSelector((state: RootState) => state.categoryReducer)
	return (
		<main>
			<Navbar />
			<Header />
			{categories.map((c) => (
				<Category category={c} />
			))}
			<Sidenav />
		</main>
	)
}

export default App
