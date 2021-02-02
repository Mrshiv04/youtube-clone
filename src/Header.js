import React, { useState } from 'react';
import './Header.css';
import VideoCallIcon from '@material-ui/icons/VideoCall';
import AppsIcon from '@material-ui/icons/Apps';
import NotificationsIcon from '@material-ui/icons/Notifications';
import { Avatar } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import { Link } from 'react-router-dom';

function Header() {
	const [inputSearch, setInputSearch] = useState('');
	return (
		<div className='header'>
			<div className='header_left'>
				<MenuIcon />
				<Link to='/'>
					<img
						className='header_logo'
						src={'/yt_logo.png'}
						alt='youtube-logo'
					/>
				</Link>
			</div>
			<div className='header_input'>
				<input
					onChange={(e) => setInputSearch(e.target.value)}
					value={inputSearch}
					type='text'
					placeholder='Search'
				/>
				<Link to={`/search/${inputSearch}`}>
					<SearchIcon className='header_inputButton' />
				</Link>
			</div>
			<div className='header_icons'>
				<VideoCallIcon className='header_icon' />
				<AppsIcon className='header_icon' />
				<NotificationsIcon className='header_icon' />
				<Avatar
					className='header_icon'
					src='https://yt3.ggpht.com/ytc/AAUvwni8V7-KIQRP1H8OjtHAYhf7wtsj_OTWqnN5KrJ4eA=s176-c-k-c0x00ffffff-no-rj'
					alt='lewLater'
				/>
			</div>
		</div>
	);
}

export default Header;
