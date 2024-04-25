import InstaVisualizer from "./insta-visualizer";
import { stories3 } from "../data/images";

const SerialEdition = () => {
  return (
    <section className="detailBooksSecton">
				<div id="formatSerial">
				<InstaVisualizer stories={stories3}/>
				</div>
			</section>
  )
}
export default SerialEdition;