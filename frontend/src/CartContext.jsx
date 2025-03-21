import React, { createContext, useContext, useState , useEffect  } from 'react';

const CartContext = createContext();


export function CartProvider({ children }) {
  const [itemCart, setItemCart] = useState(0);

   // State for saved services
   const [savedServices, setSavedServices] = useState([]);
  
   // State for booked services
   const [bookedServices, setBookedServices] = useState([]);
 
   // Load cart data from localStorage on component mount
   useEffect(() => {
     const savedData = localStorage.getItem('cartData');
     if (savedData) {
       const { savedCount, savedItems, bookedItems } = JSON.parse(savedData);
       setItemCart(savedCount || 0);
       setSavedServices(savedItems || []);
       setBookedServices(bookedItems || []);
     }
   }, []);
 
   // Save cart data to localStorage whenever it changes
   useEffect(() => {
     localStorage.setItem('cartData', JSON.stringify({
       savedCount: itemCart,
       savedItems: savedServices,
       bookedItems: bookedServices
     }));
   }, [itemCart, savedServices, bookedServices]);
 
   // Add a service to saved list
   const saveService = (service) => {
     // Check if service is already saved
     const isServiceSaved = savedServices.some(item => item.id === service.id);
     
     if (!isServiceSaved) {
       setSavedServices([...savedServices, service]);
       setItemCart(prevCount => prevCount + 1);
       return true; // Successfully saved
     }
     return false; // Already saved
   };
 
   // Remove a service from saved list
   const removeFromSaved = (serviceId) => {
     const updatedSavedServices = savedServices.filter(service => service.id !== serviceId);
     setSavedServices(updatedSavedServices);
     setItemCart(prevCount => prevCount - 1);
   };
 
   // Add a service to booked list
   const bookService = (service, appointmentDetails) => {
     const bookedService = {
       ...service,
       appointmentDate: appointmentDetails.date,
       appointmentTime: appointmentDetails.time,
       status: 'Confirmed',
       bookedOn: new Date().toISOString()
     };
     
     setBookedServices([...bookedServices, bookedService]);
     
     // If the service was in saved list, remove it
     const isServiceSaved = savedServices.some(item => item.id === service.id);
     if (isServiceSaved) {
       removeFromSaved(service.id);
     }
   };
 
   // Cancel a booked service
   const cancelBooking = (serviceId) => {
     const updatedBookedServices = bookedServices.filter(service => service.id !== serviceId);
     setBookedServices(updatedBookedServices);
   };

  return (
    <CartContext.Provider value={{ itemCart, 
    setItemCart,
    savedServices,
    bookedServices,
    saveService,
    removeFromSaved,
    bookService,
    cancelBooking}}>
      {children}
    </CartContext.Provider>
  );
}

export const useCart = () => useContext(CartContext);