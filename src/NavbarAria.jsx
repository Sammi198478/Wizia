import React from "react";
import {Navbar, NavbarBrand, NavbarContent, NavbarItem, NavbarMenuToggle, NavbarMenu, NavbarMenuItem, Link, Button} from "@nextui-org/react";


 function NavbarAria() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const menuItems = [
    "About Us",
    "Pricing",
    "Customers",
    "Solutions",
  ];

  return (
    <Navbar className="bg-[#02242A] bg-transparent  w-full border border-1px border-bottom-[#183A40] pb-4 max-w-[1440px]" maxWidth='xl'  shouldHideOnScroll is Blurred = {false} onMenuOpenChange={setIsMenuOpen}>
      <NavbarContent>
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="sm:hidden"
        />
        <NavbarBrand>
        <div>
            <img src="/Logo.png" alt="" />
        </div>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="hidden sm:flex gap-4 " justify="center" >
        <NavbarItem >
          <Link className="text-white"  href="#">
          About Us
          </Link>
        </NavbarItem>
        <NavbarItem isActive>
          <Link className="text-white"  href="#" >
          Pricing
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link className="text-white"  href="#">
          Customers
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link className="text-white"  href="#">
          Solutions
          </Link>
        </NavbarItem>
      </NavbarContent>
      <NavbarContent justify="end">
        <NavbarItem className="hidden lg:flex">
        <Button className='bg-[#0FF1F6] hover:bg-slate-700 hover:text-white transition duration-300' variant="bordered">Book a Demo</Button>
        </NavbarItem>
        <NavbarItem className="hidden lg:flex">
        <Button className=" transition duration-300" color="primary" variant="ghost">
            Contact Us
      </Button> 
        </NavbarItem>
      </NavbarContent>
      <NavbarMenu>
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={`${item}-${index}`}>
          <Link
              color={
                 index === menuItems.length - 1 ? "danger" : "foreground"
              }
              className="w-full"
              href="#"
              size="lg"
            >
              {item}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );
}
export default NavbarAria;