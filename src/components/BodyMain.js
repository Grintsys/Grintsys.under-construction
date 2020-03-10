import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import 'font-awesome/css/font-awesome.min.css';
import logo from '../logo4.png';
import banner from '../19728.png'

class BodyMain extends React.Component {
    render() {
        return (
            <div id="content" className="card px-5 bg-transparent">
                <div className="row no-gutters">
                    <div className="col-md-5">
                        <div className="card-body">
                            <a href="http://grintsys.com/"><img src={logo} className="card-img-top"></img></a>
                            <p id="title1" className="font-weight-bold">Oops!</p>
                            <h1 className="card-title pt-1">Sitio Web En Construcción</h1>
                            <p className="card-text pt-2">!Este sitio web se encuentra en construcción, vuelve pronto y tendremos los que buscas!.</p>
                            <a href="http://grintsys.com/" id="cont-btn" role="button" className="btn btn-primary active" aria-pressed="true">Contáctanos</a>
                            <h5 className="text-center pt-5">Conoce más sobre nosotros</h5>
                            <div id="social-network" className="row d-flex justify-content-center">
                                <a href="https://www.facebook.com/grintsys/"><i className="fa fa-facebook-square px-2"></i></a>
                                <a href="https://www.youtube.com/channel/UCCr2Se-J173l36beanfXm0w"><i className="fa fa-youtube px-2"></i></a>
                                <a href="https://github.com/orgs/Grintsys"><i className="fa fa-github-square px-2"></i></a>
                            </div>
                        </div>
                    </div>
                    <div id="content-img" className="col-md-7 h-100">
                        <img id="bg-content" src={banner} className="card-img"></img>
                    </div>
                </div>
                <footer className="text-center pt-2">
                    <p>Copyright © GRINTSYS</p>
                </footer>
            </div>
        )
    }
}
export default BodyMain;