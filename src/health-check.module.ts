import { DynamicModule, Module } from '@nestjs/common';
import { HealthController } from './health-check.controller';
import { TerminusModule } from "@nestjs/terminus";

@Module({})
export class  HealthCheckModule {
  static forRoot(keyName: string, endpoint: string): any {
    return {
      imports: [TerminusModule],
      module: HealthCheckModule,
      controllers: [HealthController],
      providers: [
        {
          provide: 'KEY_NAME',
          useValue: keyName
        },
        {
          provide: 'ENDPOINT',
          useValue: endpoint
        }
      ],
    }
  }
}
