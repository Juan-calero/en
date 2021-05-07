import React from 'react'
import OQueFacoBG from './bg/OQueFacoBG'
import OQueFacoItems from './items/OQueFacoItems'

function OQueFaco() {
    return (
        <section id="oquefaco" className="oQueFaco">
            <h2>O Que Faço</h2>
            <OQueFacoItems />
            <OQueFacoBG />
        </section>
    )
}

export default OQueFaco
