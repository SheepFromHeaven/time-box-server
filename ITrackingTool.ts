export interface ITrackingTool {
  start(projectId: number, callback: any): void,
  stop(callback: any): void
}
