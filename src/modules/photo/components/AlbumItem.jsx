import React from 'react';
import { Card, Image } from "semantic-ui-react";

export default function AlbumItem({
    id,
    title,
    thumbnail,
    onSelect
}) {
    return (
        <Card onClick={() => onSelect(id)}>
            <Image src={thumbnail} wrapped ui={false} />
            <Card.Content>
                <Card.Description>{title}</Card.Description>
            </Card.Content>
        </Card>
    )
}
