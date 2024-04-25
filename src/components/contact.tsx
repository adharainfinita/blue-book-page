import {
	TiSocialInstagram,
	TiSocialPinterest,
	TiSocialYoutube,
} from "react-icons/ti";
import { SiWattpad, SiSpotify, SiGmail } from "react-icons/si";

const Contact = () => {
  return (
    <>
    <section id="final-text">
				<div className="contactsDiv">
					<p>Enterate qué es este proyecto y quién soy yo:</p>
					<a href="https://www.instagram.com/universo_2099/" target="_blank">
						<TiSocialInstagram className="social-icons" />
					</a>
				</div>
				<div className="contactsDiv">
					<p>
						En mi canal de Youtube vas a encontrar vídeos sobre el universo 2099
					</p>
					<a
						href="https://youtube.com/@ardescorpio"
						target="_blank"
					>
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
      <p>Y no te olvides de seguirme en mis otras redes sociales</p>
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
  )
}
export default Contact;