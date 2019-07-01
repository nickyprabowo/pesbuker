import React from 'react'
import { Form, Input, TextArea, Button } from "semantic-ui-react";

export default function CommentForm({
    name,
    email,
    body,
    onInputChange,
    onSubmit
}) {
    return (
        <Form>
            <Form.Field
                name="name"
                control={Input}
                placeholder="Your name"
                value={name}
                onChange={onInputChange}
            />
            <Form.Field
                name="email"
                control={Input}
                placeholder="Your email"
                value={email}
                onChange={onInputChange}
            />
            <Form.Field
                name="body"
                control={TextArea}
                placeholder='Spit your words...'
                value={body}
                onChange={onInputChange}
            />
            <Button primary onClick={onSubmit}>Submit</Button>
        </Form>
    )
}
