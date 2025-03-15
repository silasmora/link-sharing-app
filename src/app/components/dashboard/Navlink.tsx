import React from 'react'

interface NavlinkProps {
  label: string
  isActive: boolean
  onClick: () => void
}



const Navlink: React.FC<NavlinkProps> = ({ label, isActive, onClick}) => {
  return (
    <button onClick={onClick}>
      {label}
    </button>
  )
}

export default Navlink