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
    <div className="w-full flex justify-center bg-blue-700 p-2">
      <NavigationMenu className="max-w-full w-full">
        <NavigationMenuList className="w-full justify-center">
          {Navlinks.map((i) => (
            <NavigationMenuItem key={i.name}>
              <NavigationMenuTrigger>{i.name}</NavigationMenuTrigger>
              <NavigationMenuContent>
                <NavigationMenuLink>{i.Link}</NavigationMenuLink>
              </NavigationMenuContent>
            </NavigationMenuItem>
          ))}
        </NavigationMenuList>
      </NavigationMenu>
    </div>
  
  )
}

export default Navbar1