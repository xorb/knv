import PubSub from "pubsub-js"

export function publish(eventType: any, data: any) {
  return PubSub.publish(eventType, data)
}

export function subscribe(eventType: any, callback: any) {
  return PubSub.subscribe(eventType, callback)
}
