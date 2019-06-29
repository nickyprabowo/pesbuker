import React from 'react';
import { Card, List } from "semantic-ui-react";

export default function UserCard({
    userId,
    username,
    email,
    address,
    phone,
    website,
    company,
    handleDetail
}) {
    return (
        <Card key={userId} onClick={() => handleDetail(userId)}>
            <Card.Content>
                <Card.Header>{username}</Card.Header>
                <Card.Meta>{website}</Card.Meta>
                <Card.Description>
                    <List>
                        <List.Item icon='marker' content={address} />
                        <List.Item icon='phone' content={phone} />
                        <List.Item
                            icon='mail'
                            content={<a href={email}>{email}</a>}
                        />
                        <List.Item icon='briefcase' content={company} />
                    </List>
                </Card.Description>
            </Card.Content>
        </Card>
    )
}
