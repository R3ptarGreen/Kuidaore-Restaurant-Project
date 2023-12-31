import Img from '../../atoms/Img/Img';
import { useEffect, useState } from 'react';
import './GalleryContainer.scss';
import galleryData from '../../../db/GalleryAltImg.json'
const GalleryContainer = () => {
	const [data, setData] = useState([]);
	const [modalOpen, setModalOpen] = useState(false);
	const [selectedImg, setSelectedImg] = useState('');

	useEffect(() => {
		setData(galleryData)
	}, []);

	const handleModal = srcImg => {
		setModalOpen(true);
		setSelectedImg(srcImg);
	};

	const closeModal = () => {
		setModalOpen(false);
	};
	console.log(modalOpen);
	return (
		<div className='gallery'>
			<div className='gallery__container'>
				{data.map((item, index) => {
					return (
						<Img
							className={'gallery__img'}
							key={index}
							altImg={item.altImg}
							onClick={() => handleModal(item.altImg)}
						/>
					);
				})}
			</div>
			<div
				className={`gallery__modal ${
					modalOpen ? 'gallery__modal--active' : ''
				}`}
				onClick={closeModal}
			>
				<Img className={'gallery__modalImg'} altImg={selectedImg} />
			</div>
		</div>
	);
};

export default GalleryContainer;
