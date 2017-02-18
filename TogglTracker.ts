import { ITrackingTool } from './ITrackingTool';
let TogglClient = require('toggl-api');

export class TogglTracker implements ITrackingTool {
  apiToken: string;
  currentEntryId: number;
  client: any;

  constructor(apiToken: string) {
    this.apiToken = apiToken;
    this.client = new TogglClient({apiToken: this.apiToken});
  }

  start(projectId: number): void {
    this.client.startTimeEntry({
      pid: projectId
    }, function(err, timeEntry) {
      // handle error
      if(err) {

      }
      this.currentEntryId = timeEntry.id;
      return 1;
    });
  };

  stop(): void {
    this.client.stopTimeEntry(this.currentEntryId, function(err) {});
  }
}
