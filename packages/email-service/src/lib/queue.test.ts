import Queue from './Queue'

describe('logic', () => {
  const nodes = new Queue()

  it('should push item into stack', () => {
    const expected = [
      { key: 'k', priority: 'p' },
      { key: 'da', priority: 'best application' }
    ]
    nodes.enQueue('p', 'k')
    nodes.enQueue('best application', 'da')
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