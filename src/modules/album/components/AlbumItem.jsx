import React from 'react';
import { Card, Image } from "semantic-ui-react";
import blankImage from  "../../../assets/img/no-image.svg"

export default function AlbumItem({
    title
}) {
    return (
        <Card>
            <Image src={blankImage} wrapped ui={false} />
            <Card.Content>
                <Card.Description>{title}</Card.Description>
            </Card.Content>
        </Card>
    )
}
