export const trailingSlash = 'always';

export const load = async ({ url: { pathname } }) => {
	return { pathname };
};
