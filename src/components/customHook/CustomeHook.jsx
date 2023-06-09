import React, { useState, useEffect } from 'react'

export function useKeyPress(target) {
    const [isPressed, setPressed] = useState(false)
  
    useEffect(() => {
      const handleDown = ({ key }) => {
        if (key === target) {
          setPressed(true)
        }
      }
  
      const handleUp = ({ key }) => {
        if (key === target) {
          setPressed(false)
        }
      }
  
      window.addEventListener('keydown', handleDown)
      window.addEventListener('keyup', handleUp)
  
      return () => {
        window.removeEventListener('keydown', handleDown)
        window.removeEventListener('keyup', handleUp)
      }
    }, [target])
  
    return isPressed
  }

export default function CustomeHook() {

    const happy = useKeyPress('h');
    const sad = useKeyPress('s');


  return (
    <div>
        <h3>Custome Hook - my-js.org</h3>
        <div>h, s</div>
        <div>
            {happy && '😊'}
            {sad && '😢'}
        </div>
    </div>
  )
}
