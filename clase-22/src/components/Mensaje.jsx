
// destructuring !== deconstruido
const Mensaje = ({ text, send, time }) => {
  return (
    <div className={`${send} mensaje`}>
      <h2>{text}</h2>
      <small>{time}</small>
    </div>
  )
}

export { Mensaje }