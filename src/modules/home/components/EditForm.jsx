import React, {Fragment } from 'react'
import { Form, Input, TextArea, Button } from "semantic-ui-react";

export default function EditForm({
    title,
    body,
    onInputChange
}) {
    return (
        <Fragment>
            <Form>
                <Form.Field
                    name="title"
                    control={Input}
                    placeholder="The title"
                    value={title}
                    onChange={onInputChange}
                />
                <Form.Field
                    name="body"
                    control={TextArea}
                    placeholder='Spit your words...'
                    value={body}
                    onChange={onInputChange}
                />
            </Form>
        </Fragment>
    )
}
