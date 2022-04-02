import { HealthCheckService, HttpHealthIndicator } from '@nestjs/terminus';
export declare class HealthController {
    private health;
    private http;
    private readonly KEY_NAME;
    private readonly ENDPOINT;
    constructor(health: HealthCheckService, http: HttpHealthIndicator, KEY_NAME: string, ENDPOINT: string);
    check(): Promise<import("@nestjs/terminus").HealthCheckResult>;
}
