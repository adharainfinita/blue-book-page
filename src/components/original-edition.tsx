import { detailsBooks } from "../data/text";
const OriginalEdition =() => {
  return (
<section className="detailBooksSecton">
				<div id="bookImg">
					<img
						src="https://res.cloudinary.com/dlbhecdey/image/upload/v1710362609/IMG_20240221_130046163_wqwi8h.jpg"
						alt="the blue book"
					/>
				</div>
				<div>
					<div className="text">
						{detailsBooks.map((element) => {
							return <div className="paragraph">{element}</div>;
						})}
					</div>
				</div>
			</section>
  )
}

export default OriginalEdition