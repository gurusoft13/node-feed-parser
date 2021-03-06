import { Typography, withStyles } from '@material-ui/core'
const PageTitle = withStyles((theme) => ({
  h1: {
    fontSize: '18pt',
    fontWeight: '700',
    marginTop: '50px',
    [theme.breakpoints.down('sm')]: {
      fontSize: '18px',
      lineHeight: '24px',
    },
  },
  body1: {
    fontStyle: 'italic',
    color: '#a5a5a5',
    marginTop: '10px',
    fontSize: '12pt',
    [theme.breakpoints.down('sm')]: {
      fontSize: '12px',
      lineHeight: '18px',
    },
  },
}))(Typography)

export default PageTitle
