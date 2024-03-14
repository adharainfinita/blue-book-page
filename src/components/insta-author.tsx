import Stories from 'react-insta-stories';
import { stories2 } from '../data/images';

const InstaAuthor = () => {
  return(
		<Stories
			stories={stories2}
			defaultInterval={5000}
			width={"40vw"}
			height={"70vw"}
      loop={true}
		/>
  )
};
export default InstaAuthor;