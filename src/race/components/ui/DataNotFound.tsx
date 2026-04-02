type DataNotFoundProps = {
  errorMessage?: string
}
export const DataNotFound = (props: DataNotFoundProps) => {
  const { errorMessage } = props

  return <div>{errorMessage}</div>
}
