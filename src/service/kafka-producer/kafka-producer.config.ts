import { KafkaOptions, Transport } from "@nestjs/microservices";
import { KafkaConfig } from "../../enviroment/kafka";
import { logLevel } from "@nestjs/microservices/external/kafka.interface";

export class KafkaProducerConfig {
  private readonly options: { name: string } & KafkaOptions;

  constructor() {
    const kafka = new KafkaConfig();

    this.options = {
      name: "KAFKA_PRODUCER",
      transport: Transport.KAFKA,
      options: {
        client: {
          clientId: kafka.clientId,
          brokers: kafka.brokers,
          ssl: kafka.ssl,
          sasl: kafka.sasl,
          logLevel: logLevel.INFO,
        },
        producer: {
          allowAutoTopicCreation: false,
          idempotent: false,
        },
      },
    };
  }

  public get(): { name: string } & KafkaOptions {
    return this.options;
  }
}
