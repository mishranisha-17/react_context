import React, {useContext} from 'react'
import DataContext from './Context/DataContext'
  export default function Footer() {
    let ctx = useContext(DataContext)
  return (
    <div>i am a footer components</div>
  )
}

export default Footer