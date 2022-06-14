import { writable } from 'svelte/store';

export const promise = writable();
export const questionAsked = writable();
export const searched = writable(false);