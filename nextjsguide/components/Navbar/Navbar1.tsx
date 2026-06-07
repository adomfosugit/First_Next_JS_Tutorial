"use client"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu"
import { Navlinks } from '@/Constants'

type Props = {}

const Navbar1 = (props: Props) => {
  return (
    <NavigationMenu>
  <NavigationMenuList>
    {Navlinks.map((i)=> (
        <NavigationMenuItem>
      <NavigationMenuTrigger>{i.name}</NavigationMenuTrigger>
      <NavigationMenuContent>
        <NavigationMenuLink >{i.Link}</NavigationMenuLink>
      </NavigationMenuContent>
    </NavigationMenuItem>

    ))}
    
  </NavigationMenuList>
</NavigationMenu>
  )
}

export default Navbar1