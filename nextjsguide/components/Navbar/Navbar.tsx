import React from 'react'

import { Navlinks } from '@/Constants'
import Link from 'next/link'

type Props = {}

const Navbar = (props: Props) => {
  return (
  <div className='flex flex-row gap-x-2 justify-evenly bg-blue-400 py-3 text-white'>
   {Navlinks.map((i)=> (
        <Link href={i.Link} key={i.id}>{i.name}</Link>
 ))}
  
  </div>

  )
}

export default Navbar