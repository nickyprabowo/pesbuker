import React from 'react'
import { Dimmer, Loader } from "semantic-ui-react";

// komponen untuk menampilkan indikator Loading
export default function Loading() {
    return (
        <Dimmer active inverted>
	        <Loader inverted content='Loading' size='big'/>
	    </Dimmer> 
    )
}
