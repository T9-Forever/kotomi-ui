/**
 * title: 图片上传
 * desc: 一个简单的图片上传工具
 */

import React from 'react'
import { Upload } from '../../components/index';

const ImageUpload = () => {
    return (
        <Upload.ImageUpload
            action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
        />
    )
}

export default ImageUpload