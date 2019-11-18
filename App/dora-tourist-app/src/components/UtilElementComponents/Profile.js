import React, {Component} from 'react';

class Profile extends Component {
    render() {
        return (
            <div>
                <div className="row">
                    <div className="col-lg-4 col-xlg-3 col-md-5">
                        <div className="card">
                            <div className="card-body">
                                <center class="m-t-30"><img src="../assets/images/users/5.jpg" className="img-circle"
                                                            width="150"/>
                                    <h4 className="card-title m-t-10">Hanna Gover</h4>
                                    <h6 className="card-subtitle">Accoubts Manager Amix corp</h6>
                                    <div className="row text-center justify-content-md-center">
                                        <div className="col-4"><a href="#" className="link"><i
                                            className="icon-people"/> <font class="font-medium">254</font></a></div>
                                        <div className="col-4"><a href="#" className="link"><i
                                            className="icon-picture"/> <font class="font-medium">54</font></a></div>
                                    </div>
                                </center>
                            </div>
                            <div>
                                <hr/>
                            </div>
                            <div className="card-body"><small className="text-muted">Email address </small>
                                <h6>hannagover@gmail.com</h6> <small className="text-muted p-t-30 db">Phone</small>
                                <h6>+91 654 784 547</h6> <small className="text-muted p-t-30 db">Address</small>
                                <h6>71 Pilgrim Avenue Chevy Chase, MD 20815</h6>
                                <div className="map-box">
                                    <iframe
                                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d470029.1604841957!2d72.29955005258641!3d23.019996818380896!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e848aba5bd449%3A0x4fcedd11614f6516!2sAhmedabad%2C+Gujarat!5e0!3m2!1sen!2sin!4v1493204785508"
                                        width="100%" height="150" frameBorder="0" style={{border:0}}
                                        allowFullScreen/>
                                </div>
                                <small className="text-muted p-t-30 db">Social Profile</small>
                                <br/>
                                <button className="btn btn-circle btn-secondary"><i className="fab fa-facebook-f"/>
                                </button>
                                <button className="btn btn-circle btn-secondary"><i className="fab fa-twitter"/>
                                </button>
                                <button className="btn btn-circle btn-secondary"><i className="fab fa-youtube"/>
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-8 col-xlg-9 col-md-7">
                        <div className="card">

                            <ul className="nav nav-tabs profile-tab" role="tablist">
                                <li className="nav-item"><a className="nav-link active" data-toggle="tab" href="#home"
                                                            role="tab">Timeline</a></li>
                                <li className="nav-item"><a className="nav-link" data-toggle="tab" href="#profile"
                                                            role="tab">Profile</a></li>
                                <li className="nav-item"><a className="nav-link" data-toggle="tab" href="#settings"
                                                            role="tab">Settings</a></li>
                            </ul>
                            <div className="tab-content">
                                <div className="tab-pane active" id="home" role="tabpanel">
                                    <div className="card-body">
                                        <div className="profiletimeline">
                                            <div className="sl-item">
                                                <div className="sl-left"><img src="../assets/images/users/1.jpg"
                                                                              alt="user" className="img-circle"/></div>
                                                <div className="sl-right">
                                                    <div><a href="#" className="link">John Doe</a>
                                                        <span className="sl-date">5 minutes ago</span>
                                                        <p>assign a new task <a href="#"> Design
                                                            weblayout</a></p>
                                                        <div className="row">
                                                            <div className="col-lg-3 col-md-6 m-b-20"><img
                                                                src="../assets/images/big/img1.jpg"
                                                                className="img-responsive radius"/></div>
                                                            <div className="col-lg-3 col-md-6 m-b-20"><img
                                                                src="../assets/images/big/img2.jpg"
                                                                className="img-responsive radius"/></div>
                                                            <div className="col-lg-3 col-md-6 m-b-20"><img
                                                                src="../assets/images/big/img3.jpg"
                                                                className="img-responsive radius"/></div>
                                                            <div className="col-lg-3 col-md-6 m-b-20"><img
                                                                src="../assets/images/big/img4.jpg"
                                                                className="img-responsive radius"/></div>
                                                        </div>
                                                        <div className="like-comm"><a href="#"
                                                                                      className="link m-r-10">2
                                                            comment</a> <a href="#"
                                                                           className="link m-r-10"><i
                                                            className="fa fa-heart text-danger"></i> 5 Love</a></div>
                                                    </div>
                                                </div>
                                            </div>
                                            <hr/>
                                            <div className="sl-item">
                                                <div className="sl-left"><img src="../assets/images/users/2.jpg"
                                                                              alt="user" className="img-circle"/>
                                                </div>
                                                <div className="sl-right">
                                                    <div><a href="#" className="link">John Doe</a>
                                                        <span className="sl-date">5 minutes ago</span>
                                                        <div className="m-t-20 row">
                                                            <div className="col-md-3 col-xs-12"><img
                                                                src="../assets/images/big/img1.jpg" alt="user"
                                                                className="img-responsive radius"/></div>
                                                            <div className="col-md-9 col-xs-12">
                                                                <p> Lorem ipsum dolor sit amet, consectetur
                                                                    adipiscing elit. Integer nec odio. Praesent
                                                                    libero. Sed cursus ante dapibus diam. </p> <a
                                                                href="#"
                                                                className="btn btn-success"> Design weblayout</a>
                                                            </div>
                                                        </div>
                                                        <div className="like-comm m-t-20"><a
                                                            href="#" className="link m-r-10">2
                                                            comment</a> <a href="#"
                                                                           className="link m-r-10"><i
                                                            className="fa fa-heart text-danger"></i> 5 Love</a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <hr/>
                                            <div className="sl-item">
                                                <div className="sl-left"><img src="../assets/images/users/3.jpg"
                                                                              alt="user"
                                                                              className="img-circle"/></div>
                                                <div className="sl-right">
                                                    <div><a href="#" className="link">John
                                                        Doe</a> <span className="sl-date">5 minutes ago</span>
                                                        <p className="m-t-10"> Lorem ipsum dolor sit amet,
                                                            consectetur adipiscing elit. Integer nec odio.
                                                            Praesent libero. Sed cursus ante dapibus diam. Sed
                                                            nisi. Nulla quis sem at nibh elementum imperdiet.
                                                            Duis sagittis ipsum. Praesent mauris. Fusce nec
                                                            tellus sed augue semper </p>
                                                    </div>
                                                    <div className="like-comm m-t-20"><a
                                                        href="#" className="link m-r-10">2
                                                        comment</a> <a href="#"
                                                                       className="link m-r-10"><i
                                                        className="fa fa-heart text-danger"></i> 5 Love</a>
                                                    </div>
                                                </div>
                                            </div>
                                            <hr/>
                                            <div className="sl-item">
                                                <div className="sl-left"><img
                                                    src="../assets/images/users/4.jpg" alt="user"
                                                    className="img-circle"/></div>
                                                <div className="sl-right">
                                                    <div><a href="#" className="link">John
                                                        Doe</a> <span
                                                        className="sl-date">5 minutes ago</span>
                                                        <blockquote className="m-t-10">
                                                            Lorem ipsum dolor sit amet, consectetur
                                                            adipisicing elit, sed do eiusmod tempor
                                                            incididunt
                                                        </blockquote>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="tab-pane" id="profile" role="tabpanel">
                                    <div className="card-body">
                                        <div className="row">
                                            <div className="col-md-3 col-xs-6 b-r"><strong>Full Name</strong>
                                                <br/>
                                                <p className="text-muted">Johnathan Deo</p>
                                            </div>
                                            <div className="col-md-3 col-xs-6 b-r"><strong>Mobile</strong>
                                                <br/>
                                                <p className="text-muted">(123) 456 7890</p>
                                            </div>
                                            <div className="col-md-3 col-xs-6 b-r"><strong>Email</strong>
                                                <br/>
                                                <p className="text-muted">johnathan@admin.com</p>
                                            </div>
                                            <div className="col-md-3 col-xs-6"><strong>Location</strong>
                                                <br/>
                                                <p className="text-muted">London</p>
                                            </div>
                                        </div>
                                        <hr/>
                                        <p className="m-t-30">Donec pede justo, fringilla vel, aliquet nec,
                                            vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis
                                            vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer
                                            tincidunt.Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate
                                            eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae,
                                            eleifend ac, enim.</p>
                                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting
                                            industry. Lorem Ipsum has been the industry's standard dummy text ever
                                            since the 1500s, when an unknown printer took a galley of type and
                                            scrambled it to make a type specimen book. It has survived not only five
                                            centuries </p>
                                        <p>It was popularised in the 1960s with the release of Letraset sheets
                                            containing Lorem Ipsum passages, and more recently with desktop
                                            publishing software like Aldus PageMaker including versions of Lorem
                                            Ipsum.</p>
                                        <h4 className="font-medium m-t-30">Skill Set</h4>
                                        <hr/>
                                        <h5 className="m-t-30">Wordpress <span className="pull-right">80%</span>
                                        </h5>
                                        <div className="progress">
                                            <div className="progress-bar bg-success" role="progressbar"
                                                 aria-valuenow="80" aria-valuemin="0" aria-valuemax="100"
                                                 style={{width:"80%", height:"6px"}}><span className="sr-only">50% Complete</span>
                                            </div>
                                        </div>
                                        <h5 className="m-t-30">HTML 5 <span className="pull-right">90%</span>
                                        </h5>
                                        <div className="progress">
                                            <div className="progress-bar bg-info" role="progressbar"
                                                 aria-valuenow="90" aria-valuemin="0" aria-valuemax="100"
                                                 style={{width:"90%", height:"6px"}}><span className="sr-only">50% Complete</span>
                                            </div>
                                        </div>
                                        <h5 className="m-t-30">jQuery <span className="pull-right">50%</span>
                                        </h5>
                                        <div className="progress">
                                            <div className="progress-bar bg-danger" role="progressbar"
                                                 aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"
                                                 style={{width:"50%", height:"6px"}}><span className="sr-only">50% Complete</span>
                                            </div>
                                        </div>
                                        <h5 className="m-t-30">Photoshop <span className="pull-right">70%</span>
                                        </h5>
                                        <div className="progress">
                                            <div className="progress-bar bg-warning" role="progressbar"
                                                 aria-valuenow="70" aria-valuemin="0" aria-valuemax="100"
                                                 style={{width:"70%", height:"6px"}}><span className="sr-only">50% Complete</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="tab-pane" id="settings" role="tabpanel">
                                    <div className="card-body">
                                        <form className="form-horizontal form-material">
                                            <div className="form-group">
                                                <label className="col-md-12">Full Name</label>
                                                <div className="col-md-12">
                                                    <input type="text" placeholder="Johnathan Doe"
                                                           className="form-control form-control-line"/>
                                                </div>
                                            </div>
                                            <div className="form-group">
                                                <label htmlFor="example-email" className="col-md-12">Email</label>
                                                <div className="col-md-12">
                                                    <input type="email" placeholder="johnathan@admin.com"
                                                           className="form-control form-control-line"
                                                           name="example-email" id="example-email"/>
                                                </div>
                                            </div>
                                            <div className="form-group">
                                                <label className="col-md-12">Password</label>
                                                <div className="col-md-12">
                                                    <input type="password" value="password"
                                                           className="form-control form-control-line"/>
                                                </div>
                                            </div>
                                            <div className="form-group">
                                                <label className="col-md-12">Phone No</label>
                                                <div className="col-md-12">
                                                    <input type="text" placeholder="123 456 7890"
                                                           className="form-control form-control-line"/>
                                                </div>
                                            </div>
                                            <div className="form-group">
                                                <label className="col-md-12">Message</label>
                                                <div className="col-md-12">
                                                    <textarea rows="5"
                                                              className="form-control form-control-line"/>
                                                </div>
                                            </div>
                                            <div className="form-group">
                                                <label className="col-sm-12">Select Country</label>
                                                <div className="col-sm-12">
                                                    <select className="form-control form-control-line">
                                                        <option>London</option>
                                                        <option>India</option>
                                                        <option>Usa</option>
                                                        <option>Canada</option>
                                                        <option>Thailand</option>
                                                    </select>
                                                </div>
                                            </div>
                                            <div className="form-group">
                                                <div className="col-sm-12">
                                                    <button className="btn btn-success">Update Profile</button>
                                                </div>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>

                <div className="right-sidebar">
                    <div className="slimscrollright">
                        <div className="rpanel-title"> Service Panel <span><i
                            className="ti-close right-side-toggle"/></span></div>
                        <div className="r-panel-body">
                            <ul id="themecolors" className="m-t-20">
                                <li><b>With Light sidebar</b></li>
                                <li><a href="#" data-skin="skin-default"
                                       className="default-theme">1</a></li>
                                <li><a href="#" data-skin="skin-green" className="green-theme">2</a>
                                </li>
                                <li><a href="#" data-skin="skin-red" className="red-theme">3</a></li>
                                <li><a href="#" data-skin="skin-blue"
                                       className="blue-theme working">4</a></li>
                                <li><a href="#" data-skin="skin-purple" className="purple-theme">5</a>
                                </li>
                                <li><a href="#" data-skin="skin-megna" className="megna-theme">6</a>
                                </li>
                                <li className="d-block m-t-30"><b>With Dark sidebar</b></li>
                                <li><a href="#" data-skin="skin-default-dark"
                                       className="default-dark-theme ">7</a></li>
                                <li><a href="#" data-skin="skin-green-dark"
                                       className="green-dark-theme">8</a></li>
                                <li><a href="#" data-skin="skin-red-dark"
                                       className="red-dark-theme">9</a></li>
                                <li><a href="#" data-skin="skin-blue-dark"
                                       className="blue-dark-theme">10</a></li>
                                <li><a href="#" data-skin="skin-purple-dark"
                                       className="purple-dark-theme">11</a></li>
                                <li><a href="#" data-skin="skin-megna-dark"
                                       className="megna-dark-theme ">12</a></li>
                            </ul>
                            <ul className="m-t-20 chatonline">
                                <li><b>Chat option</b></li>
                                <li>
                                    <a href="#"><img src="../assets/images/users/1.jpg" alt="user-img"
                                                     className="img-circle"/> <span>Varun Dhavan <small
                                        className="text-success">online</small></span></a>
                                </li>
                                <li>
                                    <a href="#"><img src="../assets/images/users/2.jpg" alt="user-img"
                                                     className="img-circle"/>
                                        <span>Genelia Deshmukh <small className="text-warning">Away</small></span></a>
                                </li>
                                <li>
                                    <a href="#"><img src="../assets/images/users/3.jpg" alt="user-img"
                                                     className="img-circle"/>
                                        <span>Ritesh Deshmukh <small className="text-danger">Busy</small></span></a>
                                </li>
                                <li>
                                    <a href="#"><img src="../assets/images/users/4.jpg" alt="user-img"
                                                     className="img-circle"/> <span>Arijit Sinh <small
                                        className="text-muted">Offline</small></span></a>
                                </li>
                                <li>
                                    <a href="#"><img src="../assets/images/users/5.jpg" alt="user-img"
                                                     className="img-circle"/> <span>Govinda Star <small
                                        className="text-success">online</small></span></a>
                                </li>
                                <li>
                                    <a href="#"><img src="../assets/images/users/6.jpg" alt="user-img"
                                                     className="img-circle"/> <span>John Abraham<small
                                        className="text-success">online</small></span></a>
                                </li>
                                <li>
                                    <a href="#"><img src="../assets/images/users/7.jpg" alt="user-img"
                                                     className="img-circle"/> <span>Hritik Roshan<small
                                        className="text-success">online</small></span></a>
                                </li>
                                <li>
                                    <a href="#"><img src="../assets/images/users/8.jpg" alt="user-img"
                                                     className="img-circle"/>
                                        <span>Pwandeep rajan <small className="text-success">online</small></span></a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Profile;
