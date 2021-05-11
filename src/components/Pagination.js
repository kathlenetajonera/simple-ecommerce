import "../css/pagination.css"

const Pagination = ({ currentPage, setCurrentPage, totalProducts, postsPerPage }) => {
    const pageNumbers = [];
    const handleClick = e => {
        const pageNumber = e.target.innerText;

        setCurrentPage(parseInt(pageNumber))
    }

    for(let i = 1; i <= totalProducts / postsPerPage; i++) {
        pageNumbers.push(i);
    }

    return (
        <ul className="pagination">
            {  pageNumbers.map(page => (
                <li 
                    className={`pagination__item ${ currentPage === page ? 'pagination__item--active' : ''}`} 
                    onClick={handleClick}
                    key={page}
                >
                    { page }
                </li>
                ))
            }
        </ul>
    );
}
 
export default Pagination;