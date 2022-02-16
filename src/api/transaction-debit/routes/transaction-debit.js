'use strict';

/**
 * transaction-debit router.
 */

const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = createCoreRouter('api::transaction-debit.transaction-debit');
