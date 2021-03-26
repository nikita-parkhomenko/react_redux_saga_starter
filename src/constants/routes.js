
export const LAYOUT_PUBLIC = '/public';
export const LAYOUT_PRIVATE = '/private';

// public routes
export const LOG_IN = {
    path: `${LAYOUT_PUBLIC}/log-in`,
    link: () => `${LAYOUT_PUBLIC}/log-in`,
}

// private routes
export const WELCOME = {
    path: `${LAYOUT_PRIVATE}/welcome`,
    link: () => `${LAYOUT_PRIVATE}/welcome`,
}

export const USER = {
    path: `${LAYOUT_PRIVATE}/user`,
    link: () => `${LAYOUT_PRIVATE}/user`,
}
