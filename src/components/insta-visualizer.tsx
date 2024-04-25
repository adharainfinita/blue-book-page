
import Stories from 'react-insta-stories';
import { Story } from 'react-insta-stories/dist/interfaces';
interface InstaVisualizerProps {
  stories: Story[];
}


const InstaVisualizer: React.FC<InstaVisualizerProps> = ({stories}) => {
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