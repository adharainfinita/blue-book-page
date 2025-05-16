
import { text } from "./data/text";
import "./App.css";

import ReactPlayer from "react-player/youtube";
import OriginalEdition from "./components/original-edition";
import EbookEdition from "./components/ebook-edition";
import AboutTheProyect from "./components/about-the-proyect";
import Contact from "./components/contact";
import SideBar from "./components/side-bar";

function App() {
	return (
		<>
		<SideBar/>
			<section id="video">
				<ReactPlayer url="https://youtu.be/uSYLBwatVLI?si=3DMuA0RgZZWl270a" />
			</section>
			<section>
				<img
					src="https://res.cloudinary.com/dlbhecdey/image/upload/v1705535265/nsiid4wlaeg5lrvitjgq.png"
					alt="the blue book img"
				/>
				<img
					src="https://res.cloudinary.com/dlbhecdey/image/upload/v1705528016/snxapndca8z1i04ugy13.png"
					alt="the curse of Esker'lamet img"
				/>
			</section>
			<h3>Resumen</h3>
			<section className="text">
				{text.map((element) => {
					return <div className="paragraph">{element}</div>;
				})}
			</section>
			<h1>Formatos</h1>
			<h3>Edición Original</h3>
			<OriginalEdition />

			<h3>E-Book</h3>
			<EbookEdition />
			<h3>Acerca de este proyecto</h3>
			<AboutTheProyect />
			<h3>Contacto</h3>
			<Contact/>
		</>
	);
}

export default App;
