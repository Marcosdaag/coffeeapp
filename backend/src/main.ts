import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module'; // Importa el modulo inicial app

//Funcion bootstrap, donde creo con NestFactory el servidor y lo abro en el puerto 3000
async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(process.env.PORT ?? 3000);
}

//Ejecuto la funcion inicial de arriba bootstrap
bootstrap();
