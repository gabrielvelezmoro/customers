import { makeStyles } from '@mui/styles'
import background from 'assets/login-background.png'

const useStyles = makeStyles(() => ({
	container: {
    display: 'flex',
    flexDirection: 'row',
    minHeight: '100vh',
		backgroundColor: '#fff',
		backgroundSize: 'cover',
		backgroundPosition: 'center',
	},

	mainWrapper: {
		display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
		alignItems: 'center',
		height: '100vh',
		minHeight: '100vh',
		width: '100%',
	},

	logoWrapper: {
		display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
		alignItems: 'center',
		height: '50px',
		width: '410px',
		marginBottom: '20px'
	},
	
	logoImage: {
		width: '260px',
	},

	buttonWrapper: {
		display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
		alignItems: 'center',
		height: '50px',
		width: '410px',
		marginTop: '30px'
	},

	paperWrapper: {
		padding: '5px 30px 20px 30px',
		minHeight: '410px',
		'@media (min-width: 1000px)': { 
			maxHeight: '410px', 
			maxWidth: '410px', 
			height: '410px', 
			width: '410px', 
		}
	},

	loginWrapper: {
		display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
		alignItems: 'center',
		height: 'calc(100vh - 50px)',
		minHeight: 'calc(100vh - 50px)',
		width: '100%',
	},

	backgroundWrapper: {
		display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
		alignItems: 'flex-start',
		minHeight: 'calc(100vh - 50px)',
		backgroundImage: `url(${background})`,
		backgroundRepeat: 'no-repeat',
		backgroundSize: '100% 100%',
		width: '100%'
	},

	backgroundTransparencyBlack: {
		display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
		alignItems: 'flex-start',
		width: '100%',
		height: '100%',
		backgroundColor: 'rgba(0, 0, 0, 0.3)'
	},

	backgroundTransparencyBlue: {
		display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
		alignItems: 'flex-start',
		width: '100%',
		height: '100%',
		backgroundImage: 'linear-gradient( to bottom right, #1448FE, #472AF9 10%, transparent )'
	},

	backgroundLogo: {
		position: 'relative',
		height: '62%'
	},

	formBox: {
		width: '350px'
	},

	linearProgress: {
		marginTop: '20px'
	},

	alert: {
		marginTop: '10px', 
		padding: '1px 16px 1px 16px',
	},

	footer: {
  	marginTop: 'auto',
  	backgroundColor: '#E7EAED',
  	padding: '10px 10px 15px 10px'
	},

	signupLink: {
		paddingTop: '20px',
		textAlign: 'right'
	},

	passwordForgetButton: {
		paddingLeft: '60px !important',
		paddingRight: '60px !important',
	},

	mainButton: {
		marginTop: '10px !important'
	}
}));

export { useStyles }
