module.export = nuid = (timestamp = true, length = '8') => {
  const timestampGen = () => {
    const string = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'
    const date = new Date()

    return (
      string[date.getUTCFullYear().toString().slice(0, 2)] +
      string[date.getUTCFullYear().toString()[2]] +
      string[date.getUTCFullYear().toString()[3]] +
      string[date.getUTCMonth()] +
      string[date.getUTCDate()] +
      string[date.getUTCHours()] +
      string[date.getUTCMinutes()] +
      string[date.getUTCSeconds()]
    )
  }

  if (timestamp) {
    timestamp = timestampGen()
  } else timestamp = ''

  const num = '1234567890'
  const ABC = 'QWERTYUIOPASDFGHJKLZXCVBNM'
  const abc = 'qwertyuiopasdfghjklzxcvbnm'

  const characters = num + ABC + abc

  let xid = ''

  for (let i = 0; i < length; i++) {
    xid += characters[Math.floor(Math.random() * characters.length)]
  }

  return timestamp + xid
}
