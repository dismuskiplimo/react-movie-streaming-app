const ResultsHeader = (props) => {
  return (
    <div className="w-full my-5 flex justify-between">
      <h1 className={props.className}>{ `${props.text}` }</h1>

      <select onChange={e => props.setType(e.target.value)}>
          <option value="movie">Movies</option>
          <option value="tv">TV Shows</option>
      </select>
    </div>
  )
}

export default ResultsHeader