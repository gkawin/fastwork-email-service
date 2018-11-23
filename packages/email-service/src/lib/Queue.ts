import { IEmailForm } from "../Email/MailBuilder";

interface INode {
  key: string,
  priority: string | IEmailForm
}
export default class Queue {
  private nodes: INode[] = []

  public enQueue(priority: string | IEmailForm, key: string) {
    this.nodes.push({ key, priority })
  }

  public deQueue() {
    return this.nodes.shift()!.key
  }

  public isEmpty() {
    return !this.nodes.length
  }

  public getQueue() {
    return this.nodes
  }
}