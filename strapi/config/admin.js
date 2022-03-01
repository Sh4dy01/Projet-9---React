module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', 'ef9859240194a8cbd07e54bd60c95446'),
  },
});
