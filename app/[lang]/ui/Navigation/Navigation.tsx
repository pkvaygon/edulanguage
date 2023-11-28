"use client";
import {Navbar, NavbarBrand, NavbarContent, NavbarItem, Link, DropdownItem, DropdownTrigger, Dropdown, DropdownMenu, Avatar} from "@nextui-org/react";

import { usePathname } from "next/navigation";
import SwitchThemeButton from "../SwitchThemeButton";
import { AcmeLogo } from './../../../../public/logo';
import { Locale } from '../../../../i18n.config';
import LocaleSwitcher from "./locale-switcher";


export default  function Navigation({lang}: {lang: Locale}) {
  const pathname = usePathname()
return(
    <Navbar>
    <NavbarBrand>
      <AcmeLogo />
      <p className="font-bold text-inherit">ACME</p>
    </NavbarBrand>

    <NavbarContent className="hidden sm:flex gap-4" justify="center">
      <NavbarItem isActive={pathname === '/' ? true : false}>
        <Link  color={pathname === '/' ? 'secondary': 'foreground'} href="/" aria-current="page">
          Home
        </Link>
      </NavbarItem>
      <NavbarItem isActive={pathname === '/courses' ? true : false}>
        <Link color={pathname === '/courses' ? 'secondary': 'foreground'} href="/courses" aria-current="page">
          Courses
        </Link>
      </NavbarItem>
      <NavbarItem isActive={pathname === '/dictionary' ? true : false}>
        <Link color={pathname === '/dictionary' ? 'secondary': 'foreground'} href="/dictionary" aria-current="page">
          Dictionary
        </Link>
            </NavbarItem>
    </NavbarContent>
        <NavbarContent justify="end">
            <NavbarItem>
                <SwitchThemeButton/>
            </NavbarItem>
    </NavbarContent>
    <NavbarContent justify="end">
            <NavbarItem>
               <LocaleSwitcher/>
            </NavbarItem>
</NavbarContent>
    <NavbarContent as="div" justify="end">
      <Dropdown placement="bottom-end">
        <DropdownTrigger>
          <Avatar
            isBordered
            as="button"
            className="transition-transform"
            color="secondary"
            name="Jason Hughes"
            size="sm"
            src="https://i.pravatar.cc/150?u=a042581f4e29026704d"
          />
        </DropdownTrigger>
        <DropdownMenu aria-label="Profile Actions" variant="flat">
          <DropdownItem key="profile" className="h-14 gap-2">
            <p className="font-semibold">Signed in as</p>
            <p className="font-semibold">zoey@example.com</p>
          </DropdownItem>
          <DropdownItem key="settings">My Settings</DropdownItem>
          <DropdownItem key="team_settings">Team Settings</DropdownItem>
          <DropdownItem key="analytics">Analytics</DropdownItem>
          <DropdownItem key="system">System</DropdownItem>
          <DropdownItem key="configurations">Configurations</DropdownItem>
          <DropdownItem key="help_and_feedback">Help & Feedback</DropdownItem>
          <DropdownItem key="logout" color="danger">
            Log Out
          </DropdownItem>
        </DropdownMenu>
      </Dropdown>
    </NavbarContent>
  </Navbar>
    )
}