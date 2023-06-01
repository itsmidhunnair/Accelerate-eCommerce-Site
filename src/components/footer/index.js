import React, { useEffect } from 'react'
import useFooter from '../../hooks/useFooter'
import BottomFooter from './BottomFooter'
import MiddleFooter from './MiddleFooter'
import TopFooter from './TopFooter'

const Index = () => {

  const {fetchFooter} = useFooter()

  useEffect(()=>{
    fetchFooter()
  },[])
  
  return (
    <>
        <TopFooter/>
        <MiddleFooter/>
        <BottomFooter/>
    </>
  )
}

export default Index