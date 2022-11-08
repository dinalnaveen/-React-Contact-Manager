import React from "react";
import {Link} from "react-router-dom";

let EditContact = () => {
    return ( 
        <React.Fragment>
            <section className="add-contact p-3">
                <div className="container">
                    <div className="row">
                        <div className="col">
                            <p className="h3 text-primary fw-bold">Edit Contact</p>
                            <p className="fst-italic">Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit corporis accusamus excepturi necessitatibus eos impedit soluta quidem illum vero vitae dolorum eligendi vel deserunt similique voluptates, adipisci ratione totam est.</p>
                        </div>
                    </div>
                    <div className="row align-items-center">
                        <div className="col-md-4">
                            <form>
                                <div className="mb-2">
                                    <input type="text" className="form-control" placeholder="Name" />
                                </div>
                                <div className="mb-2">
                                    <input type="text" className="form-control" placeholder="Photo Url" />
                                </div>
                                <div className="mb-2">
                                    <input type="number" className="form-control" placeholder="Mobile" />
                                </div>
                                <div className="mb-2">
                                    <input type="email" className="form-control" placeholder="Email" />
                                </div>
                                <div className="mb-2">
                                    <input type="text" className="form-control" placeholder="Company" />
                                </div>
                                <div className="mb-2">
                                    <input type="text" className="form-control" placeholder="Tittle" />
                                </div>
                                <div className="mb-2">
                                    <select className="form-control" >
                                        <option value="">Select a Group</option>
                                    </select>
                                    <div className="mb-2 my-2">
                                    <input type="submit" className="btn btn-primary me-2" value="Update" />
                                    <Link to={"/contact/list"} className="btn btn-dark">Cancel</Link>
                                </div>
                                
                                </div>
                            </form>
                        </div>
                        <div className="col-md-6">
                            <img src="https://image.pngaaa.com/456/5593456-middle.png" alt="" className="contact-img"/>
                        </div>
                    </div>
            
                </div>
            </section>
        </React.Fragment>
    );
};
export default EditContact;