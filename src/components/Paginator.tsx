import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { recievePageData } from '../store/actions/paginatorActions';


interface IProps {
    onRecievePage: Function,
    currentPage: number,
    totalAmount: number,
    perPage: number,
    meta: string
}

const Paginator:React.SFC<IProps> = ({ meta, currentPage, totalAmount, onRecievePage, perPage }) => {

    const totalPages = Math.ceil(totalAmount / perPage);
    
    return (
        
        <nav>
            { totalAmount > perPage && 
                <ul className="paginator">
                    <div className="paginate-left">
                        { currentPage !== 1 && 
                            <React.Fragment>
                                <li onClick={() => onRecievePage(meta, 1, totalAmount)} className={`page-item ${currentPage === 1 ? 'disabled' : ''}`}>
                                    <Link to={{ search: `?page=1` }} className="page-link">
                                        <img src={'/double-left-chevron.svg'} alt="double-left-arrow"/>
                                    </Link>
                                </li>
                                <li onClick={() => onRecievePage(meta, currentPage - 1)} className={`page-item ${currentPage === 1 ? 'disabled' : ''}`}>
                                    <Link to={{ search: `?page=${currentPage - 1}` }} className="page-link">
                                        <img src={'/left-arrow.svg'} alt="page_left"/>
                                    </Link>
                                </li>
                            </React.Fragment> }
                    </div>
                    <div className="paginate-center">
                        <li className={`page-item`}>
                            <span className='current-page-number'>{currentPage}</span>
                        </li> 
                    </div>
                    <div className="paginate-right">
                        { currentPage !== totalPages && 
                            <React.Fragment>
                                <li onClick={() => onRecievePage(meta, currentPage + 1)} className={`page-item ${currentPage === totalPages ? 'disabled' : ''}`}>
                                    <Link to={{ search: `?page=${currentPage + 1}`}} className="page-link">
                                        <img src={'/right-arrow.svg'} alt="page_right"/>    
                                    </Link>
                                </li>
                                <li onClick={() => onRecievePage(meta, totalPages)} className={`page-item ${currentPage === totalPages ? 'disabled' : ''}`}>
                                    <Link to={ { search: `?page=${totalPages}`} } className="page-link">
                                        <img src={'/double-right-chevron.svg'} alt="double-right-arrow"/>
                                    </Link>
                                </li>
                            </React.Fragment> }
                    </div>
                </ul>
            }
        </nav>
    )
}

const mapDispatchToProps = (dispatch: any) => {
    return {
        onRecievePage: (meta: string, currentPage: number) => dispatch(recievePageData(meta, currentPage))
    }
}

export default connect(null, mapDispatchToProps)(Paginator);