// FormContext.js
import React, { createContext, useContext, useState } from "react";

export const FormContext = createContext();

export const FormProvider = ({ children }) => {
	const [formData, setFormData] = useState({
	    eventName: "",
		eventDate: "",
		eventTime: "",
		eventVenue: "",
		numberOfTickets: 0,
		priceOfTickets: 0,
		imageFile: null,
        imageIPFSHash: null,
        imagePreview:"/images/image-placeholder.png",
	});

	return (
		<FormContext.Provider value={{ formData, setFormData }}>
			{children}
		</FormContext.Provider>
	);
};

// export const useFormContext = () => {
// 	return useContext(FormContext);
// };
