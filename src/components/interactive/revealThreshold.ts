/**
 * Scroll depth, in pixels, at which the fixed mobile affordances (the call/apply
 * action bar and the chat launcher) reveal themselves.
 *
 * Both share one value on purpose: below it the visitor is still reading the hero,
 * where the primary CTA sits low on a phone screen and anything pinned to the bottom
 * right lands on top of it. Past it, the hero CTA has scrolled away and the fixed
 * controls are the only way to act without scrolling back.
 */
export const MOBILE_REVEAL_SCROLL_Y = 420;
