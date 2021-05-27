using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using trip_manager.Data.Models;

namespace trip_manager.Data.Services
{
    public interface ITripService
    {
        List<Trip> GetAllTrips();
        Trip GetTrip(int id);
        void AddTrip(Trip trip);
        void UpdateTrip(int tripId, Trip trip);
        void DeleteTrip(int tripId);
    }
}
