import React from 'react';
import Icon from '@enact/sandstone/Icon';
import Button from '@enact/sandstone/Button';
import Image from '@enact/sandstone/Image';
import images from '../components/Images';

export default function ImageViewerFullScreen({ index, onBack, onNext, onPrev }) {
    const { src,_,imgw,imgh } = images[index];

    return (
        <div
            style={{
                position: 'fixed',
                inset: 0,
                // width: '100vw',
                // height: '100vh',
                margin: 0,
                padding: 0,
                background: '#111',
                zIndex: 9999,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
            }}
        >
            {/* THE IMAGE */}
                <Image
                    src={src}
                    style={{
                         width: `${imgw}px` ,
                        height: `${imgh}px` ,
                        // objectFit: 'contain',
                        background: '#111',
                        boxShadow: '0 4px 32px #000c',
                        // position: 'absolute',
                        left: 100,
                        top: 100,
                        right: 100,
                        bottom: 100,
                    }}
                />
            {/* NAV BUTTONS */}
            <Button
                onClick={onPrev}
                size="large"
                style={{
                    position: 'absolute',
                    left: 32,
                    top: '50%',
                    transform: 'translateY(-50%)',
                    color: '#fff',
                    background: 'rgba(0,0,0,0.5)'
                }}
                aria-label="Previous"
            >
                <Icon>backward</Icon>
            </Button>
            <Button
                onClick={onNext}
                size="large"
                style={{
                    position: 'absolute',
                    right: 32,
                    top: '50%',
                    transform: 'translateY(-50%)',
                    color: '#fff',
                    background: 'rgba(0,0,0,0.5)'
                }}
                aria-label="Next"
            >
                <Icon>forward</Icon>
            </Button>
            <Button
                onClick={onBack}
                size="large"
                style={{
                    position: 'absolute',
                    left: '50%',
                    bottom: 48,
                    transform: 'translateX(-50%)',
                    color: '#fff',
                    background: 'rgba(0,0,0,0.7)'
                }}
                aria-label="Back"
            >
                <Icon>arrowhookleft</Icon>
            </Button>
        </div>
    );
}
