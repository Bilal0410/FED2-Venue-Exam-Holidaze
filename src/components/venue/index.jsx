import { Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import DateChooserModal from "../DateChooserModal";
import ReservationFormModal from "../ReservationFormModal";

export default function VenueDetail() {
  const [venue, setVenue] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [showDateChooser, setShowDateChooser] = useState(false);
  const [showReservationForm, setShowReservationForm] = useState(false);
  const [venueManager, setVenueManager] = useState(false);

  useEffect(() => {
    const isVenueManager = JSON.parse(localStorage.getItem("venueManager"));
    setVenueManager(isVenueManager);
    fetchVenue();
  }, []);

  const fetchVenue = async () => {
    try {
      setIsLoading(true);
      const searchParams = new URLSearchParams(window.location.search);
      const id = searchParams.get("id");

      const response = await fetch(
        `https://api.noroff.dev/api/v1/holidaze/venues/${id}`
      );

      if (!response.ok) throw new Error("Data fetch failed");
      const data = await response.json();

      setVenue(data);
    } catch (err) {
      setError(err.message);
    } finally {
      setIsLoading(false);
    }
  };

  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <p>Loading...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex justify-center items-center h-screen">
        <p>Error: {error}</p>
      </div>
    );
  }

  return (
    <div className="flex flex-col justify-center flex-1 min-h-full px-6 py-12 bg-white lg:px-8">
      {venue && (
        <div className="bg-white hover:bg-red-100 cursor-pointer rounded-lg shadow-md p-6 max-w-md mx-auto">
          {venue.media && venue.media.length > 0 ? (
            <img
              className="rounded-md mb-4"
              src={venue.media[0]}
              alt={venue.name}
            />
          ) : (
            <div className="rounded-md mb-4 bg-gray-200 h-48 flex items-center justify-center">
              <span className="text-gray-600">No Image Available</span>
            </div>
          )}
          <h1 className="text-2xl font-bold mb-2 text-black">{venue.name}</h1>
          <p className="text-gray-700 mb-4">{venue.description}</p>
          <p className="text-gray-600">Price: ${venue.price}</p>
          <p className="text-gray-600">Max Guests: {venue.maxGuests}</p>
          <p className="text-gray-600">Rating: {venue.rating}</p>
          {venue.meta && (
            <div className="mt-2 text-gray-600">
              {venue.meta.wifi && <span>WiFi</span>}
              {venue.meta.parking && <span>Parking</span>}
              {venue.meta.breakfast && <span>Breakfast</span>}
              {venue.meta.pets && <span>Pets</span>}
            </div>
          )}
          {venue.location && (
            <div className="mt-2 text-gray-600">
              <p>Address: {venue.location.address}</p>
              <p>City: {venue.location.city}</p>
              <p>Zip: {venue.location.zip}</p>
              <p>Country: {venue.location.country}</p>
            </div>
          )}
          <div className="mt-4 flex space-x-4">
            <button
              onClick={() => setShowDateChooser(true)}
              className="bg-black text-white py-2 px-4 rounded hover:bg-gray-800 transition-colors duration-200"
            >
              Check Dates
            </button>
            {!venueManager && (
              <button
                onClick={() => setShowReservationForm(true)}
                className="bg-red-500 text-white py-2 px-4 hover:bg-red-600 rounded transition-colors duration-200"
              >
                Book
              </button>
            )}
            <div>
              <Link to="/">
                <button
                  onClick={() => setShowReservationForm(true)}
                  className="bg-gray-500 text-white py-2 px-4 hover:bg-gray-600 rounded transition-colors duration-200"
                >
                  Back
                </button>
              </Link>
            </div>
          </div>
        </div>
      )}
      {showDateChooser && (
        <DateChooserModal
          onClose={() => setShowDateChooser(false)}
          venue={venue}
        />
      )}
      {showReservationForm && (
        <ReservationFormModal
          onClose={() => setShowReservationForm(false)}
          venue={venue}
        />
      )}
    </div>
  );
}
