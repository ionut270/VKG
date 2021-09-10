import React from 'react'

import './shop.css'
import { Image } from 'antd'

import image_slide from "../../props/1.jpeg";

export default class Shop extends React.Component {
  constructor() {
    super()
  }
  componentDidMount() {}

  componentDidUpdate() {}

  render() {
    return (
      <>
        This is a test
        <div className="product_slides">
          <Image className= "normal_object"
            src= {image_slide   }
          />
          <div>New</div>
        </div>
      </>
    )
  }
}
