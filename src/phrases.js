const START_MESSAGE = `Привіт)
Давай вчити країни та столиці.
Вводь назву міста або країни, а я покажу все, що знаю.
Для перегляду списку країн напиши "Всі"`

const NOT_FOUND =
  'Соррь, я такого не знаю. Ти точно написав коректну назву?'

const prettify = ({ country, capital, location }) => {
  if (!location) return `${country} - ${capital}\n`
  return `${country}
${capital}
${location}`
}

module.exports = { START_MESSAGE, NOT_FOUND, prettify }
