import React from 'react'
import { Button, Container, Dropdown, Menu } from 'semantic-ui-react'
import Messages from './Messages'
export default function Navi() {
    return (
        <div>
            <Menu inverted fixed ="top">
                <Container>
                    <Menu.Item
                        name='home'

                    />
                    <Menu.Item
                        name='messages'

                    />

                    <Menu.Menu position='right'>
                       <Messages></Messages>

                        <Menu.Item>
                            <Button primary>Sign Up</Button>
                        </Menu.Item>
                    </Menu.Menu>
                </Container>
            </Menu>
        </div>
    )
}
