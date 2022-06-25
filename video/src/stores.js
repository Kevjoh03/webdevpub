import { writable } from 'svelte/store';

export const chosen_video = writable();

export const video_player_is_active = writable(false);

export const video_is_fullscreen = writable(false);