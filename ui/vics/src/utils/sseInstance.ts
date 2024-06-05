import { Observable } from "rxjs";


const gateWayApiBaseUrl = window._env_.Inspection_Service_Url;
let currentEventSource: EventSource | null = null;

//SSE API CALLS

export interface SseMessageEventData {
    type: string;
    data: any;
  }
  export function sse(urlData): Observable<SseMessageEventData> {
    const source = new Observable<SseMessageEventData>((subscriber) => {
      if (urlData !== undefined) {
        const segment = urlData;
        const url = `${gateWayApiBaseUrl}` + segment;
        console.log("SSE URL", url);
        const eventSource = sseInstance(url);
        eventSource.onmessage = (messageEvent: MessageEvent) => {
          console.log("SSE onmessage", { messageEvent });
          const data = JSON.parse(messageEvent.data) as SseMessageEventData;
          console.log("SseMessageEventData", data);
          subscriber.next(data);
          console.log("SSE", "Closing event source");
          eventSource.close();
        };
  
        eventSource.onerror = (event) => {
          subscriber.error(event);
          console.log("SSE", "Closing event source");
          eventSource.close();
        };
  
        eventSource.addEventListener("close", function (e) {
          console.log("Event: close, data: " + e.data);
          eventSource.close();
        });
  
        return () => {
          console.log("SSE", "Teardown subscription & closing event source");
          eventSource.close();
        };
      }
    });
    return source;
  }
  
  export function sseInstance(url: string): EventSource {
    closeEventSource();
    const currentEventSource = new EventSource(url);
    return currentEventSource;
  }
  
  //  * Closes current "EventSource" instance if any
  function closeEventSource(): void {
    if (!currentEventSource) return;
    currentEventSource?.onerror?.(new Event("close"));
    currentEventSource = null;
  }
  
  