import { Controller, Get, Inject } from '@nestjs/common';
import { HealthCheckService, HttpHealthIndicator, HealthCheck } from '@nestjs/terminus';

@Controller('health')
export class HealthController {
  constructor(
    private health: HealthCheckService,
    private http: HttpHealthIndicator,

    @Inject('KEY_NAME')
    private readonly KEY_NAME: string,

    @Inject('ENDPOINT')
    private readonly ENDPOINT: string
  ) {}

  @Get()
  @HealthCheck()
  check() {
    return this.health.check([
      () => this.http.pingCheck(this.KEY_NAME, this.ENDPOINT),
    ]);
  }
}
