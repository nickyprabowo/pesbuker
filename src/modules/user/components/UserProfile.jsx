import React, { Fragment } from 'react'
import { Header, List, Icon } from "semantic-ui-react";

// KOmponen untuk menampilkan profil user
export default function UserProfile({
    username,
    name,
    address,
    email,
    phone,
    company
}) {
    return (
        <Fragment>
            <Header as='h2' icon textAlign='center'>
                <Icon name='user' circular/>
                <Header.Content>
                {username}
                <Header.Subheader>{name}</Header.Subheader>
                </Header.Content>
            </Header>
            <List>
                <List.Item icon='marker' content={address} />
                <List.Item icon='phone' content={phone} />
                <List.Item
                    icon='mail'
                    content={<a href={email}>{email}</a>}
                />
                <List.Item icon='briefcase' content={company} />
            </List>
        </Fragment>
    )
}
