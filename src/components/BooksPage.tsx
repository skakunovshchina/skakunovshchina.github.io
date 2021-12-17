import { default as React } from 'react';
import {Link} from "react-router-dom";

function BooksPage({config}: any) {
    return (
        <div id="content" className="site-content">
            <div className="container">
                <div className="row">
                    <div className="col-lg-8 col-md-10 mx-auto">

                        <main className="main-data-block">
                            <div className="books-list">
                                {
                                    config.map(({title, imgSrc, downloadHref}: any) => {
                                        return (
                                            <div className="book-item">
                                                <a className="continue-reading check-link"
                                                   target="_blank"
                                                   href={downloadHref}
                                                   download="proposed_file_name">
                                                    <img src={imgSrc} />
                                                    <div>{title}</div>
                                                </a>
                                            </div>
                                        );
                                    })
                                }
                            </div>
                        </main>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default BooksPage;