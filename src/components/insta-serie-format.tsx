import Stories from 'react-insta-stories';
import { stories3 } from '../data/images';

const VisualizerFormatSerialBook = () => {

  return (
    <Stories 
    stories={stories3}
    defaultInterval={5000}
			width={"40vw"}
			height={"70vw"}
      loop={true}
    />
  )
};

export default VisualizerFormatSerialBook;