import { FiGift } from "react-icons/fi";
import { TfiCup } from "react-icons/tfi";
import { IoDiamondOutline } from "react-icons/io5";

import "./ConatctHelp.css"


const ContactHelp = () => {
    const helpServices = [
        {
            id: "one",
            icon: <FiGift />,
            title: "book a demo",
            description: "request a demo from one of our conversion specialists"
        },
        {
            id: "two",
            icon: <IoDiamondOutline />,
            title: "get inspired",
            description: "descover the many ways in which customers use sleeknote"
        },
        {
            id: "three",
            icon: <TfiCup />,
            title: "become a partner",
            description: "join our partner program and earn 25% recurring commissions"
        },
    ]
    return (
        <div className="contact-help-container">
            <h4>how can we help ?</h4>
            {
                helpServices.map((item) => (
                    <div key={item?.id} className="help-services-box">
                        <div className={`icon ${item.id}`}>
                            {item?.icon}
                        </div>
                        <div className="text">
                            <h5>{item?.title}</h5>
                            <p>{item?.description}</p>
                        </div>
                    </div>
                ))
            }

        </div>
    )
}

export default ContactHelp