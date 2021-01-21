import React from "react";
import {Dropdown, DropdownItem, DropdownMenu, Image, Menu} from "semantic-ui-react";
import {Link} from "react-router-dom";

export default function SignedInMenu ({setAuthenticated}){
    return(
        <Menu.Item position='right'>
           <Image avatar spaced='right' src='/assets/user.png' />
           <Dropdown pointing='top left' text='Javid'>
            <DropdownMenu>
                <DropdownItem as={Link} to='/createEvent' text='Create Event' icon='plus'/>
                <DropdownItem  text='My Profile' icon='user'/>
                <DropdownItem onClick={() => setAuthenticated(false)} text='Sign Out' icon='power'/>
            </DropdownMenu>
           </Dropdown>
        </Menu.Item>
    )
}