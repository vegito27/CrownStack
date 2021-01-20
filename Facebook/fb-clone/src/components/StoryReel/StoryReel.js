import React from 'react';
import './StoryReel.css'
import Story from '../../components/Story/Story'
import vegitossj2 from '../Images/vegitossj2.png'
import vegito2 from '../Images/vegito2.jpeg'
import vegito from '../Images/vegito.jpeg'
import gokussj2 from '../Images/gokussj2.jpeg'
import gokussj3 from '../Images/gokussj3.png'



function StoryReel() {
		return (
			<div className="storyreel">
				<Story profileSrc={vegitossj2} image="" title="Rishabh Tripathi"/>
				<Story profileSrc={vegito} image="" title="Saurabh Kumar"/>
				<Story profileSrc={vegito2} image="" title="Rajesh Kumar"/>
				<Story profileSrc={gokussj3} image="" title="Ashwani Kumar"/>
				<Story profileSrc={gokussj2} image="" title="Kartik Jha"/>
			</div>
		);
	
	}
export default StoryReel
