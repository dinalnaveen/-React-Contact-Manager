import React,{useState,useEffect} from "react";
import {Link} from "react-router-dom";
import { ContactService } from "../../../services/ContactService";

let AddContact = () => {

    let [state , setState] = useState ({
        loading : false,
        contact : {
            name:'',
            photo:'',
            mobile:'',
            email:'',
            company:'',
            title:'',
            groupId:'',
        },
        groups:[],
        errorMessage:''
    });

    let updateInput = (event) => {
        setState({
            ...state,
            contact: {
                ...state.contact,
                [event.target.name] : event.target.value
            }
        });
    };
    
    useEffect(() => {
        (async function() {
        try {
            setState({...state, loading:true});
            let response = await ContactService.getGroups();
            setState ({
                    ...state,
                    loading: false,
                    groups:response.data
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
    },[]);

    let {loading,contact,groups,errorMessage} = state;

    return ( 
        <React.Fragment>
            
            <section className="add-contact p-3">
                <div className="container">
                    <div className="row">
                        <div className="col">
                            <p className="h3 text-success fw-bold">Create Contact</p>
                            <p className="fst-italic">Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit corporis accusamus excepturi necessitatibus eos impedit soluta quidem illum vero vitae dolorum eligendi vel deserunt similique voluptates, adipisci ratione totam est.</p>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-4">
                            <form>
                                <div className="mb-2">
                                    
                                    <input 
                                    required={true}
                                    name="name"
                                    value={contact.name}
                                    onChange={updateInput}
                                    type="text" className="form-control" placeholder="Name" />
                                </div>
                                <div className="mb-2">
                                    <input 
                                    required={true}
                                    name="photo"
                                    value={contact.photo}
                                    onChange={updateInput}
                                    type="text" className="form-control" placeholder="Photo Url" />
                                </div>
                                <div className="mb-2">
                                    <input 
                                    required={true}
                                    name="mobile"
                                    value={contact.mobile}
                                    onChange={updateInput}
                                    type="number" className="form-control" placeholder="Mobile" />
                                </div>
                                <div className="mb-2">
                                    <input 
                                    required={true}
                                    name="email"
                                    value={contact.email}
                                    onChange={updateInput}
                                    type="email" className="form-control" placeholder="Email" />
                                </div>
                                <div className="mb-2">
                                    <input 
                                    required={true}
                                    name="company"
                                    value={contact.company}
                                    onChange={updateInput}
                                    type="text" className="form-control" placeholder="Company" />
                                </div>
                                <div className="mb-2">
                                    <input 
                                    required={true}
                                    name="title"
                                    value={contact.title}
                                    onChange={updateInput}type="text" className="form-control" placeholder="Tittle" />
                                </div>
                                <div className="mb-2">
                                    <select 
                                    required={true}
                                    name="grooupId"
                                    value={contact.groupId}
                                    onChange={updateInput}
                                    className="form-control" >
                                        <option value="">Select a Group</option>
                                        {
                                            groups.length > 0 &&
                                            groups.map(group => {
                                                return(
                                                    <option key={group.id} value={group.id}>{group.name}</option>
                                                )
                                            })
                                        }
                                    </select>
                                    <div className="mb-2 my-2">
                                    <input type="submit" className="btn btn-success me-2" value="Create" />
                                    <Link to={"/contact/list"} className="btn btn-dark">Cancel</Link>
                                </div>
                                
                                </div>
                            </form>
                        </div>
                    </div>
            
                </div>
            </section>
        </React.Fragment>
    );
};
export default AddContact;