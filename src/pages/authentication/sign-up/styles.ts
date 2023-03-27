import { makeStyles } from '@mui/styles'

import backgroundImage from 'assets/login.svg'
import background from 'assets/background.png'

const useStyles = makeStyles(() => ({
  Media: {
    height: '100%',
    width: '100%'
  },

	container: {
    display: 'flex',
    flexDirection: 'column',
    minHeight: '100vh',
		backgroundImage: `url(${background})`,
		backgroundSize: 'cover',
		backgroundPosition: 'center',
	},

	mainWrapper: {
		display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
		alignItems: 'center',
		minHeight: 'calc(100vh - 50px)'
	},

	paperWrapper: {
		padding: '30px',
	    minHeight: '470px',
	  	'@media (min-width:1000px)': { 
	  		maxHeight: '470px', 
		  	maxWidth: '940px', 
		  	height: '470px', 
		  	width: '940px', 
		  	backgroundImage: `url(${backgroundImage})`,
		  	backgroundSize: 'contain',
		  	backgroundRepeat: 'no-repeat'
	    }
	},

	logoImage: {
		width: '250px',
		marginLeft: '-5px',
		marginTop: '-90px',
		marginBottom: '-20px'
	},

	formBox: {
		width: '350px'
	},

	linearProgress: {
		marginTop: '20px'
	},

	alert: {
		marginTop: '20px', 
		padding: '1px 16px 1px 16px'
	},

	footer: {
  	marginTop: 'auto',
  	backgroundColor: '#E7EAED',
  	padding: '10px 10px 15px 10px'
	},

	signupLink: {
		textAlign: 'right'
	},

	mainButton: {
		marginTop: '10px !important'
	}
}));

export { useStyles }
