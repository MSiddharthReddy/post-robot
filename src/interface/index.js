
import { getAncestor } from '../lib/windows';

export * from './client';
export * from './server';
export * from './config';

export let parent = getAncestor();

export { resetListeners as reset } from '../drivers';

export { openBridge, bridgeRequired, linkUrl } from '../bridge';

export { util } from '../lib/util';
module.exports.winutil = require('../lib/windows');
