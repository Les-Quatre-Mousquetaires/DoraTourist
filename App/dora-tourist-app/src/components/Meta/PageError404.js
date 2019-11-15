/*
 * Created by @tranphuquy19 on 15/11/2019
 * Email: tranphuquy19@gmail.com
 */
import React, {Component} from 'react';

class PageError404 extends Component {
    render() {
        return (
            <div className="horizontal-nav boxed skin-megna fixed-layout">
                <section id="wrapper" className="error-page">
                    <div className="error-box">
                        <div className="error-body text-center">
                            <h1>404</h1>
                            <h3 className="text-uppercase">Page Not Found !</h3>
                            <p className="text-muted m-t-30 m-b-30">ĐANG TÌM CÁI GÌ VẬY BẠN?</p>
                            <a href="/" className="btn btn-info btn-rounded waves-effect waves-light m-b-40">vỀ NHÀ MẸ GỌI KÌA!!!</a></div>

                    </div>
                </section>
            </div>
        );
    }
}

export default PageError404;
