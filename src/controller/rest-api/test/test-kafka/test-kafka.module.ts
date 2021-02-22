import { HttpModule, Module } from "@nestjs/common";
import { KafkaProducerModule } from "src/service/kafka-producer";
import { TestKafkaController } from "./test-kafka.controller";

@Module({
  controllers: [TestKafkaController],
  imports: [
    KafkaProducerModule,
    HttpModule.register({
      timeout: 5000,
      proxy: false,
    }),
  ],
})
export class TestKafkaModule {}
