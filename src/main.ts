import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { SwaggerConfig } from './swagger.config';
import * as session from 'express-session';
import * as passport from 'passport';
import { NestExpressApplication } from '@nestjs/platform-express';

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);

  // Настройка CORS
  app.enableCors({
    origin: 'https://shop-client-de4f.onrender.com',
    credentials: true, // если нужны cookies/Credentials
  });

  // Настройка сессий и Passport
  app.use(session({
    secret: 'keyword',
    resave: false,
    saveUninitialized: false,
    cookie: {
      secure: true, // если вы используете HTTPS
      maxAge: 86400000 // 24 часа
    }
  }));
  app.use(passport.initialize());
  app.use(passport.session());

  // Настройка Swagger
  const config = new DocumentBuilder()
    .setTitle('API Documentation')
    .setDescription('API description')
    .setVersion('1.0')
    .addTag('api')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('swagger', app, document);

  await app.listen(process.env.PORT || 3000);
}

bootstrap();
