import { getImageData } from '$lib/images/data';

export function load() {
	const images = getImageData('photos');
	return { images };
}
