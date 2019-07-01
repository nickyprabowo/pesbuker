import React from 'react'
import { Item, Button } from "semantic-ui-react";

export default function PostItem({
    id,
    title,
    body,
    editable = false,
    deletable= false,
    onDelete,
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
                <Item.Extra>
                    {editable &&
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
                    }
                    {deletable &&
                    <Button
                        content='Delete'
                        icon='trash'
                        labelPosition='left'
                        size="mini"
                        color="red"
                        onClick={() => onDelete({
                            id,
                            title,
                            body
                        })}
                    />
                    }
                </Item.Extra>
            </Item.Content>
        </Item>
    )
}
