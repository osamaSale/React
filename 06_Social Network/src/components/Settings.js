import React from 'react';
import { Link } from 'react-router-dom';

export const Settings = () => {
    return (
        <main>
            <div className="container">
                <div className="row">
                    <div className="col-lg-3">
                        <div className="d-flex align-items-center mb-4 d-lg-none">
                            <button className="border-0 bg-transparent" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar">
                                <span className="btn btn-primary"><i className="fa-solid fa-sliders-h"></i></span>
                                <span className="h6 mb-0 fw-bold d-lg-none ms-2">Settings</span>
                            </button>
                        </div>
                        <nav className="navbar navbar-light navbar-expand-lg mx-0">
                            <div className="offcanvas offcanvas-start" tabindex="-1" id="offcanvasNavbar">
                              
                                <div className="offcanvas-header">
                                    <button type="button" className="btn-close text-reset ms-auto" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                                </div>

                         
                                <div className="offcanvas-body p-0">
                                  
                                    <div className="card w-100">
                                      
                                        <div className="card-body">

                                         
                                            <ul className="nav nav-tabs nav-pills nav-pills-soft flex-column fw-bold gap-2 border-0">
                                                <li className="nav-item" data-bs-dismiss="offcanvas">
                                                    <Link className="nav-link d-flex mb-0 active" to="#nav-setting-tab-1" data-bs-toggle="tab"> <img className="me-2 h-20px fa-fw" src="assets/images/icon/person-outline-filled.svg" alt="" /><span>Account </span></Link>
                                                </li>
                                                <li className="nav-item" data-bs-dismiss="offcanvas">
                                                    <Link className="nav-link d-flex mb-0" to="#nav-setting-tab-2" data-bs-toggle="tab"> <img className="me-2 h-20px fa-fw" src="assets/images/icon/notification-outlined-filled.svg" alt="" /><span>Notification </span></Link>
                                                </li>
                                                <li className="nav-item" data-bs-dismiss="offcanvas">
                                                    <Link className="nav-link d-flex mb-0" to="#nav-setting-tab-3" data-bs-toggle="tab"> <img className="me-2 h-20px fa-fw" src="assets/images/icon/shield-outline-filled.svg" alt="" /><span>Privacy and safety </span></Link>
                                                </li>
                                                <li className="nav-item" data-bs-dismiss="offcanvas">
                                                    <Link className="nav-link d-flex mb-0" to="#nav-setting-tab-4" data-bs-toggle="tab"> <img className="me-2 h-20px fa-fw" src="assets/images/icon/handshake-outline-filled.svg" alt="" /><span>Communications </span></Link>
                                                </li>
                                                <li className="nav-item" data-bs-dismiss="offcanvas">
                                                    <Link className="nav-link d-flex mb-0" to="#nav-setting-tab-5" data-bs-toggle="tab"> <img className="me-2 h-20px fa-fw" src="assets/images/icon/chat-alt-outline-filled.svg" alt="" /><span>Messaging </span></Link>
                                                </li>
                                                <li className="nav-item" data-bs-dismiss="offcanvas">
                                                    <Link className="nav-link d-flex mb-0" to="#nav-setting-tab-6" data-bs-toggle="tab"> <img className="me-2 h-20px fa-fw" src="assets/images/icon/trash-var-outline-filled.svg" alt="" /><span>Close account </span></Link>
                                                </li>
                                            </ul>
                                        

                                        </div>
                                    
                                        <div className="card-footer text-center py-2">
                                            <Link className="btn btn-link text-secondary btn-sm" to="#!">View Profile </Link>
                                        </div>
                                    </div>
                                    
                                </div>
                         

                               
                                <ul className="nav small mt-4 justify-content-center lh-1">
                                    <li className="nav-item">
                                        <Link className="nav-link" to="my-profile-about.html">About</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link className="nav-link" to="settings.html">Settings</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link className="nav-link" target="_blank" to="https://support.webestica.com/login">Support </Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link className="nav-link" target="_blank" to="docs/index.html">Docs </Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link className="nav-link" to="help.html">Help</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link className="nav-link" to="privacy-and-terms.html">Privacy & terms</Link>
                                    </li>
                                </ul>
                               
                                <p className="small text-center mt-1">©2023 <Link className="text-reset" target="_blank" to="https://www.webestica.com/"> Webestica </Link></p>

                            </div>
                        </nav>
                    </div>
          
                    <div className="col-lg-6 vstack gap-4">
                     
                        <div className="tab-content py-0 mb-0">

                            <div className="tab-pane show active fade" id="nav-setting-tab-1">
                          
                                <div className="card mb-4">

                                    <div className="card-header border-0 pb-0">
                                        <h1 className="h5 card-title">Account Settings</h1>
                                        <p className="mb-0">He moonlights difficult engrossed it, sportsmen. Interested has all Devonshire difficulty gay assistance joy. Unaffected at ye of compliment alteration to.</p>
                                    </div>
                               
                                    <div className="card-body">
                                  
                                        <form className="row g-3">
                                     
                                            <div className="col-sm-6 col-lg-4">
                                                <label className="form-label">First name</label>
                                                <input type="text" className="form-control" placeholder="" value="Sam" />
                                            </div>
                                      
                                            <div className="col-sm-6 col-lg-4">
                                                <label className="form-label">Last name</label>
                                                <input type="text" className="form-control" placeholder="" value="Lanson" />
                                            </div>
                                          
                                            <div className="col-sm-6 col-lg-4">
                                                <label className="form-label">Additional name</label>
                                                <input type="text" className="form-control" placeholder="" />
                                            </div>
                                        
                                            <div className="col-sm-6">
                                                <label className="form-label">User name</label>
                                                <input type="text" className="form-control" placeholder="" value="@samlanson" />
                                            </div>
                                        
                                            <div className="col-lg-6">
                                                <label className="form-label">Birthday </label>
                                                <input type="text" className="form-control flatpickr" value="12/12/1990" />
                                            </div>
                                            
                                            <div className="col-12">
                                                <div className="form-check">
                                                    <input className="form-check-input" type="checkbox" value="" id="allowChecked" checked />
                                                        <label className="form-check-label" for="allowChecked" >
                                                            Allow anyone to add you to their team
                                                        </label>
                                                </div>
                                            </div>
                                         
                                            <div className="col-sm-6">
                                                <label className="form-label">Phone number</label>
                                                <input type="text" className="form-control" placeholder="" value="(678) 324-1251" />
                                                
                                                    <Link className="btn btn-sm btn-dashed rounded mt-2" to="#!"> <i className="bi bi-plus-circle-dotted me-1"></i>Add new phone number</Link>
                                            </div>
                                         
                                            <div className="col-sm-6">
                                                <label className="form-label">Email</label>
                                                <input type="text" className="form-control" placeholder="" value="sam@webestica.com" />
                                                   
                                                    <Link className="btn btn-sm btn-dashed rounded mt-2" to="#!"> <i className="bi bi-plus-circle-dotted me-1"></i>Add new email address</Link>
                                            </div>
                                           
                                            <div className="col-12">
                                                <label className="form-label">Overview</label>
                                                <textarea className="form-control" rows="4" placeholder="Description (Required)">Interested has all Devonshire difficulty gay assistance joy. Handsome met debating sir dwelling age material. As style lived he worse dried. Offered related so visitors we private removed. Moderate do subjects to distance.</textarea>
                                                <small>Character limit: 300</small>
                                            </div>
                                     
                                            <div className="col-12 text-end">
                                                <button type="submit" className="btn btn-sm btn-primary mb-0">Save changes</button>
                                            </div>
                                        </form>
                                    
                                    </div>
                                   
                                </div>
                                <div className="card">
                          
                                    <div className="card-header border-0 pb-0">
                                        <h5 className="card-title">Change your password</h5>
                                        <p className="mb-0">See resolved goodness felicity shy civility domestic had but.</p>
                                    </div>
                          
                                    <div className="card-body">
                                    
                                        <form className="row g-3">
                                         
                                            <div className="col-12">
                                                <label className="form-label">Current password</label>
                                                <input type="text" className="form-control" placeholder="" />
                                            </div>
                                      
                                            <div className="col-12">
                                                <label className="form-label">New password</label>
                                       
                                                <div className="input-group">
                                                    <input className="form-control fakepassword" type="password" id="psw-input" placeholder="Enter new password" />
                                                        <span className="input-group-text p-0">
                                                            <i className="fakepasswordicon fa-solid fa-eye-slash cursor-pointer p-2 w-40px"></i>
                                                        </span>
                                                </div>
                                              
                                                <div id="pswmeter" className="mt-2"></div>
                                                <div id="pswmeter-message" className="rounded mt-1"></div>
                                            </div>
                                      
                                            <div className="col-12">
                                                <label className="form-label">Confirm password</label>
                                                <input type="text" className="form-control" placeholder="" />
                                            </div>
                                     
                                            <div className="col-12 text-end">
                                                <button type="submit" className="btn btn-primary mb-0">Update password</button>
                                            </div>
                                        </form>
                                 
                                    </div>
                                </div>
                              
                            </div>
                     
                            <div className="tab-pane fade" id="nav-setting-tab-2">
                            
                                <div className="card">
                                   
                                    <div className="card-header border-0 pb-0">
                                        <h5 className="card-title">Notification</h5>
                                        <p className="mb-0">Tried law yet style child. The bore of true of no be deal. Frequently sufficient to be unaffected. The furnished she concluded depending procuring concealed. </p>
                                    </div>
                                   
                                  
                                    <div className="card-body pb-0">
                                    
                                        <ul className="list-group list-group-flush">
                                      
                                            <li className="list-group-item d-flex justify-content-between align-items-center px-0 py-3">
                                                <div className="me-2">
                                                    <h6 className="mb-0">Likes and Comments</h6>
                                                    <p className="small mb-0">Joy say painful removed reached end.</p>
                                                </div>
                                                <div className="form-check form-switch">
                                                    <input className="form-check-input" type="checkbox" role="switch" id="NotiSwitchCheckChecked" checked />
                                                </div>
                                            </li>
                                      
                                            <li className="list-group-item d-flex justify-content-between align-items-center px-0 py-3">
                                                <div className="me-2">
                                                    <h6 className="mb-0">Reply to My comments</h6>
                                                    <p className="small mb-0">Ask a quick six seven offer see among.</p>
                                                </div>
                                                <div className="form-check form-switch">
                                                    <input className="form-check-input" type="checkbox" role="switch" id="NotiSwitchCheckChecked2" checked />
                                                </div>
                                            </li>
                                      
                                            <li className="list-group-item d-flex justify-content-between align-items-center px-0 py-3">
                                                <div className="me-2">
                                                    <h6 className="mb-0">Subscriptions</h6>
                                                    <p className="small mb-0">Preference any astonished unreserved Mrs.</p>
                                                </div>
                                                <div className="form-check form-switch">
                                                    <input className="form-check-input" type="checkbox" role="switch" id="NotiSwitchCheckChecked3" />
                                                </div>
                                            </li>
                                      
                                            <li className="list-group-item d-flex justify-content-between align-items-center px-0 py-3">
                                                <div className="me-2">
                                                    <h6 className="mb-0">Birthdays</h6>
                                                    <p className="small mb-0">Contented he gentleman agreeable do be</p>
                                                </div>
                                                <div className="form-check form-switch">
                                                    <input className="form-check-input" type="checkbox" role="switch" id="NotiSwitchCheckChecked4" />
                                                </div>
                                            </li>
                                      
                                            <li className="list-group-item d-flex justify-content-between align-items-center px-0 py-3">
                                                <div className="me-2">
                                                    <h6 className="mb-0">Events</h6>
                                                    <p className="small mb-0">Fulfilled direction use continually.</p>
                                                </div>
                                                <div className="form-check form-switch">
                                                    <input className="form-check-input" type="checkbox" role="switch" id="NotiSwitchCheckChecked5" checked />
                                                </div>
                                            </li>
                                      
                                            <li className="list-group-item px-0 py-3">
                                           
                                                <div className="accordion accordion-flush border-0" id="emailNotifications">
                                                 
                                                    <div className="accordion-item bg-transparent">
                                                        <h2 className="accordion-header" id="flush-headingOne">
                                                            <Link to="#!" className="accordion-button mb-0 p-0 collapsed bg-transparent shadow-none" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                                                                <span>
                                                                    <span className="mb-0 h6 d-block">Email notifications</span>
                                                                    <small className="small mb-0 text-secondary">As hastened oh produced prospect. </small>
                                                                </span>
                                                            </Link>
                                                        </h2>
                                                        <div id="flush-collapseOne" className="accordion-collapse collapse" aria-labelledby="flush-headingOne" data-bs-parent="#emailNotifications">
                                                            <div className="accordion-body p-0 pt-3">
                                                          
                                                                <div className="form-check">
                                                                    <input className="form-check-input" type="checkbox" value="" id="NotiSwitchCheckChecked6" checked />
                                                                        <label className="form-check-label" for="NotiSwitchCheckChecked6">
                                                                            Product emails
                                                                        </label>
                                                                </div>
                                                          
                                                                <div className="form-check">
                                                                    <input className="form-check-input" type="checkbox" value="" id="NotiSwitchCheckChecke7" />
                                                                        <label className="form-check-label" for="NotiSwitchCheckChecke7">
                                                                            Feedback emails
                                                                        </label>
                                                                </div>
                                                                <hr />
                                                                    <div className="mt-3">
                                                                        <h6>Email frequency</h6>
                                                                  
                                                                        <div className="form-check">
                                                                            <input className="form-check-input" type="radio" name="NotiRadio" id="NotiRadio1" />
                                                                                <label className="form-check-label" for="NotiRadio1">
                                                                                    Daily
                                                                                </label>
                                                                        </div>
                                                                  
                                                                        <div className="form-check">
                                                                            <input className="form-check-input" type="radio" name="NotiRadio" id="NotiRadio2" checked />
                                                                                <label className="form-check-label" for="NotiRadio2">
                                                                                    Weekly
                                                                                </label>
                                                                        </div>
                                                                  
                                                                        <div className="form-check">
                                                                            <input className="form-check-input" type="radio" name="NotiRadio" id="NotiRadio3" />
                                                                                <label className="form-check-label" for="NotiRadio3">
                                                                                    Periodically
                                                                                </label>
                                                                        </div>
                                                                  
                                                                        <div className="form-check">
                                                                            <input className="form-check-input" type="radio" name="NotiRadio" id="NotiRadio4" checked />
                                                                                <label className="form-check-label" for="NotiRadio4">
                                                                                    Off
                                                                                </label>
                                                                        </div>
                                                                    </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>

                                            </li>
                                      
                                            <li className="list-group-item d-flex justify-content-between align-items-center px-0 py-3">
                                                <div className="me-2">
                                                    <h6 className="mb-0">Push notifications</h6>
                                                    <p className="small mb-0">Rendered six say his striking confined. </p>
                                                </div>
                                                <div className="form-check form-switch">
                                                    <input className="form-check-input" type="checkbox" role="switch" id="NotiSwitchCheckChecked8" checked />
                                                </div>
                                            </li>
                                      
                                            <li className="list-group-item d-flex justify-content-between align-items-center px-0 py-3">
                                                <div className="me-2">
                                                    <h6 className="mb-0">Weekly account summary <span className="badge bg-primary smaller"> Pro only</span> </h6>
                                                    <p className="small mb-0">Rendered six say his striking confined. </p>
                                                </div>
                                                <div className="form-check form-switch">
                                                    <input className="form-check-input" type="checkbox" role="switch" id="NotiSwitchCheckChecked9" disabled />
                                                </div>
                                            </li>
                                        </ul>
                                     

                                    </div>
                                  
                                    <div className="card-footer pt-0 text-end border-0">
                                        <button type="submit" className="btn btn-sm btn-primary mb-0">Save changes</button>
                                    </div>
                                </div>
                            </div>
                           

                            
                            <div className="tab-pane fade" id="nav-setting-tab-3">
                           
                                <div className="card">
                                   
                                    <div className="card-header border-0 pb-0">
                                        <h5 className="card-title">Privacy and safety</h5>
                                        <p className="mb-0">See information about your account, download an archive of your data, or learn about your account deactivation options</p>
                                    </div>
                                   
                                  
                                    <div className="card-body">
                                      
                                        <ul className="list-group">

                                            <li className="list-group-item d-md-flex justify-content-between align-items-start">
                                                <div className="me-md-3">
                                                    <h6 className="mb-0">	Use two-factor authentication</h6>
                                                    <p className="small mb-0">Unaffected occasional thoroughly. Adieus it no wonders spirit houses. </p>
                                                </div>
                                                <button className="btn btn-primary-soft btn-sm mt-1 mt-md-0"> <i className="bi bi-pencil-square"></i> Change</button>
                                            </li>

                                           
                                            <li className="list-group-item d-md-flex justify-content-between align-items-start">
                                                <div className="me-md-3">
                                                    <h6 className="mb-0">Login activity</h6>
                                                    <p className="small mb-0">Select the language you use on social</p>
                                                </div>
                                                <button className="btn btn-primary-soft btn-sm mt-1 mt-md-0" data-bs-toggle="modal" data-bs-target="#modalLoginActivity"> <i className="bi bi-eye"></i> View</button>
                                            </li>

                                           
                                            <li className="list-group-item d-md-flex justify-content-between align-items-start">
                                                <div className="me-md-3">
                                                    <h6 className="mb-0">Manage your data and activity</h6>
                                                    <p className="small mb-0">Select a language for translation</p>
                                                </div>
                                                <button className="btn btn-primary-soft btn-sm mt-1 mt-md-0"> <i className="bi bi-pencil-square"></i> Change</button>
                                            </li>

                                           
                                            <li className="list-group-item d-md-flex justify-content-between align-items-start">
                                                <div className="me-md-3">
                                                    <h6 className="mb-0">Search history</h6>
                                                    <p className="small mb-0">Choose to autoplay videos on social</p>
                                                </div>
                                                <button className="btn btn-primary-soft btn-sm mt-1 mt-md-0"> <i className="bi bi-pencil-square"></i> Change</button>
                                            </li>

                                           
                                            <li className="list-group-item d-md-flex justify-content-between align-items-start">
                                                <div className="me-md-3">
                                                    <h6 className="mb-0">Permitted services</h6>
                                                    <p className="small mb-0">Choose if this feature appears on your profile</p>
                                                </div>
                                                <button className="btn btn-primary-soft btn-sm mt-1 mt-md-0"> <i className="bi bi-pencil-square"></i> Change</button>
                                            </li>
                                        </ul>
                                     
                                    </div>
                                  
                                    <div className="card-footer pt-0 text-end border-0">
                                        <button type="submit" className="btn btn-sm btn-primary mb-0">Save changes</button>
                                    </div>
                                </div>
                              
                            </div>
                          
                            <div className="tab-pane fade" id="nav-setting-tab-4">
                               
                                <div className="card">
                          
                                    <div className="card-header border-0 pb-0">
                                        <h5 className="card-title">Who can connect with you?</h5>
                                        <p className="mb-0">He moonlights difficult engrossed it, sportsmen. Interested has all Devonshire difficulty gay assistance joy. Unaffected at ye of compliment alteration to.</p>
                                    </div>
                          
                                  
                                    <div className="card-body">
                                   
                                        <div className="accordion" id="communications">
                                         
                                            <div className="accordion-item bg-transparent">
                                                <h2 className="accordion-header" id="communicationOne">
                                                    <button className="accordion-button mb-0 h6" type="button" data-bs-toggle="collapse" data-bs-target="#communicationcollapseOne" aria-expanded="true" aria-controls="communicationcollapseOne">
                                                        Connection request
                                                    </button>
                                                </h2>
                                              
                                                <div id="communicationcollapseOne" className="accordion-collapse collapse show" aria-labelledby="communicationOne" data-bs-parent="#communications">
                                                    <div className="accordion-body">
                                                  
                                                        <div className="form-check">
                                                            <input className="form-check-input" type="radio" name="ComRadio" id="ComRadio5" />
                                                                <label className="form-check-label" for="ComRadio5">
                                                                    Everyone on social (recommended)
                                                                </label>
                                                        </div>
                                                  
                                                        <div className="form-check">
                                                            <input className="form-check-input" type="radio" name="ComRadio" id="ComRadio2" checked />
                                                                <label className="form-check-label" for="ComRadio2">
                                                                    Only people who know your email address
                                                                </label>
                                                        </div>
                                                  
                                                        <div className="form-check">
                                                            <input className="form-check-input" type="radio" name="ComRadio" id="ComRadio3" />
                                                                <label className="form-check-label" for="ComRadio3">
                                                                    Only people who appear in your mutual connection list
                                                                </label>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                         
                                            <div className="accordion-item bg-transparent">
                                                <h2 className="accordion-header" id="communicationTwo">
                                                    <button className="accordion-button mb-0 h6 collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#communicationcollapseTwo" aria-expanded="false" aria-controls="communicationcollapseTwo">
                                                        Who can message you
                                                    </button>
                                                </h2>
                                              
                                                <div id="communicationcollapseTwo" className="accordion-collapse collapse" aria-labelledby="communicationTwo" data-bs-parent="#communications">
                                                    <div className="accordion-body">
                                                        <ul className="list-group list-group-flush">
                                                      
                                                            <li className="list-group-item d-sm-flex justify-content-between align-items-center px-0 py-1 border-0">
                                                                <div className="me-2">
                                                                    <p className="mb-0">Enable message request notifications</p>
                                                                </div>
                                                                <div className="form-check form-switch">
                                                                    <input className="form-check-input" type="checkbox" role="switch" id="comSwitchCheckChecked" />
                                                                </div>
                                                            </li>
                                                      
                                                            <li className="list-group-item d-sm-flex justify-content-between align-items-center px-0 py-1 border-0">
                                                                <div className="me-2">
                                                                    <p className="mb-0">Allow connections to add you on group </p>
                                                                </div>
                                                                <div className="form-check form-switch">
                                                                    <input className="form-check-input" type="checkbox" role="switch" id="comSwitchCheckChecked2" checked />
                                                                </div>
                                                            </li>
                                                      
                                                            <li className="list-group-item d-sm-flex justify-content-between align-items-center px-0 py-1 border-0">
                                                                <div className="me-2">
                                                                    <p className="mb-0">Allow Sponsored Messages </p>
                                                                    <p className="small">Your personal information is safe with our marketing partners unless you respond to their Sponsored Messages </p>
                                                                </div>
                                                                <div className="form-check form-switch">
                                                                    <input className="form-check-input" type="checkbox" role="switch" id="comSwitchCheckChecked3" checked />
                                                                </div>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                         
                                            <div className="accordion-item bg-transparent">
                                                <h2 className="accordion-header" id="communicationThree">
                                                    <button className="accordion-button mb-0 h6 collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#communicationcollapseThree" aria-expanded="false" aria-controls="communicationcollapseThree">
                                                        How people can find you
                                                    </button>
                                                </h2>
                                              
                                                <div id="communicationcollapseThree" className="accordion-collapse collapse" aria-labelledby="communicationThree" data-bs-parent="#communications">
                                                    <div className="accordion-body">
                                                        <ul className="list-group list-group-flush">
                                                      
                                                            <li className="list-group-item d-sm-flex justify-content-between align-items-center px-0 py-1 border-0">
                                                                <div className="me-2">
                                                                    <p className="mb-0">Allow search engines to show your profile?</p>
                                                                </div>
                                                                <div className="form-check form-switch">
                                                                    <input className="form-check-input" type="checkbox" role="switch" id="comSwitchCheckChecked4" checked />
                                                                </div>
                                                            </li>
                                                      
                                                            <li className="list-group-item d-sm-flex justify-content-between align-items-center px-0 py-1 border-0">
                                                                <div className="me-2">
                                                                    <p className="mb-0">Allow people to search by your email address? </p>
                                                                </div>
                                                                <div className="form-check form-switch">
                                                                    <input className="form-check-input" type="checkbox" role="switch" id="comSwitchCheckChecked5" />
                                                                </div>
                                                            </li>
                                                      
                                                            <li className="list-group-item d-sm-flex justify-content-between align-items-center px-0 py-1 border-0">
                                                                <div className="me-2">
                                                                    <p className="mb-0">Allow Sponsored Messages </p>
                                                                    <p className="small">Your personal information is safe with our marketing partners unless you respond to their Sponsored Messages </p>
                                                                </div>
                                                                <div className="form-check form-switch">
                                                                    <input className="form-check-input" type="checkbox" role="switch" id="comSwitchCheckChecked6" checked />
                                                                </div>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    
                                    </div>
                                  
                                    <div className="card-footer pt-0 text-end border-0">
                                        <button type="submit" className="btn btn-sm btn-primary mb-0">Save changes</button>
                                    </div>
                                </div>
                             
                            </div>
                           
                            <div className="tab-pane fade" id="nav-setting-tab-5">
                               
                                <div className="card mb-4">
                          
                                    <div className="card-header border-0 pb-0">
                                        <h5 className="card-title">Messaging privacy settings</h5>
                                        <p className="mb-0">As young ye hopes no he place means. Partiality diminution gay yet entreaties admiration. In mention perhaps attempt pointed suppose. Unknown ye chamber of warrant of Norland arrived. </p>
                                    </div>
                          
                                    <div className="card-body">
                                    
                                        <ul className="list-group list-group-flush">
                                           
                                            <li className="list-group-item d-flex justify-content-between align-items-center px-0">
                                                <div className="me-2">
                                                    <h6 className="mb-0">Enable message request notifications</h6>
                                                </div>
                                                <div className="form-check form-switch">
                                                    <input className="form-check-input" type="checkbox" role="switch" id="msgSwitchCheckChecked" checked />
                                                </div>
                                            </li>
                                           
                                            <li className="list-group-item d-flex justify-content-between align-items-center px-0">
                                                <div className="me-2">
                                                    <h6 className="mb-0">Invitations from your network</h6>
                                                </div>
                                                <div className="form-check form-switch">
                                                    <input className="form-check-input" type="checkbox" role="switch" id="msgSwitchCheckChecked2" checked />
                                                </div>
                                            </li>
                                           
                                            <li className="list-group-item d-flex justify-content-between align-items-center px-0">
                                                <div className="me-2">
                                                    <h6 className="mb-0">Allow connections to add you on group</h6>
                                                </div>
                                                <div className="form-check form-switch">
                                                    <input className="form-check-input" type="checkbox" role="switch" id="msgSwitchCheckChecked3" />
                                                </div>
                                            </li>
                                           
                                            <li className="list-group-item d-flex justify-content-between align-items-center px-0">
                                                <div className="me-2">
                                                    <h6 className="mb-0">Reply to comments</h6>
                                                </div>
                                                <div className="form-check form-switch">
                                                    <input className="form-check-input" type="checkbox" role="switch" id="msgSwitchCheckChecked4" />
                                                </div>
                                            </li>
                                           
                                            <li className="list-group-item d-flex justify-content-between align-items-center px-0">
                                                <div className="me-2">
                                                    <h6 className="mb-0">Messages from activity on my page or channel</h6>
                                                </div>
                                                <div className="form-check form-switch">
                                                    <input className="form-check-input" type="checkbox" role="switch" id="msgSwitchCheckChecked5" checked />
                                                </div>
                                            </li>
                                           
                                            <li className="list-group-item d-flex justify-content-between align-items-center px-0">
                                                <div className="me-2">
                                                    <h6 className="mb-0">Personalise tips for my page</h6>
                                                </div>
                                                <div className="form-check form-switch">
                                                    <input className="form-check-input" type="checkbox" role="switch" id="msgSwitchCheckChecked6" checked />
                                                </div>
                                            </li>
                                        </ul>
                                       
                                    </div>
                                 
                                    <div className="card-footer pt-0 text-end border-0">
                                        <button type="submit" className="btn btn-sm btn-primary mb-0">Save changes</button>
                                    </div>
                                </div>
                            
                                <div className="card">
                                   
                                    <div className="card-header border-0 pb-0">
                                        <h5 className="card-title">Messaging experience</h5>
                                        <p className="mb-0">Arrived off she elderly beloved him affixed noisier yet. </p>
                                    </div>
                                   
                                  
                                    <div className="card-body">
                                    
                                        <ul className="list-group list-group-flush">
                                           
                                            <li className="list-group-item d-sm-flex justify-content-between align-items-center px-0">
                                                <div className="me-2">
                                                    <h6 className="mb-0">Read receipts and typing indicators</h6>
                                                </div>
                                                <button className="btn btn-primary-soft btn-sm mt-1 mt-md-0"> <i className="bi bi-pencil-square"></i> Change</button>
                                            </li>
                                           
                                            <li className="list-group-item d-sm-flex justify-content-between align-items-center px-0">
                                                <div className="me-2">
                                                    <h6 className="mb-0">Message suggestions</h6>
                                                </div>
                                                <button className="btn btn-primary-soft btn-sm mt-1 mt-md-0"> <i className="bi bi-pencil-square"></i> Change</button>
                                            </li>
                                      
                                            <li className="list-group-item d-sm-flex justify-content-between align-items-center px-0">
                                                <div className="me-2">
                                                    <h6 className="mb-0">Message nudges</h6>
                                                </div>
                                                <button className="btn btn-primary-soft btn-sm mt-1 mt-md-0"> <i className="bi bi-pencil-square"></i> Change</button>
                                            </li>
                                        </ul>
                                     
                                    </div>
                                  
                                    <div className="card-footer pt-0 text-end border-0">
                                        <button type="submit" className="btn btn-sm btn-primary mb-0">Save changes</button>
                                    </div>
                                </div>
                         
                            </div>
                           
                            <div className="tab-pane fade" id="nav-setting-tab-6">
                              
                                <div className="card">
                                   
                                    <div className="card-header border-0 pb-0">
                                        <h5 className="card-title">Delete account</h5>
                                        <p className="mb-0">He moonlights difficult engrossed it, sportsmen. Interested has all Devonshire difficulty gay assistance joy. Unaffected at ye of compliment alteration to.</p>
                                    </div>
                                   
                                  
                                    <div className="card-body">
                               
                                        <h6>Before you go...</h6>
                                        <ul>
                                            <li>Take a backup of your data <Link to="#">Here</Link> </li>
                                            <li>If you delete your account, you will lose your all data.</li>
                                        </ul>
                                        <div className="form-check form-check-md my-4">
                                            <input className="form-check-input" type="checkbox" value="" id="deleteaccountCheck" />
                                            <label className="form-check-label" for="deleteaccountCheck">Yes, I'd like to delete my account</label>
                                        </div>
                                        <Link to="#" className="btn btn-success-soft btn-sm mb-2 mb-sm-0">Keep my account</Link>
                                        <Link to="#" className="btn btn-danger btn-sm mb-0">Delete my account</Link>

                                    </div>
                                
                                </div>
                          
                            </div>
                       

                        </div>

                    </div>

                </div>
            </div>


        </main>
    );
}

