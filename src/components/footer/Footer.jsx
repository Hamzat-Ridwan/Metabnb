import React from 'react'
import { ReactComponent as Meta } from '../../assets/metabnb.svg'
import { ReactComponent as Fb } from '../../assets/fb.svg'
import { ReactComponent as Inst } from '../../assets/inst.svg'
import { ReactComponent as Twitter } from '../../assets/twitter.svg'

const Footer = () => {
  return (
    <div>
        <div>
            <Meta />
            <div>
                <Fb />
                <Inst />
                <Twitter />
            </div>
        </div>
    </div>
  )
}

export default Footer