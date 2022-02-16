'use strict';

/**
 * troc service.
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::troc.troc');
