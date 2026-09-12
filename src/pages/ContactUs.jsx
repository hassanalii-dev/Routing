import { NavLink } from "react-router";

function ContactUs(){
    return(
        <div className="min-h-screen bg-gray-100 flex items-center justify-center px-4">

            <div className="bg-white w-full max-w-sm rounded-2xl shadow-lg border border-gray-200 
                            p-8 text-center">

                <h1 className="text-2xl font-bold text-gray-800 mb-3">
                    Contact Us
                </h1>

                <div className="w-16 h-1 bg-blue-500 mx-auto rounded-full mb-6"></div>

                <p className="text-gray-500 text-sm mb-2">
                    You can contact
                </p>

                <h2 className="text-xl font-semibold text-gray-800">
                    Hassan Ali
                </h2>

            </div>

        </div>
    )
}

export default ContactUs;