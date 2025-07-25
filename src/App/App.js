// App.js
import React, { useState } from 'react';
import { Panels } from '@enact/sandstone/Panels';
import GalleryPanel from '../views/GalleryPanel';
import ImageViewerPanel from '../views/ImageViewerPanel';
import images from '../components/Images';
import ThemeDecorator from '@enact/sandstone/ThemeDecorator';

function App() {
	const [panelIndex, setPanelIndex] = useState(0);
	const [selectedIndex, setSelectedIndex] = useState(null);

	const handleSelect = (idx) => {
		setSelectedIndex(idx);
		setPanelIndex(1);
	};

	const handleBackToGallery = () => {
		setPanelIndex(0);
		// setSelectedIndex(null);
	};

	const handleNext = () =>
		setSelectedIndex((prev) => (prev + 1) % images.length);
	const handlePrev = () =>
		setSelectedIndex((prev) => (prev - 1 + images.length) % images.length);

	return (
		<Panels index={panelIndex} noCloseButton>
			<GalleryPanel onSelect={handleSelect} />
			<ImageViewerPanel
				index={selectedIndex ?? 0}
				onBack={handleBackToGallery}
				onNext={handleNext}
				onPrev={handlePrev}
			/>
		</Panels>
	);
}

export default ThemeDecorator(App);
