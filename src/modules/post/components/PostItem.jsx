import React from 'react'
import { Item } from "semantic-ui-react";

export default function PostItem({
    id,
    title,
    body,
    onSelect
}) {
    return (
        <Item>
            <Item.Content>
                <Item.Header as='a' onClick={() => onSelect(id)}>{title}</Item.Header>
                <Item.Description>
                <p>{body}</p>
                </Item.Description>
            </Item.Content>
        </Item>
    )
}
