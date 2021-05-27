using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using trip_manager.Data.Models;

namespace trip_manager.Data.Services
{
    public class TripService : ITripService
    {
        //private TripDbContext _tripContext;

        TripsDbContext _context;
        public TripService(TripsDbContext context)
        {
            _context = context;
        }

        public List<Trip> GetAllTrips()
        {
            return _context.Trips.ToList();
        }

        public Trip GetTrip(int tripId)
        {
            var _trip = _context.Trips.FirstOrDefault(n => n.Id == tripId);
            if (_trip != null)
            {
                return _trip;
            }
            return null;
        }

        public void AddTrip(Trip trip)
        {
            try
            {
                var _trip = new Trip
                {
                    Name = trip.Name,
                    Description = trip.Description,
                    DateStarted = trip.DateStarted,
                    DateCompleted = trip.DateCompleted,
                    Username = "username1"
                };
                _context.Trips.Add(_trip);
                _context.SaveChanges();
            }
            catch (Exception)
            {
                throw;
            }
        }

        public void DeleteTrip(int tripId)
        {
            var trip = Data.Trips.FirstOrDefault(n => n.Id == tripId);
            _context.Trips.Remove(trip);
            _context.SaveChanges();
        }    

        public void UpdateTrip(int tripId, Trip trip)
        {
            var _trip = _context.Trips.FirstOrDefault(n => n.Id == tripId);
            if(_trip != null)
            {
                _trip.Name = trip.Name;
                _trip.Description = trip.Description;
                _trip.DateStarted = trip.DateStarted;
                _trip.DateCompleted = trip.DateCompleted;

                _context.Update(_trip);
                _context.SaveChanges();
            }

            
        }
    }
}
