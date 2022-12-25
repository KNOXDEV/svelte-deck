import type { PageLoad } from './$types';

export const load: PageLoad = ({ data }) => {
	const slides = [
		{
			transition: 'fly',
			component: ''
		},
		{
			title: 'This is a big slide 2',
			content: 'description text here'
		},
		{
			title: 'This is a big slide 3',
			content: 'description text here'
		},
		{
			title: 'This is a big slide 4',
			content: 'description text here'
		},
		{
			title: 'This is a big slide 5',
			content: 'description text here'
		},
		{
			title: 'This is a big slide 6',
			content: 'description text here'
		}
	];

	return {
		currentSlide: slides[data.currentSlideIndex - 1],
		currentSlideIndex: data.currentSlideIndex,
		totalSlides: data.totalSlides
	};
};
