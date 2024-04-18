import * as session from 'express-session';
import * as passport from 'passport';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { tr } from '@faker-js/faker';
const cors = require('cors');
const express = require('express');
const app = express();

const corsOptions = {
  origin: 'https://shop-client-de4f.onrender.com'  // Разрешите только запросы с этого источника
};

app.use(cors(corsOptions));

// Остальная часть вашего кода сервера

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.use(
    session({
      secret: 'keyword',
      resave: false,
      saveUninitialized: false,
    }),
  );
  app.use(passport.initialize());
  app.use(passport.session());

  const config = new DocumentBuilder()
  .setTitle('Над сервером работал Емиж Алан')
  .setDescription('api documentation')
  .setVersion('1.0')
  .addTag('api')
  .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('swagger', app, document);

  await app.listen(process.env.PORT || 3000);
}
bootstrap();


