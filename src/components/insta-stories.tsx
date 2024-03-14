
import Stories from 'react-insta-stories';
import { stories } from '../data/images';

const InstaVisualizer = () => {
  return(
		<Stories
			stories={stories}
			defaultInterval={5000}
			width={"40vw"}
			height={"70vw"}
      loop={true}
		/>
  )
};
export default InstaVisualizer;