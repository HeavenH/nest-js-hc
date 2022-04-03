<div align="center">
  <h1>Nest js Health Check</h1>
  <a href="https://www.npmjs.com/package/nest-js-hc"><img src="https://img.shields.io/npm/v/prisma.svg?style=flat" /></a>
  <a href="https://github.com/nest-js-hc/nestjs-hc/blob/main/LICENSE"><img src="https://img.shields.io/badge/license-Apache%202-blue" /></a>
  <br />
  <hr />
</div>

## What is a health check?

**Healthchecks** are crucial when it comes to complex backend setups. 
In a nutshell, a health check in the realm of web development usually 
consists of a special address, for example, https://my-website.com/health/readiness. 

A service or a component of your infrastructure (e.g., Kubernetes) checks this address 
continuously. Depending on the HTTP status code returned from a GET request to 
this address the service will take action when it receives an "unhealthy" response.

## How does HC work
Import the module passing a key name and a target and the HttpModule from **@nestjs/axios**

```typescript
@Module({
  imports: [HealthCheckModule.forRoot('key name', 'target'), HttpModule],
})
```

## Usage
If everything is set up correctly, you can access the healthcheck on http://localhost:3000/health.

```json
{
  "status": "ok",
  "info": {
    "database": {
      "status": "up"
    }
  },
  "details": {
    "database": {
      "status": "up"
    }
  }
}
```
