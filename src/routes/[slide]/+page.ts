import type { PageLoad } from './$types';
export const load: PageLoad = ({ data }) => {
	return { currentSlideIndex: data.currentSlideIndex, totalSlides: data.totalSlides };
};
