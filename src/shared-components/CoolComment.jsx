import React from 'react'
import { Comment } from "semantic-ui-react";

export default function CoolComment({
    name,
    email,
    body
}) {
    return (
        <Comment>
            <Comment.Avatar src='https://react.semantic-ui.com/images/avatar/small/matt.jpg' />
            <Comment.Content>
                <Comment.Author as='a'>{name}</Comment.Author>
                <Comment.Metadata>
                <div>{email}</div>
                </Comment.Metadata>
                <Comment.Text>{body}</Comment.Text>
            </Comment.Content>
        </Comment>
    )
}
