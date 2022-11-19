import React from "react"

export default function Card() {
    const [card, setcard] = React.useState({
        phNo: "9628721637",
        companyName: "Newton School",
        companyTagline: "Coders of Future",
        firstName: "ABHAY",
        lastName: "GUPTA",
        designation: "FULL STACK DEVELOPER",
        fullAddress: "84,AMBEDKAR MARG,VIKAS NAGAR,LALGANJ-RAEBARELI,UTTAR-PRADESH,229206",
        backgroundImage: "./images/patrick-bateman-card-background.png" 
    })
    
    function deleteAll() {
        setcard(prevcard => ({
            phNo: "",
            companyName: "",
            companyTagline: "",
            firstName: "",
            lastName: "",
            designation: "",
            fullAddress: "",
            backgroundImage: "./images/patrick-bateman-card-background.png" 
        }))   
    }

    function resetAll() {
        setcard(prevcard => ({
            phNo: "9628721637",
        companyName: "Newton School",
        companyTagline: "Coders of Future",
        firstName: "ABHAY",
        lastName: "GUPTA",
        designation: "FULL STACK DEVELOPER",
        fullAddress: "84,AMBEDKAR MARG,VIKAS NAGAR,LALGANJ-RAEBARELI,UTTAR-PRADESH,229206",
        backgroundImage: "./images/patrick-bateman-card-background.png" 
        }))   
    }
    
    function handleChange(event) {
        const {name, value} = event.target
        setcard(prevcard => ({
            ...prevcard,
            [name]: value
        }))
    }
    
    return (
        <main>
            <div className="form">
                <input 
                    type="text"
                    placeholder="Phone Number"
                    className="form--input"
                    name="phNo"
                    value={card.phNo}
                    onChange={handleChange}
                />
                
                <input 
                    type="text"
                    placeholder="Company"
                    className="form--input"
                    name="companyName"
                    value={card.companyName}
                    onChange={handleChange}
                />

                <input 
                    type="text"
                    placeholder="Tagline"
                    className="form--input"
                    name="companyTagline"
                    value={card.companyTagline}
                    onChange={handleChange}
                />

                <input 
                    type="text"
                    placeholder="First Name"
                    className="form--input"
                    name="firstName"
                    value={card.firstName}
                    onChange={handleChange}
                />

                <input 
                    type="text"
                    placeholder="Last Name"
                    className="form--input"
                    name="lastName"
                    value={card.lastName}
                    onChange={handleChange}
                />

                <input 
                    type="text"
                    placeholder="Designation"
                    className="form--input"
                    name="designation"
                    value={card.designation}
                    onChange={handleChange}
                />

                <input 
                    type="text"
                    placeholder="Full Address"
                    className="form--input"
                    name="fullAddress"
                    value={card.fullAddress}
                    onChange={handleChange}
                />
                <div className="card">
                    <img src={card.backgroundImage} className="card--image" alt="imageCard"/>
                    <span className="card--text phone">{card.phNo}</span>
                    <span className="card--text companyName">{card.companyName}</span>
                    <span className="card--text companyTagline">{card.companyTagline}</span>
                    <div className="name">
                        <span className="card--text firstName">{card.firstName}</span>
                        <span className="card--text lastName">{card.lastName}</span>    
                    </div>
                    <span className="card--text designation">{card.designation}</span> 
                    <span className="card--text address">{card.fullAddress}</span>
                </div>
                <button 
                    className="form--button remove"
                    onClick={deleteAll}
                >
                    REMOVE ALL DETAILS
                </button>
                <button 
                    className="form--button reset"
                    onClick={resetAll}
                >RESET TO GUPTA</button>
            </div>
        </main>
    )
}
