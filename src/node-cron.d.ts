declare module 'node-cron' {
  export function schedule(
    cronExpression: string,
    task: () => void,
    options?: {
      scheduled?: boolean;
      timezone?: string;
    }
  ): ScheduledTask;

  export interface ScheduledTask {
    start(): this;
    stop(): this;
    destroy(): this;
  }
}
