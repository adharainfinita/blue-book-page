import { MdSimCardDownload } from "react-icons/md";
import { TiSocialInstagram, TiSocialPinterest } from "react-icons/ti";
import { SiWattpad, SiSpotify } from "react-icons/si";
import { text } from "./data/text";
import "./App.css";

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
			<section>
				<div>
					<p id="text-download">▪️ Descarga la demo del libro aquí mismo 👇🥰</p>
					<button>
						<a href="La Maldicion de Esker'lamet.pdf" download={true}>
							<MdSimCardDownload id="icon-download"/>
						</a>
					</button>
				</div>
			</section>
      <section id="final-text">

			<p > 👾👾👾 Y no te olvides de seguirme en mis redes sociales 👾👾👾</p>
			<a href="https://www.instagram.com/sexta_vocal/" target="_blank">
				<TiSocialInstagram className="social-icons" />
			</a>
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
