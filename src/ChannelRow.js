import React from 'react';
import './ChannelRow.css';
import { Avatar } from '@material-ui/core';
import Verified from '@material-ui/icons/CheckCircle';

function ChannelRow({
	image,
	channel,
	verified,
	subs,
	noOfVideos,
	description,
}) {
	return (
		<div className='channelRow'>
			<Avatar src={image} alt={channel} className='channelRow_logo' />
			<div className='channelRow_text'>
				<h4>
					{channel} {verified && <Verified />}
				</h4>
				<p>
					{subs} subscribers • {noOfVideos} Videos
				</p>
				<p>{description}</p>
			</div>
		</div>
	);
}

export default ChannelRow;
