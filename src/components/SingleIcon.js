'use client'
import React from 'react'

const SingleIcon = ({ icon: IconComponent, text , iconColor}) => {
    return (
        <div>
            <div className={`d-flex align-items-center p-2 gap-2 iconsHeight  `}>
                <IconComponent fontSize={20} style={{ color: iconColor }} />
                <p className='p-0 m-0 iconText'>{text}</p>
            </div>
        </div>
    )
}

export default SingleIcon;
