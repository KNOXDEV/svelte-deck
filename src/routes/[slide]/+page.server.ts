import type { PageServerLoad } from './$types';
import { redirect } from '@sveltejs/kit';

const MAX_SLIDES = 6;

export const load: PageServerLoad = ({ params }) => {
	const slideNumber = parseInt(params.slide);

	if (isNaN(slideNumber) || slideNumber > MAX_SLIDES || slideNumber < 1) {
		throw redirect(307, '/1');
	}

	return {
		totalSlides: MAX_SLIDES,
		currentSlideIndex: slideNumber
	};
};
