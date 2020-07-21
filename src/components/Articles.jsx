import React, { useEffect } from 'react'
import { makeStyles, Typography } from '@material-ui/core'
import moment from 'moment'
const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: theme.spacing(5),
    [theme.breakpoints.down('sm')]: {
      paddingTop: theme.spacing(1),
    },

    '& h1,h2,h3,h4,h5,h6': {
      color: 'black',
      fontStyle: 'bold',
      fontWeight: '700',
    },
    '& p': {
      color: '#a5a5a5',
    },
    '& a': {
      textDecoration: 'none',
      color: 'black',
    },
    borderTop: '1px solid rgba(0, 0, 0, .1)',
  },

  page: {
    paddingBottom: theme.spacing(3),
    borderBottom: '1px solid rgba(0, 0, 0, .1)',
  },

  article: {
    paddingTop: theme.spacing(3),
    paddingBottom: theme.spacing(3),
    borderBottom: '1px solid rgba(0, 0, 0, .1)',

    '& .description': {
      paddingTop: theme.spacing(2),
    },
  },
}))

const Articles = ({ articles }) => {
  const classes = useStyles()
  useEffect(() => {
    const adsbygoogle = window.adsbygoogle || []
    adsbygoogle.push({})
  }, [])
  return (
    <div className={classes.root}>
      <ins
        className="adsbygoogle"
        style={{ display: 'block' }}
        data-ad-client="ca-pub-23452425"
        data-ad-slot="24524524"
        data-ad-format="auto"
      ></ins>
      {articles.map((article) => {
        return (
          <div className={classes.article}>
            <Typography variant="h5">
              <a href={article.link} target="_blank" rel="noopener noreferrer">
                {article.title}
              </a>
            </Typography>
            <Typography variant="body1" className="description">
              {moment(article.pub_date).fromNow()} - {article.feed}
            </Typography>
          </div>
        )
      })}
    </div>
  )
}

export default Articles