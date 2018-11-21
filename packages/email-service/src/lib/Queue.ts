export default class Queue {
  private nodes: any[] = []

  public enQueue(priority: string, key: string) {
    this.nodes.push({ key, priority })
    // could be sorted by node label (DESC)
    this.sort()
  }

  public deQueue() {
    return this.nodes.shift().key
  }

  public sort() {
    this.nodes.sort((a, b) => {
      return a.priority - b.priority
    })
  }
  public isEmpty() {
    return !this.nodes.length
  }

  public getQueue() {
    return this.nodes
  }
}