import { SiAmazon } from "react-icons/si";
import { aboutEbook } from "../data/text";

const EbookEdition = () => {
 return (
<section className="detailBooksSecton">
				<div className="text">
					{aboutEbook.map((element) => {
						return <div className="paragraph">{element}</div>;
					})}
				</div>
				<div>
					<h4>Toca el botón para entrar a la tienda de Amazon</h4>
					<a href="https://www.amazon.com/s?k=Adhara+Redruello&i=digital-text&crid=3HX60Y2F947HH&sprefix=adhara+redruell%2Cdigital-text%2C260&ref=nb_sb_noss" target="_blank">
						<SiAmazon className="social-icons" />
					</a>
				</div>
			</section>
 ) 
}

export default EbookEdition;