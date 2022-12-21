import { Injectable, OnModuleDestroy } from '@nestjs/common';
import { ServerKafka } from '@nestjs/microservices';

@Injectable()
export class KafkaConsumerService
  extends ServerKafka
  implements OnModuleDestroy
{
  constructor() {
    super({
      client: {
        clientId: 'notifications',
        brokers: ['great-buffalo-9199-us1-kafka.upstash.io:9092'],
        sasl: {
          mechanism: 'scram-sha-256',
          username:
            'Z3JlYXQtYnVmZmFsby05MTk5JLJbtLuede9jCgBYzUcFuXhzp-zLT4k-VZtTKCE',
          password: 'de6098ae7b104ac192adc13c4ff74046',
        },
        ssl: true,
      },
    });
  }
  async onModuleDestroy() {
    await this.close();
  }
}
