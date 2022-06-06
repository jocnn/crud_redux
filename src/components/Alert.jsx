const Alert = ({alerta}) => {
  return (
    <p className={`${ alerta.error ? 'alert-danger' : 'alert-success' } alert p2 mt-4 text-center`} >
      {alerta.msg}
    </p>
  )
}

export default Alert