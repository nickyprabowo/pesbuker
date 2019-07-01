import React from 'react'
import { Item, Button } from "semantic-ui-react";

export default function PostItem({
    id,
    title,
    body,
    editable = false,
    onEdit,
    onSelect
}) {
    return (
        <Item>
            <Item.Content>
                <Item.Header as='a' onClick={() => onSelect(id)}>{title}</Item.Header>
                <Item.Description>
                <p>{body}</p>
                </Item.Description>
                {editable &&
                <Item.Extra>
                    <Button
                        content='Edit'
                        icon='pencil'
                        labelPosition='left'
                        size="mini"
                        onClick={() => onEdit({
                            id,
                            title,
                            body
                        })}
                    />
                </Item.Extra>
                }
            </Item.Content>
        </Item>
    )
}
