import React from 'react';
import Box from '3box';

import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
import LinearProgress from '@material-ui/core/LinearProgress';
import Badge from '@material-ui/core/Badge';
import Rating from '@material-ui/lab/Rating';

import './styles.css';

class Profile extends React.Component {
	constructor(props) {
		super();
		this.state = {
			profile: ''
		};
	}

	async componentDidMount() {
		const profile = await Box.getProfile(this.props.account);
		this.setState({ profile: profile });
	}

	render() {
		let {
			description,
			image,
			job,
			employer,
			website,
			location,
			name,
			memberSince
		} = this.state.profile;

		return (
			<div className='profile-container'>
				{this.state.profile ? (
					<div className='box-profile'>
						<Badge
							color='primary'
							badgeContent={Math.floor(
								Math.random() * Math.floor(100)
							)}
						>
							<img
								id='3box-avatar'
								src={`https://ipfs.io/ipfs/${image[0]['contentUrl']['/']}`}
								alt='avatar'
							></img>
						</Badge>
						<br></br>
						<Rating
							name='read-only'
							value={Math.floor(Math.random() * Math.floor(6))}
							readOnly
						/>
						<br></br>
						<a
							href={`https://3box.io/${this.props.account}`}
							target='_blank'
							rel='noopener noreferrer'
						>
							Edit on 3Box
						</a>
						<List>
							<ListItem>
								<ListItemText primary='Name' secondary={name} />
							</ListItem>
							<Divider variant='inset' component='li' />
							<ListItem>
								<ListItemText primary='Job' secondary={job} />
							</ListItem>
							<Divider variant='inset' component='li' />
							<ListItem>
								<ListItemText
									primary='Employer'
									secondary={employer}
								/>
							</ListItem>
							<Divider variant='inset' component='li' />
							<ListItem>
								<ListItemText
									primary='Website'
									secondary={website}
								/>
							</ListItem>
							<Divider variant='inset' component='li' />
							<ListItem>
								<ListItemText
									primary='Location'
									secondary={location}
								/>
							</ListItem>
							<Divider variant='inset' component='li' />
							<ListItem>
								<ListItemText
									primary='Description'
									secondary={description}
								/>
							</ListItem>
							<Divider variant='inset' component='li' />
							<ListItem>
								<ListItemText
									primary='Member since'
									secondary={memberSince}
								/>
							</ListItem>
						</List>
					</div>
				) : (
					<LinearProgress />
				)}
			</div>
		);
	}
}
export default Profile;
