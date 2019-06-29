import React from 'react'
import { Item } from "semantic-ui-react";

export default function PostItem({
    id,
    title,
    body
}) {
    return (
        <Item key={id}>
            <Item.Content>
                <Item.Header as='a'>{title}</Item.Header>
                <Item.Description>
                <p>{body}</p>
                </Item.Description>
            </Item.Content>
        </Item>
    )
}
