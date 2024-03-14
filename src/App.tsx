import { MdSimCardDownload } from "react-icons/md";
import { TiSocialInstagram, TiSocialPinterest, TiSocialYoutube } from "react-icons/ti";
import { SiWattpad, SiSpotify } from "react-icons/si";
import { detailsBooks, text } from "./data/text";
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
			<section className="text">
				{text.map((element) => {
					return <div className="paragraph">{element}</div>;
				})}
			</section>
			<section id="detailBooksSecton">
					<img id="bookImg" src="https://res.cloudinary.com/dlbhecdey/image/upload/v1710362609/IMG_20240221_130046163_wqwi8h.jpg" alt="the blue book" />
				<div>
					<h3>Características</h3>
					<div className="text">
						{detailsBooks.map((element)=> {
							return <div className="paragraph">{element}</div>
						})}
					</div>
				</div>
			</section>
			<h3>Acerca de este proyecto</h3>
			<section id="igSection">
				<div>
			<InstaVisualizer/>
				</div>
				<div>
				<InstaAuthor/>
				</div>
			</section>
			<section>
				<div>
					<p id="text-download">▪️ Podés descargar la demo del libro aquí mismo 👇🥰</p>
					<button>
						<a href="LMDE_parte_1.pdf" download={true}>
							<MdSimCardDownload id="icon-download"/>
						</a>
					</button>
				</div>
			</section>
      <section id="final-text">

			<p>Entrá al siguiente enlace para enterarte qué es este proyecto y quién soy yo:</p>
				<a href="https://www.instagram.com/universo_2099/" target="_blank">
				<TiSocialInstagram className="social-icons" />
			</a>
						<p>En mi canal de Youtube vas a encontrar vídeos sobre el universo 2099</p>
						<a href="https://www.youtube.com/@adhararedruello2310">
							<TiSocialYoutube className="social-icons"/>
						</a>
			<p > 👾👾👾 Y no te olvides de seguirme en mis otras redes sociales 👾👾👾</p>
			<a href="https://ar.pinterest.com/Adhara97/" target="_blank">
				{" "}
				<TiSocialPinterest className="social-icons" />
			</a>
			<a href="https://www.wattpad.com/user/Adh-astra" target="_blank">
				{" "}
				<SiWattpad className="social-icons" />
			</a>
			<a
				href="https://open.spotify.com/user/217zlzbbvvkvpsjcyccaymv7a?si=97e7ddb3707c46d1"
				target="_blank">
          <SiSpotify className="social-icons" />
        </a>
          </section>
		</>
	);
}

export default App;
