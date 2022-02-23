import {React,useRef,useEffect} from 'react'

const {tableau} = window

const Card = ({dashboard}) => {
  const ref = useRef(null)

  useEffect(()=>{
    const viz = new tableau.Viz(ref.current, `${dashboard}`,{
      hideTabs: true,
      hideToolbar: true,
      width: "525px",
      height:"220px",
    })
    return viz;
  })
  return(
    <div ref = {ref}/>
  )
}

export default Card