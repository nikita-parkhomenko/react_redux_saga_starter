
export const LAYOUT_PUBLIC = '/public';
export const LAYOUT_PRIVATE = '/private';

// public routes
export const logIn = {
    path: '/log-in',
    link: () => `${LAYOUT_PUBLIC}/log-in`,
}

// private routes
export const welcome = {
    path: `${LAYOUT_PRIVATE}/welcome`,
    link: () => `${LAYOUT_PRIVATE}/welcome`,
}

export const employees = {
    path: `${LAYOUT_PRIVATE}/employees`,
    link: () => `${LAYOUT_PRIVATE}/employees`,
}

export const projects = {
    path: `${LAYOUT_PRIVATE}/projects`,
    link: () => `${LAYOUT_PRIVATE}/projects`,
}
