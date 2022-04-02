import { DynamicModule } from '@nestjs/common';
export declare class HealthCheckModule {
    static forRoot(keyName: string, endpoint: string): DynamicModule;
}
