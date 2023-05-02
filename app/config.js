const config = {
  port: process.env.PORT || 3000,
  databaseUrl: process.env.MONGODB_URI || 'mongodb+srv://dbUser:z8af2iutsMTLKXOf@cluster0.xbrq3rk.mongodb.net/?retryWrites=true&w=majority',
  JwtSecret: process.env.JWT_SECRET || 'secret'
};

export default config;
