module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', 'a7050fe882c900d074f788a21cac9233'),
  },
});
