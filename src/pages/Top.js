import React, { useEffect } from 'react';
import Layout from '../components/Layout/Layout';
import { fetchPopularData } from '../apis/index';

const Top = () => {
  useEffect(() => {
    console.log(process.env.REACT_APP_YOUTUBE_API_KEY)
    fetchPopularData().then((res) => {
      console.log('data', res)
    })
  }, [])

  return (
    <Layout>
      Top page
    </Layout>
  )
}

export default Top
