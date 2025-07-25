// GalleryPanel.js
import React from 'react';
import { Panel, Header } from '@enact/sandstone/Panels';
import Icon from '@enact/sandstone/Icon';
import ImageItem from '@enact/sandstone/ImageItem';
import { VirtualGridList } from '@enact/sandstone/VirtualList';
import images from '../components/Images';

function renderImageItem({ index, onSelect, ...rest }) {
    const { src, title } = images[index];
    return (
        <ImageItem
            {...rest}
            src={src}
            label={title}
            style={{ width: '90%' }}
            onClick={() => onSelect(index)}
        />
    );
}

export default function GalleryPanel({ onSelect }) {
    return (
        <Panel>
            <Header
                title={
                    <span>
                        <Icon size="large">camera</Icon> My Gallery App
                    </span>
                }
                subtitle="Save your memories together"
            />
            <VirtualGridList
                dataSize={images.length}
                itemRenderer={(props) => renderImageItem({ ...props, onSelect })}
                itemSize={{ minWidth: 300, minHeight: 200 }}
                direction="vertical"
                spacing={0}
                scrollMode="native"
                horizontalScrollbar="auto"
                verticalScrollbar="auto"
            />
        </Panel>
    );
}
