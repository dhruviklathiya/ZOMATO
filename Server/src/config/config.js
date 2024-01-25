const Joi = require("joi");
const dotenv = require("dotenv");

dotenv.config();

const envVarsSchema = Joi.object({
  PORT: Joi.number().default(3000),
  MONGODB_URL: Joi.string().trim().description("Mongodb url"),
  JWT_SECRET_KEY: Joi.string()
    .description("Jwt sectreat key")
    .default("thisisjwtsecreat_key"),
  SMTP_HOST: Joi.string().description("server that will send the emails"),
  SMTP_PORT: Joi.number().description("port to connect to the email server"),
  SMTP_USERNAME: Joi.string().description("username for email server"),
  SMTP_PASSWORD: Joi.string().description("password for email server"),
  EMAIL_FROM: Joi.string().description(
    "the from field in the emails sent by the app"
  ),
}).unknown();
// Method 1:
const validation_result = envVarsSchema.validate(process.env)
const envVars = validation_result.value
const config_error = validation_result.error
if(config_error){
  console.log("Config error:"+config_error);
}
// Method 2:
// const { value: envVars, error } = envVarsSchema
//   .prefs({ errors: { label: "key" } })
//   .validate(process.env);

// if (error) {
//   console.log("Config Error: ", error);
// }

module.exports = {
  port: envVars.PORT,
  mongodb: {
    url: envVars.MONGODB_URL,
    options: {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    },
  },
  jwt: {
    secret_key: envVars.JWT_SECRET_KEY,
  },
  email: {
    smtp: {
      host: envVars.SMTP_HOST,
      port: envVars.SMTP_PORT,
      auth: {
        user: envVars.SMTP_USERNAME,
        pass: envVars.SMTP_PASSWORD,
      },
    },
    from: envVars.EMAIL_FROM,
  },
};