import React, { useContext, useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';
import logo from '../../../logos/Group 1329.png';
import trash from '../../../logos/trash-2 9.png';
import plusIcon from '../../../logos/plus 1.png';
import { UserContext } from '../../../App';

const EventList = () => {

    const history = useHistory();
    const { value3 } = useContext(UserContext);
    const [events, setEvents] = value3;

    useEffect(() => {
        fetch('https://whispering-hamlet-56486.herokuapp.com/userEvent')
            .then(res => res.json())
            .then(data => setEvents(data));
    }, [])

    const deleteEvent = (id, event) => {
        fetch(`https://whispering-hamlet-56486.herokuapp.com/delete/${id}`, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(result => {
                if (result > 0) {
                    history.push('/delete');
                }
            })
        console.log(id);
    }
    return (
        <>
            <div className="mt-5 page-bg eventList-body">
                <div className="d-flex align-items-center pb-4 bg-white">
                    <Link to="/home"><img className='logo mx-5 pr-5' src={logo} alt="" /></Link>
                    <h4 className="ml-5">Volunteer register list</h4>
                </div>

                <div className="row">
                   <div className="p-5">
                        <Link to="/admin" className='pl-5'><img style={{ width: '10px' }} src={plusIcon} alt="" />  Add Event</Link>
                   </div>

                    {/* event list heading */}
                    <div className="col-md-9">
                        <div className="list-container bg-white">
                        <div className="rounded p-3">
                            <ul className='list-heading mt-3'>
                                <li className='ml-n4'>Name</li>
                                <li className='mx-5 px-5'>Email ID</li>
                                <li className='ml-4'>Registration Date</li>
                                <li className='px-4'>Volunteer List</li>
                                <li className='ml-5 pl-5'>Action</li>
                            </ul>
                        </div>

                        {/* event list body */}
                        <div className="rounded pb-4">
                            {
                                events.map(evt =>
                                    <table key={evt._id} style={{marginLeft:'20px'}}>
                                        <tr>
                                            <td style={{width:'150px'}}>{evt.events.name}</td>
                                            <td style={{width:'250px'}}>{evt.events.email}</td>
                                            <td style={{width:'150px'}}>{evt.events.date}</td>
                                            <td style={{width:'250px'}}>{evt.events.title}</td>
                                            <td>
                                                <button
                                                    onClick={() => deleteEvent(evt._id)}
                                                    className='deleteBtn'>
                                                    <img className='bg-danger w-50' src={trash} alt="" />
                                                </button>
                                            </td>
                                        </tr>
                                    </table>)
                            }
                        </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default EventList;