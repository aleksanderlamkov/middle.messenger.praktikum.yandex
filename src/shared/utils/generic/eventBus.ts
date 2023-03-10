type TEvent = string
type TCallback = Function

class EventBus {
  private listeners: Record<string, Function[]> = {}

  hasEvent(event: string) {
    return this.listeners[event]
  }

  logEventError(event: TEvent): never {
    throw new Error(`Event '${event}' is not found`)
  }

  public on(event: TEvent, callback: TCallback): void {
    if (!this.hasEvent(event)) {
      this.listeners[event] = []
    }

    this.listeners[event].push(callback)
  }

  public off(event: TEvent, callback: TCallback): void {
    if (!this.hasEvent(event)) {
      this.logEventError(event)
    }

    this.listeners[event] = this.listeners[event]
      .filter((listener) => listener !== callback)
  }

  public emit(event: TEvent, ...args: TEvent[]) :void {
    if (!this.hasEvent(event)) {
      this.logEventError(event)
    }

    this.listeners[event].forEach((listener) => listener(...args))
  }
}

export default EventBus
