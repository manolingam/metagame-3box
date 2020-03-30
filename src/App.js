import React from 'react';
import Box from '3box';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

import LinearProgress from '@material-ui/core/LinearProgress';
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogActions from '@material-ui/core/DialogActions';
import Button from '@material-ui/core/Button';

import Players from './components/Players';
import Profile from './components/profile/Profile';

import logo from './assets/metagame.png';
import './App.css';

class App extends React.Component {
	constructor() {
		super();
		this.state = {
			needToAWeb3Browser: false,
			accounts: '',
			open: false,
			signedin: false
		};
	}

	async componentDidMount() {
		const users = await fetch('https://jsonplaceholder.typicode.com/users');
		const userlist = await users.json();

		this.setState({ userlist });

		if (typeof window.ethereum == 'undefined') {
			this.setState({ needToAWeb3Browser: true });
		} else {
			const accounts = await window.ethereum.enable();
			this.setState({ accounts: accounts });
		}

		console.log(this.props.location);
	}

	handleClickOpen = async () => {
		if (this.state.needToAWeb3Browser) {
			this.setState({ open: true });
		} else {
			this.setState({ open: true });
			const box = await Box.openBox(
				this.state.accounts[0],
				window.ethereum
			);
			// const space = box.openSpace('distributed-app-store');
			this.setState({ box, open: false, signedin: true });
		}
	};

	handleClose = () => {
		this.setState({ open: false });
	};

	render() {
		return (
			<Router>
				<nav>
					<img src={logo} alt='logo' height='50px' width='auto'></img>
					<div className='nav-div'>
						{this.state.signedin ? (
							<div>
								<Link to='/profile'>View profile</Link>

								<Link
									to='/'
									style={{ marginLeft: '1em' }}
									onClick={() => {
										this.setState({
											signedin: false,
											space: '',
											box: ''
										});
									}}
								>
									logout
								</Link>
							</div>
						) : (
							<button
								id='nav-button'
								onClick={this.handleClickOpen}
							>
								Sign in with 3Box
							</button>
						)}
					</div>
				</nav>
				<Switch>
					<Route exact path='/'>
						<div className='container'>
							<p id='players-title'>
								&#128025; Our Players &#128025;
							</p>
							{this.state.accounts ? (
								<Players users={this.state.userlist} />
							) : (
								<LinearProgress />
							)}

							{this.state.needToAWeb3Browser ? (
								<Dialog
									className='dialog'
									open={this.state.open}
									onClose={this.handleClose}
									aria-labelledby='alert-dialog-title'
									aria-describedby='alert-dialog-description'
								>
									<DialogTitle
										id='alert-dialog-title'
										style={{ textAlign: 'center' }}
									>
										{'Web3 Wallet Required'}
									</DialogTitle>
									<DialogContent
										style={{ textAlign: 'center' }}
									>
										<DialogContentText id='alert-dialog-description'>
											Non Web3 browswer! Install Metamask!
										</DialogContentText>
									</DialogContent>
									<DialogActions>
										<Button
											onClick={this.handleClose}
											color='primary'
										>
											Close
										</Button>
									</DialogActions>
								</Dialog>
							) : (
								<Dialog
									className='dialog'
									open={this.state.open}
									onClose={this.handleClose}
									aria-labelledby='alert-dialog-title'
									aria-describedby='alert-dialog-description'
								>
									<DialogTitle
										id='alert-dialog-title'
										style={{ textAlign: 'center' }}
									>
										<img
											src='https://3box.io/static/media/MolliePsychedelic.b2f0bd4f.png'
											width='40%'
											height='auto'
											alt='3box'
										></img>
									</DialogTitle>
									<DialogContent
										style={{ textAlign: 'center' }}
									>
										<DialogContentText id='alert-dialog-description'>
											Requesting signature...
										</DialogContentText>
										<br />
										<LinearProgress />
										<br />
									</DialogContent>
								</Dialog>
							)}
						</div>
					</Route>
					<Route exact path='/profile'>
						<Profile
							users={this.state.userlist}
							account={this.state.accounts[0]}
						/>
					</Route>
				</Switch>
			</Router>
		);
	}
}

export default App;
