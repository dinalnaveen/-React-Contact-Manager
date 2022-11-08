import React,{useEffect ,useState} from "react";
import {Link, useParams} from 'react-router-dom';
import { ContactService } from "../../../services/ContactService";
import Spinner from "../../Spinner/Spinner";


let ViewContact = () => {

    let {contactId} = useParams ();

    let [state ,setState] = useState ({
        loading : false,
        contacts :[],
        errorMessage : ''
    });

    useEffect(() => {
        (async function() {
        try {
            setState({...state, loading:true});
            let response = await ContactService.getContacts(contactId);
            setState ({
                    ...state,
                    loading: false,
                    contacts:response.data
            });
        }
        catch(error){
            setState({
                ...state,
                loading: false,
                errorMessage : error.message
            });
        }
    })();
    },[contactId]);

    let {loading,contacts,errorMessage} = state;

    return ( 
        <React.Fragment>
            
            <section className="view-contact-intro p-3">
            <div className="container">
                <div className="row">
                    <div className="col">
                        <p className="h3 text-warning fw-bold">View Contact</p>
                        <p className="fst-italic">Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis, dolor maiores accusamus dolorum soluta beatae, sit odio in cupiditate labore, nisi maxime quam adipisci ipsam necessitatibus rem impedit laboriosam culpa?</p>
                    </div>
                </div>
            </div>
            </section>

        {
            loading ? <Spinner/> : <React.Fragment>
                    {
                        Object.keys(contacts).length > 0 &&
                        <section className="view-contact mt-3">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-md-3">
                        <img src={contacts.photo} alt="" className="contact-img" />
                        </div>
                        <div className="col-md-6 bg-white p-2">
                            <ul>
                            <li className="list-group-item list-group-item-action my-1 ">
                                                    Name : <span className="fw-bold">{contacts.name}</span>
                                                </li> 
                                                <li className="list-group-item list-group-item-action my-1 ">
                                                    Mobile : <span className="fw-bold">{contacts.mobile}</span>
                                                </li>    
                                                <li className="list-group-item list-group-item-action my-1">
                                                    Email : <span className="fw-bold">{contacts.email}</span>
                                                </li>   
                                                <li className="list-group-item list-group-item-action my-1">
                                                    Company : <span className="fw-bold">{contacts.company}</span>
                                                </li>   
                                                <li className="list-group-item list-group-item-action my-1">
                                                    Title : <span className="fw-bold">{contacts.title}</span>
                                                </li>   
                                                <li className="list-group-item list-group-item-action my-1">
                                                    Group : <span className="fw-bold">{contacts.groupId}</span>
                                                </li>   
                            </ul>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col">
                            <Link to={"/contact/list"} className='btn btn-warning'>Back</Link>
                        </div>
                    </div>
                </div>
            </section>
                    }
            </React.Fragment>
        }

            
        </React.Fragment>
    );
};
export default ViewContact;