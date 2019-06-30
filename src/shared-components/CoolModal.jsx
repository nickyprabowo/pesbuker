import React from 'react'
import { Modal, Header, Button } from "semantic-ui-react";

export default function CoolModal({
    modalOpen,
    handleClose,
    data,
    renderContent
}) {
    return (
        <Modal
            open={modalOpen}
            onClose={() => handleClose({})}
            basic
            size='tiny'
        >
            <Header icon='image' content={data.title} />
            <Modal.Content>
                {renderContent(data)}
            </Modal.Content>
            <Modal.Actions>
                <Button onClick={() => handleClose({})} inverted>Close</Button>
            </Modal.Actions>
        </Modal>
    )
}
