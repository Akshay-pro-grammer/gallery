// import React, { useState, useCallback } from 'react';
// import { Header, Panels, Panel } from '@enact/sandstone/Panels';
// import Icon from '@enact/sandstone/Icon';
// import ImageItem from '@enact/sandstone/ImageItem';
// import { VirtualGridList } from '@enact/sandstone/VirtualList';
// import Button from '@enact/sandstone/Button';
// import Image from '@enact/sandstone/Image';

// // Images array
// const images = Array.from({ length: 10 }, (_, i) => ({
// 	src: `https://picsum.photos/id/${i + 10}/2000`,
// 	title: `Image ${i + 1}`
// }));

// // Grid item renderer
// const renderImageItem = ({ index, onSelect, ...rest }) => {
// 	const { src, title } = images[index];
// 	return (
// 		<ImageItem
// 			{...rest}
// 			src={src}
// 			label={title}
// 			style={{ width: '90%' }}
// 			onClick={() => onSelect(index)}
// 		/>
// 	);
// };

// const GalleryView = () => {
// 	const [panelIndex, setPanelIndex] = useState(0);
// 	const [selectedIndex, setSelectedIndex] = useState(0);

// 	const goToImageViewer = useCallback((index) => {
// 		setSelectedIndex(index);
// 		setPanelIndex(1);
// 	}, []);

// 	const goBackToGallery = useCallback(() => setPanelIndex(0), []);
// 	const nextImage = () => setSelectedIndex((prev) => (prev + 1) % images.length);
// 	const prevImage = () => setSelectedIndex((prev) => (prev - 1 + images.length) % images.length);

// 	return (
// 		<Panels index={panelIndex} noAnimation>
// 			{/* Panel 0 - Gallery */}
// 			<Panel>
// 				<Header
// 					title={
// 						<span>
// 							<Icon size="large">camera</Icon> My Gallery App
// 						</span>
// 					}
// 					subtitle="Save your memories together"
// 				/>
// 				<VirtualGridList
// 					dataSize={images.length}
// 					itemRenderer={(props) => renderImageItem({ ...props, onSelect: goToImageViewer })}
// 					itemSize={{ minWidth: 300, minHeight: 200 }}
// 					direction="vertical"
// 					scrollMode="native"
// 					spacing={0}
// 					horizontalScrollbar="auto"
// 					verticalScrollbar="auto"
// 				/>
// 			</Panel>

// 			{/* Panel 1 - Fullscreen Image Viewer */}
// 			<Panel fullScreen style={{ backgroundColor: '#111' }}>
// 				<Header
// 					title={images[selectedIndex].title}
// 					subtitle="Full Screen View"
// 					onBack={goBackToGallery}
// 					showBackButton
// 				/>

// 				<div
// 					style={{
// 						position: 'absolute',
// 						top: 64,
// 						bottom: 0,
// 						left: 0,
// 						right: 0,
// 						display: 'flex',
// 						alignItems: 'center',
// 						justifyContent: 'center',
// 						backgroundColor: '#111',
// 						zIndex: 0
// 					}}
// 				>
// 					<Image
// 						src={images[selectedIndex].src}
// 						style={{
// 							maxWidth: '100%',
// 							maxHeight: '100%',
// 							objectFit: 'contain',
// 							boxShadow: '0 4px 32px #000c'
// 						}}
// 					/>
// 				</div>

// 				<Button
// 					onClick={prevImage}
// 					style={{
// 						position: 'absolute',
// 						left: 16,
// 						top: '50%',
// 						transform: 'translateY(-50%)',
// 						zIndex: 1
// 					}}
// 					size="large"
// 				>
// 					<Icon>backward</Icon>
// 				</Button>

// 				<Button
// 					onClick={nextImage}
// 					style={{
// 						position: 'absolute',
// 						right: 16,
// 						top: '50%',
// 						transform: 'translateY(-50%)',
// 						zIndex: 1
// 					}}
// 					size="large"
// 				>
// 					<Icon>forward</Icon>
// 				</Button>
// 			</Panel>
// 		</Panels>
// 	);
// };

// export default GalleryView;
