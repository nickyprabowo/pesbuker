import React from 'react'
import { Comment } from "semantic-ui-react";
import blankProfile from "../../../assets/img/blank-profile.png"

export default function CoolComment({
    name,
    email,
    body,
    onEdit,
    onDelete
}) {
    return (
        <Comment>
            <Comment.Avatar src={blankProfile} />
            <Comment.Content>
                <Comment.Author as='a'>{name}</Comment.Author>
                <Comment.Metadata>
                <div>{email}</div>
                </Comment.Metadata>
                <Comment.Text>{body}</Comment.Text>
                <Comment.Actions>
                    <Comment.Action>Edit</Comment.Action>
                    <Comment.Action>Delete</Comment.Action>
                </Comment.Actions>
            </Comment.Content>
        </Comment>
    )
}
