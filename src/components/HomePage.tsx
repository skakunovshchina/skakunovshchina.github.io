import { default as React } from 'react';
import {Link} from "react-router-dom";

function Home() {
    return (
        <div id="content" className="site-content">
            <div className="container">
                <div className="row">
                    <div className="col-lg-8 col-md-10 mx-auto">

                        <main className="main-data-block">
                            <div>
                                <p>
                                    Карта окрестностей Скакуновщины с фото и отмеками исчезнувших деревень.
                                    <br />
                                    <Link className="continue-reading check-link" to="/map">Карта &rarr;</Link>
                                </p>
                                <p>
                                    Дневник Семена Жигало, жителя Скакуновщины. Где описывается жизнь в деревне и стране до революции, после революции, коллективизация, оккупация...
                                    <br />
                                    <Link className="continue-reading check-link" to="/zhigalo">Дневник &rarr;</Link>
                                </p>
                                <p>
                                    Сельхоз перепись 1925-го и 1926-го года. В списках указаны только хозяева.
                                    <br />
                                    <Link className="continue-reading check-link" to="/1925">Списки &rarr;</Link>
                                </p>
                                <p>
                                    Из метрических книг, по Низголовской церкви (к которой относилась Скакуновщина), сохранилась только одна книга - за 1878 год.
                                    <br />
                                    <Link className="continue-reading check-link" to="/1878">МК Низголовской церкви 1878 &rarr;</Link>
                                </p>
                            </div>
                        </main>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Home;