import { IEmailForm } from '../email/MailBuilder';
import Queue from './Queue'

describe('logic', () => {
  const nodes = new Queue()

  it('should push item into stack', () => {
    const expected = [
      { key: 'k', priority: 'p' },
      { key: 'da', priority: 'best application' }
    ]
    nodes.enQueue({} as IEmailForm, 'k')
    nodes.enQueue({} as IEmailForm, 'da')
    expect(nodes.getQueue()).toEqual(expect.objectContaining(expected))
  })

  it('should de-queue with FIFO style', () => {
    const expected = [
      { key: 'da', priority: 'best application' }
    ]
    nodes.deQueue()
    expect(nodes.getQueue()).toEqual(expect.objectContaining(expected))
  })
})