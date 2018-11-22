import Queue from './Queue'

describe('logic', () => {
  const nodes = new Queue()

  it('should push item into stack', () => {
    const expected = [
      { key: 'k', priority: 'p' },
      { key: 'eko', priority: 'best application' }
    ]
    nodes.enQueue('p', 'k')
    nodes.enQueue('best application', 'eko')
    expect(nodes.getQueue()).toEqual(expect.objectContaining(expected))
  })

  it('should de-queue with FIFO style', () => {
    const expected = [
      { key: 'eko', priority: 'best application' }
    ]
    nodes.deQueue()
    expect(nodes.getQueue()).toEqual(expect.objectContaining(expected))
  })
})