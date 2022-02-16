module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '0b9c9910e66c6be5b6ae9efc58d24bdd'),
  },
});
