import React from 'react'

const SvgCalc = ({ active = false }) => {
    return (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g clip-path="url(#clip0_3357_48125)">
                <rect x="2.5" y="2.5" width="19" height="19" rx="5.5" stroke={active ? "#D3D3D3" : "#ff7901"} />
                <path d="M8.28711 8.50391V10.6836H7.17969V8.50391H5.22852V7.40234H7.17969V5.38672H8.28711V7.40234H10.2383V8.50391H8.28711Z" fill={active ? "#D3D3D3" : "#ff7901"} />
                <path d="M7.14453 15.9824L5.5918 14.3945L6.35938 13.5977L7.92383 15.1914L9.48828 13.5977L10.2559 14.3945L8.70312 15.9824L10.2676 17.5762L9.49414 18.373L7.92383 16.7734L6.35352 18.373L5.58008 17.5762L7.14453 15.9824Z" fill={active ? "#D3D3D3" : "#ff7901"} />
                <path d="M15.2754 13.9082C15.2754 13.6895 15.3516 13.502 15.5039 13.3457C15.6602 13.1895 15.8457 13.1113 16.0605 13.1113C16.2793 13.1113 16.4648 13.1895 16.6172 13.3457C16.7734 13.502 16.8516 13.6895 16.8516 13.9082C16.8516 14.123 16.7734 14.3086 16.6172 14.4648C16.4648 14.6172 16.2793 14.6934 16.0605 14.6934C15.8457 14.6934 15.6602 14.6172 15.5039 14.4648C15.3516 14.3125 15.2754 14.127 15.2754 13.9082ZM13.3418 16.4863V15.3906H18.7383V16.4863H13.3418ZM15.2754 17.998C15.2754 17.7832 15.3516 17.5977 15.5039 17.4414C15.6602 17.2852 15.8457 17.207 16.0605 17.207C16.2793 17.207 16.4648 17.2852 16.6172 17.4414C16.7734 17.5977 16.8516 17.7832 16.8516 17.998C16.8516 18.2129 16.7734 18.3984 16.6172 18.5547C16.4648 18.7109 16.2793 18.7891 16.0605 18.7891C15.8457 18.7891 15.6602 18.7129 15.5039 18.5605C15.3516 18.4082 15.2754 18.2207 15.2754 17.998Z" fill={active ? "#D3D3D3" : "#ff7901"} />
                <line x1="13.3398" y1="8" x2="18.7398" y2="8" stroke={active ? "#D3D3D3" : "#ff7901"} />
            </g>
            <defs>
                <clipPath id="clip0_3357_48125">
                    <rect width="24" height="24" fill="white" />
                </clipPath>
            </defs>
        </svg>

    )
}

export default SvgCalc