import MailBuilder from './MailBuilder'

describe('MailBuilder', () => {
  describe('when called stack', () => {
    it('should be singleton and mixed the configuration object.', () => {
      const buildConfig = new MailBuilder()
      buildConfig
        .to('example@testtst.com')
        .subject("HELLO ITS ME")
        .html('<div>WHATTTTTT</div>')
        .retry(3)

      const result = buildConfig.export()

      expect(result).toEqual(expect.objectContaining({
        from: 'no_reply@thebanana.co',
        html: '<div>WHATTTTTT</div>',
        retry: 3,
        subject: 'HELLO ITS ME',
        to: 'example@testtst.com',
      }))
    })
  })
})