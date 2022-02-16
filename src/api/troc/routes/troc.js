"use strict";

/**
 * troc router.
 */

const { createCoreRouter } = require("@strapi/strapi").factories;

module.exports = createCoreRouter("api::troc.troc");

// ============================================================
// module.exports = {
//   routes: [
//     {
//       // Path defined with a URL parameter
//       method: "POST",
//       path: "/trocs/:id/comment",
//       handler: "troc.comment",
//     },
//   ],
// };
