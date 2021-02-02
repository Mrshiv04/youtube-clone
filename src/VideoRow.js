import React from 'react';
import './VideoRow.css';
import { Avatar } from '@material-ui/core';

function VideoRow({
	views,
	subs,
	description,
	timestamp,
	channel,
	title,
	image,
	channelImage,
}) {
	return (
		<div className='videoRow'>
			<img src={image} alt={channel} />
			<div className='videoRow_text'>
				<h3>
					<Avatar
						className='videoRow_head_logo'
						src={channelImage}
						alt={channel}
					/>
					{title}
				</h3>
				<p className='videoRow_headline'>
					{channel} •{' '}
					<span className='videoRow_subs'>
						<span className='videoRow_subsNumber'>{subs}</span>
						subscribers
					</span>{' '}
					• {views} views • {timestamp}
				</p>
				<p className='videoRow_description'>{description}</p>
			</div>
		</div>
	);
}

export default VideoRow;
