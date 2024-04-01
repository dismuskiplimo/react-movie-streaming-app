const Pagination = ({ currentPage, setCurrentPage, pages }) => {
  return (
    <select name="" id="" onChange={ e => setCurrentPage(e.target.value) }>
        { pages.map(i => (
            <option key = {i} value={i}>{i}</option>
        )) }
    </select>
  )
}

export default Pagination