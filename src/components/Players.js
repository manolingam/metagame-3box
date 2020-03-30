import React from 'react';

import { makeStyles } from '@material-ui/core/styles';

import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import Rating from '@material-ui/lab/Rating';
import { red } from '@material-ui/core/colors';
import Badge from '@material-ui/core/Badge';

const useStyles = makeStyles(theme => ({
	root: {
		maxWidth: 345
	},
	media: {
		height: 0,
		paddingTop: '56.25%' // 16:9
	},
	avatar: {
		backgroundColor: red[500]
	}
}));

const Players = ({ users }) => {
	const classes = useStyles();

	return (
		<div
			style={{
				display: 'flex',
				flexDirection: 'row',
				flexWrap: 'wrap',
				alignItems: 'center',
				justifyContent: 'center'
			}}
		>
			{users.map(user => {
				return (
					<Card
						key={user.id}
						className={classes.root}
						style={{ margin: '1em' }}
					>
						<CardHeader
							avatar={
								<Badge
									color='primary'
									badgeContent={Math.floor(
										Math.random() * Math.floor(100)
									)}
								>
									<Avatar
										style={{ backgroundColor: 'white' }}
									>
										<img
											src={`https://robohash.org/${user.id}?size=50x50`}
											alt='avatar'
										></img>
									</Avatar>
								</Badge>
							}
							title={user.name}
							subheader={user.email}
						/>

						<CardContent>
							<Rating
								name='read-only'
								value={Math.floor(
									Math.random() * Math.floor(6)
								)}
								readOnly
							/>

							<hr></hr>

							<Typography
								variant='body2'
								color='textSecondary'
								component='p'
							>
								Lorem ipsum dolor sit amet, consectetur
								adipiscing elit. Aenean at nunc nibh. Maecenas
								accumsan semper hendrerit. Quisque facilisis
								congue semper. Quisque nec tellus id lectus
								efficitur facilisis eu et nunc.
							</Typography>
						</CardContent>
					</Card>
				);
			})}
		</div>
	);
};

export default Players;
