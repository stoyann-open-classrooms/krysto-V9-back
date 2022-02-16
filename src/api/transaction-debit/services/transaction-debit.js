'use strict';

/**
 * transaction-debit service.
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::transaction-debit.transaction-debit');
