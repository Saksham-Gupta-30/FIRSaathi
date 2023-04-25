import { useState } from "react";
import "../../css/Dashboard.css";
import { Menu } from "./Menu";

export const Dashboard = ({ contract, account, provider }) => {

    const [districtName, setDistrictName] = useState("");
    const [policeStation, setPoliceStation] = useState("");
    const [complaintType, setComplaintType] = useState("");
    const [incidentDetails, setIncidentName] = useState("");
    const [fName, setFName] = useState("");
    const [mName, setMName] = useState("");
    const [lName, setLName] = useState("");
    const [address, setAddress] = useState("");
    const [city, setCity] = useState("");
    const [state, setState] = useState("");
    const [zip, setZip] = useState("");
    const [contact, setContact] = useState("");
    const [email, setEmail] = useState("");

    function handleSubmit(e) {
        e.preventDefault();
        // console.log({
        //   districtName,
        //   policeStation,
        //   complaintType,
        //   incidentDetails,
        //   fName,
        //   mName,
        //   lName,
        //   address,
        //   city,
        //   state,
        //   zip,
        //   contact,
        //   email
        // })
        contract.setData(policeStation, complaintType, incidentDetails, fName + mName + lName, address, city + state + zip, contact, email)
        return;
    }

    return (
        <div className="container dashboard">
            <div className="row">
                <div className="col-lg-3 my-box left-side">
                    <Menu contract={contract} />
                </div>
                <div className="col-lg-9 right-side">
                    <div className="row">
                        <div className="row">
                            <div className="col-lg-12 col-md-12">
                                <div className="page-header">
                                    <h1 className="text-center p-3">First Information Report</h1>
                                    <p style={{ color: "black" }}>
                                        Account : {account ? account : "Not connected"}
                                    </p>
                                </div>
                            </div>
                            <form>
                                <div className="row justify-content-center">
                                    <div className="col-xs-12 col-lg-9 col-sm-9 col-md-9">
                                        <h4 className="py-2">Submit To Police Station:</h4>
                                        <div className="row">
                                            <div className="col-lg-6 col-xs-12 col-sm-6">
                                                <div className="form-group">
                                                    <label for="exampleInputEmail1">District Name</label>
                                                    <input
                                                        type="text"
                                                        className="form-control"
                                                        id="exampleInputEmail1"
                                                        placeholder="District"
                                                        onChange={(e) => setDistrictName(e.target.value)}
                                                    />
                                                </div>
                                            </div>
                                            <div className="col-lg-offset-0 col-lg-6 col-xs-12 col-sm-6">
                                                <div className="form-group">
                                                    <label for="exampleInputEmail1">Police Station Name</label>
                                                    <input
                                                        type="text"
                                                        className="form-control"
                                                        id="exampleInputEmail1"
                                                        placeholder="Police Station Name"
                                                        onChange={(e) => setPoliceStation(e.target.value)}
                                                    />
                                                </div>
                                            </div>
                                            <div className="col-xs-12 col-lg-12 col-sm-9 col-md-9">
                                                <h4 className="pt-2 pb-2">Details of Complaint/Information to Police:</h4>
                                                <div className="row" style={{ justifyContent: "center" }}>
                                                    <div className="col-lg-6 col-xs-12 col-sm-6">
                                                        <div className="form-group">
                                                            <label for="exampleInputEmail1">Complaints Type</label>
                                                            <input
                                                                type="text"
                                                                className="form-control"
                                                                id="exampleInputEmail1"
                                                                placeholder="Category"
                                                                onChange={(e) => setComplaintType(e.target.value)}
                                                            />
                                                        </div>
                                                    </div>
                                                    <div className="col-lg-offset-0 col-lg-6 col-xs-12 col-sm-6">
                                                        <div className="form-group">
                                                            <label for="exampleInputEmail1">Occurence Date</label>
                                                            <input
                                                                type="date"
                                                                className="form-control"
                                                                id="exampleInputEmail1"
                                                                placeholder="dd/mm/yyyy"
                                                            />
                                                        </div>
                                                    </div>
                                                    <div className="col-xs-12 col-lg-9 col-sm-9 col-md-9">
                                                        <div className="form-group">
                                                            <label for="comment">Details of Incident</label>
                                                            <textarea className="form-control" rows="5" id="comment" onChange={(e) => setIncidentName(e.target.value)}></textarea>
                                                        </div>
                                                    </div>
                                                    <div className="col-xs-12 col-lg-9 col-sm-9 col-md-9">
                                                        <h4 className="pt-2 pb-2">Your Details:</h4>
                                                        <div className="row">
                                                            <div className="col-lg-6 col-xs-12 col-sm-6">
                                                                <div className="form-group">
                                                                    <label for="exampleInputEmail1">First Name</label>
                                                                    <input
                                                                        type="text"
                                                                        className="form-control"
                                                                        id="exampleInputEmail1"
                                                                        placeholder="First Name"
                                                                        onChange={(e) => setFName(e.target.value)}
                                                                    />
                                                                </div>
                                                            </div>
                                                            <div className="col-lg-offset-0 col-lg-6 col-xs-12 col-sm-6">
                                                                <div className="form-group">
                                                                    <label for="exampleInputEmail1">Middle Name</label>
                                                                    <input
                                                                        type="text"
                                                                        className="form-control"
                                                                        id="exampleInputEmail1"
                                                                        placeholder="Middle Name"
                                                                        onChange={(e) => setMName(e.target.value)}
                                                                    />
                                                                </div>
                                                            </div>
                                                            <div className="col-lg-offset-0 col-lg-6 col-xs-12 col-sm-6">
                                                                <div className="form-group">
                                                                    <label for="exampleInputEmail1">Last Name</label>
                                                                    <input
                                                                        type="text"
                                                                        className="form-control"
                                                                        id="exampleInputEmail1"
                                                                        placeholder="Last Name"
                                                                        onChange={(e) => setLName(e.target.value)}
                                                                    />
                                                                </div>
                                                            </div>
                                                            <div className="col-lg-offset-0 col-lg-3 col-xs-12 col-sm-6">
                                                                <div className="form-group">
                                                                    <label for="Gender" className="select">
                                                                        Gender
                                                                    </label>
                                                                    <select className="form-control">
                                                                        <option>Male</option>
                                                                        <option>Female</option>
                                                                    </select>
                                                                </div>
                                                            </div>
                                                            <div className="col-lg-offset-0 col-lg-6 col-xs-12 col-sm-12">
                                                                <div className="form-group">
                                                                    <label for="exampleInputEmail1">Address</label>
                                                                    <input
                                                                        type="text"
                                                                        className="form-control"
                                                                        id="exampleInputEmail1"
                                                                        placeholder=""
                                                                        onChange={(e) => setAddress(e.target.value)}
                                                                    />
                                                                </div>
                                                            </div>
                                                            <div className="col-lg-offset-0 col-lg-4 col-xs-12 col-sm-6">
                                                                <div className="form-group">
                                                                    <label for="exampleInputEmail1">City</label>
                                                                    <input
                                                                        type="text"
                                                                        className="form-control"
                                                                        id="exampleInputEmail1"
                                                                        placeholder=""
                                                                        onChange={(e) => setCity(e.target.value)}
                                                                    />
                                                                </div>
                                                            </div>
                                                            <div className="col-lg-offset-0 col-lg-2 col-xs-12 col-sm-6">
                                                                <div className="form-group">
                                                                    <label for="exampleInputEmail1">State</label>
                                                                    <input
                                                                        type="text"
                                                                        className="form-control"
                                                                        id="exampleInputEmail1"
                                                                        placeholder=""
                                                                        onChange={(e) => setState(e.target.value)}
                                                                    />
                                                                </div>
                                                            </div>
                                                            <div className="col-lg-offset-0 col-lg-6 col-xs-12 col-sm-6">
                                                                <div className="form-group">
                                                                    <label for="exampleInputEmail1">Zip</label>
                                                                    <input
                                                                        type="number"
                                                                        className="form-control"
                                                                        id="exampleInputEmail1"
                                                                        placeholder=""
                                                                        onChange={(e) => setZip(e.target.value)}
                                                                    />
                                                                </div>
                                                            </div>
                                                            <div className="col-lg-offset-0 col-lg-6 col-xs-12 col-sm-6">
                                                                <div className="form-group">
                                                                    <label for="exampleInputEmail1">Contact Number</label>
                                                                    <input
                                                                        type="number"
                                                                        className="form-control"
                                                                        id="exampleInputEmail1"
                                                                        placeholder=""
                                                                        onChange={(e) => setContact(e.target.value)}
                                                                    />
                                                                </div>
                                                            </div>
                                                            <div className="col-lg-offset-0 col-lg-4 col-xs-12 col-sm-6">
                                                                <div className="form-group">
                                                                    <label for="exampleInputEmail1">Email-ID</label>
                                                                    <input
                                                                        type="email"
                                                                        className="form-control"
                                                                        id="exampleInputEmail1"
                                                                        placeholder=""
                                                                        onChange={(e) => setEmail(e.target.value)}
                                                                    />
                                                                </div>
                                                            </div>
                                                            <div className="col-lg-offset-0 col-lg-12 col-xs-12">
                                                                <div className="checkbox">
                                                                    <label>
                                                                        <input type="checkbox" value="" />&nbsp;
                                                                        From the date of the crime to now, has the claimant
                                                                        been in prison, on probation, on parole or
                                                                        post-release community supervision because of a
                                                                        felony?{" "}
                                                                    </label>
                                                                </div>
                                                            </div>
                                                            <div className="col-lg-offset-0 col-lg-12 col-xs-12">
                                                                <div className="checkbox">
                                                                    <label>
                                                                        <input type="checkbox" value="" />&nbsp;
                                                                        Is the claimant required to register as a sex
                                                                        offender?
                                                                    </label>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="pull-right pt-3">
                                                            <button
                                                                onClick={handleSubmit}
                                                                href="vcp-application-2.html"
                                                                role="button"
                                                                className="btn btn-dark"
                                                            >
                                                                Submit
                                                            </button>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
