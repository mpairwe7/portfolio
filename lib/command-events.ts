/**
 * Tiny pub/sub over window events for opening the command palette from
 * anywhere in the tree (e.g. the mobile nav trigger) without lifting state.
 */

export const OPEN_COMMAND_PALETTE = "command-palette:open"

export function openCommandPalette() {
  if (typeof window === "undefined") return
  window.dispatchEvent(new CustomEvent(OPEN_COMMAND_PALETTE))
}
