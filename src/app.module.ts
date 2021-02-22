import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { KafkaController } from './controller/kafka/kafka.controller';
import { RestApiModule } from './controller/rest-api/rest-api.module';
import { KafkaProducerModule } from './service/kafka-producer/kafka-producer.module';

@Module({
  imports: [RestApiModule, KafkaProducerModule],
  controllers: [AppController, KafkaController],
  providers: [AppService],
})
export class AppModule {}
