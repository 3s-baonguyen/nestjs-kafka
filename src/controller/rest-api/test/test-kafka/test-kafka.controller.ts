import { Body, Controller, Get, Post, Req, Res } from "@nestjs/common";
import { Response, Request } from "express";
import { KafkaProducerService } from "src/service/kafka-producer";
import { KafkaProducerEventName, topic } from "../../../../service/kafka-producer/kafka.producer.i";

@Controller("test-kafka")
export class TestKafkaController {
  constructor(private kafkaProducer: KafkaProducerService) {}
  @Get()
  public start(@Res() res: Response) {
    const result = {
      name: "bao",
      age: "29",
    };

    setTimeout(() => {
      res.status(200).json(result);
    });
  }

  @Post("/save")
  public create(@Body() body: any, @Res() res: Response, @Req() req: Request) {
    const rid = req.headers["x-requestid"] as string;

    const message = {
      rid,
      eventName: KafkaProducerEventName.TEST_KAFKA,
      data: body,
    };

    this.kafkaProducer.send(topic, message);
    const tmpResult = {
      ok: "ok",
    };

    setTimeout(() => {
      res.status(201).json(tmpResult);
    }, 500);
  }
}
