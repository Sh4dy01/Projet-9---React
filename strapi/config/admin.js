module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '861083c7ebeb0f9b6e1d964f3b697185'),
  },
});
