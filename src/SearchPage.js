import React from 'react';
import './SearchPage.css';
import ChannelRow from './ChannelRow';
import TuneIcon from '@material-ui/icons/Tune';
import VideoRow from './VideoRow';

function SearchPage() {
	return (
		<div className='searchPage'>
			<div className='searchPage_filter'>
				<TuneIcon />
				<h2>Filter</h2>
			</div>
			<hr />
			<ChannelRow
				image='https://yt3.ggpht.com/ytc/AAUvwnh3QH3UYxKLoz4S9dRE9dDo_nhqE6cUZYASHYTJQQ=s176-c-k-c0x00ffffff-no-rj'
				channel='Unbox Therepy'
				subs='17.8M'
				verified
				noOfVideos={382}
				description='Where products get naked.
            Here you will find a variety of videos showcasing the coolest products on the planet. From the newest smartphone to surprising gadgets and technology you never knew existed. Its all here on Unbox Therapy.'
			/>
			<hr />
			<VideoRow
				title='They Sent a 500 Pound Package. Whats Inside Blew Me Away.'
				views='678K'
				subs='17.8M '
				timestamp='1 days ago'
				channelImage='https://yt3.ggpht.com/ytc/AAUvwnh3QH3UYxKLoz4S9dRE9dDo_nhqE6cUZYASHYTJQQ=s176-c-k-c0x00ffffff-no-rj'
				channel='Unbox Therepy'
				image='https://i.ytimg.com/vi/i2vxilXDcKw/maxresdefault.jpg'
				description='This is the definition of "Unbox Therapy". Xidax - https://www.xidax.com/ FOLLOW ME IN THESE PLACES FOR UPDATES Twitter ...'
			/>
			<VideoRow
				title='Your Brain Will Drool Over This...
                '
				views='1M'
				subs='17.8M '
				timestamp='3 days ago'
				channelImage='https://yt3.ggpht.com/ytc/AAUvwnh3QH3UYxKLoz4S9dRE9dDo_nhqE6cUZYASHYTJQQ=s176-c-k-c0x00ffffff-no-rj'
				channel='Unbox Therepy'
				image='https://i.ytimg.com/vi/acNux1Y1u0I/maxresdefault.jpg'
				description='The new ASUS Zenbook Duo improves upon the previous version by angling its secondary display into a more comfortable ...'
			/>
			<VideoRow
				title='I Finally Bought an Electric Car...
                '
				views='2.6M'
				subs='17.8M '
				timestamp='2 weeks ago'
				channelImage='https://yt3.ggpht.com/ytc/AAUvwnh3QH3UYxKLoz4S9dRE9dDo_nhqE6cUZYASHYTJQQ=s176-c-k-c0x00ffffff-no-rj'
				channel='Unbox Therepy'
				image='https://i.ytimg.com/vi/Q4P9wJApo38/maxresdefault.jpg'
				description='I finally pulled the trigger on an electric car... This is the Porsche Taycan Turbo S. It was a tough choice between this and a Tesla ...'
			/>
			<VideoRow
				title='Realme 7 vs Realme 7 Pro Unboxing
                '
				views='2.2M'
				subs='17.8M '
				timestamp='4 months ago'
				channelImage='https://yt3.ggpht.com/ytc/AAUvwnh3QH3UYxKLoz4S9dRE9dDo_nhqE6cUZYASHYTJQQ=s176-c-k-c0x00ffffff-no-rj'
				channel='Unbox Therepy'
				image='https://i.ytimg.com/vi/hOxaQZGWoAA/maxresdefault.jpg'
				description='Unboxing the new Realme 7 and Realme 7 Pro. *Giveaway Details* Subscribe - https://youtube.com/unboxtherapy Follow on ..'
			/>
			<VideoRow
				title='Sony PS5 Unboxing - The Beast is HERE

                '
				views='6.4M'
				subs='17.8M '
				timestamp='3 months ago'
				channelImage='https://yt3.ggpht.com/ytc/AAUvwnh3QH3UYxKLoz4S9dRE9dDo_nhqE6cUZYASHYTJQQ=s176-c-k-c0x00ffffff-no-rj'
				channel='Unbox Therepy'
				image='https://i.ytimg.com/vi/aSqtj5AwMAQ/maxresdefault.jpg'
				description='Unboxing Sonys latest flagship console, the PlayStation 5 (PS5). FOLLOW ME IN THESE PLACES FOR UPDATES Twitter ...'
			/>
		</div>
	);
}

export default SearchPage;
