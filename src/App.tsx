import { IoMdDownload } from "react-icons/io";
import {
	TiSocialInstagram,
	TiSocialPinterest,
	TiSocialYoutube,
} from "react-icons/ti";
import { SiWattpad, SiSpotify, SiGmail } from "react-icons/si";
import { aboutMe, detailsBooks, text } from "./data/text";
import "./App.css";
import InstaVisualizer from "./components/insta-stories";
import InstaAuthor from "./components/insta-author";

function App() {
	return (
		<>
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
			<section id="detailBooksSecton">
				<div id="bookImg">
					<img
						src="https://res.cloudinary.com/dlbhecdey/image/upload/v1710362609/IMG_20240221_130046163_wqwi8h.jpg"
						alt="the blue book"
					/>
				</div>
				<div>
					<h3>Características</h3>
					<div className="text">
						{detailsBooks.map((element) => {
							return <div className="paragraph">{element}</div>;
						})}
					</div>
				</div>
			</section>
			<h3>Acerca de este proyecto</h3>
			<section id="igSection">
				<div className="igDiv">
					<InstaVisualizer />
				</div>
				<div className="igDiv">
					<InstaAuthor />
				</div>
			</section>
			<div id="aboutMeDiv">
				{aboutMe.map((element) => {
					return <p className="aboutMeText">{element}</p>;
				})}
			</div>
			<section>
				<div>
					<p id="text-download">
						▪️ Podés descargar la demo del libro dandole clic al siguiente botón
						👇🥰
					</p>
					<a href="LMDE_parte_1.pdf" download={true}>
						<IoMdDownload id="icon-download" />
					</a>
				</div>
			</section>
			<h3>Contacto</h3>
			<section id="final-text">
				<div className="contactsDiv">
					<p>
					 Enterate qué es este proyecto y
						quién soy yo:
					</p>
					<a href="https://www.instagram.com/universo_2099/" target="_blank">
						<TiSocialInstagram className="social-icons" />
					</a>
				</div>
				<div className="contactsDiv">
					<p>
						En mi canal de Youtube vas a encontrar vídeos sobre el universo 2099
					</p>
					<a href="https://www.youtube.com/@adhararedruello2310" target="_blank">
						<TiSocialYoutube className="social-icons" />
					</a>
				</div>
				<div className="contactsDiv">
					<p>Si te interesa mi trabajo enviame un correo a:</p>
					<a href="mailto:adharanosalevich@gmail.com">
						<SiGmail className="social-icons" />
					</a>
				</div>
				
			</section>
			<p>
				
				Y no te olvides de seguirme en mis otras redes sociales
				</p>
				<a href="https://ar.pinterest.com/Adhara97/" target="_blank">
				
					<TiSocialPinterest className="social-icons" />
				</a>
				<a href="https://www.wattpad.com/user/Adh-astra" target="_blank">
				
					<SiWattpad className="social-icons" />
				</a>
				<a
					href="https://open.spotify.com/user/217zlzbbvvkvpsjcyccaymv7a?si=97e7ddb3707c46d1"
					target="_blank"
				>
					<SiSpotify className="social-icons" />
				</a>
		</>
	);
}

export default App;
