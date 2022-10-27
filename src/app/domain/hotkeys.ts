import { ExtendedKeyboardEvent, Hotkey } from 'angular2-hotkeys';

const KEY_NEXT_EN = 'j';
export const KEYS_NEXT = [KEY_NEXT_EN];

const KEY_PREV_EN = 'k';
export const KEYS_PREV = [KEY_PREV_EN];

const KEY_ADD_EN = 'a';
export const KEYS_ADD = [KEY_ADD_EN];

const KEY_GO_ALL_EN = 'g t';
export const KEYS_GO_ALL = [KEY_GO_ALL_EN];

const KEY_GO_ACTIVE_EN = 'g a';
export const KEYS_GO_ACTIVE = [KEY_GO_ACTIVE_EN];

const KEY_GO_FINISHED_EN = 'g f';
export const KEYS_GO_FINISHED = [KEY_GO_FINISHED_EN];

const KEY_START_STOP_EN = 's';
export const KEYS_START_STOP = [KEY_START_STOP_EN];

const KEY_MARK_FINISHED_EN = 'm f';
export const KEYS_MARK_FINISHED = [KEY_MARK_FINISHED_EN];

const KEY_MARK_ACTIVE_EN = 'm a';
export const KEYS_MARK_ACTIVE = [KEY_MARK_ACTIVE_EN];

const KEY_RENAME_EN = 'r t';
export const KEYS_RENAME = [KEY_RENAME_EN];

const KEY_DELETE_TASK_EN = 'd t';
export const KEYS_DELETE_TASK = [KEY_DELETE_TASK_EN];

export const hotkey = (keys: string | string[], description: string, cb: (e: ExtendedKeyboardEvent) => any) =>
  new Hotkey(keys, (e) => (cb(e), e), [], description);
