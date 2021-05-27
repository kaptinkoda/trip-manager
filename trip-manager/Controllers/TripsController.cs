using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using trip_manager.Data.Models;
using trip_manager.Data.Services;

namespace trip_manager.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class TripsController : ControllerBase
    {
        ITripService _tripService;
        public TripsController(ITripService tripService)
        {
            _tripService = tripService;
        }

        [HttpGet("getAllTrips")]
        public IActionResult GetAllTrips()
        {
            try
            {
                var trips = _tripService.GetAllTrips();
                return Ok(trips);
            }
            catch (Exception)
            {
                return BadRequest("Sorry something went wrong....");
            }
        }

        [HttpGet("getTrip/{id}")]
        public IActionResult GetTrip(int id)
        {
            try
            {
                var trip = _tripService.GetTrip(id);
                return Ok(trip);
            }
            catch (Exception)
            {
                return BadRequest("Sorry something went wrong...");
            }
        }

        [HttpPost("addTrip")]
        public IActionResult AddTrip([FromBody]Trip trip)
        {
            _tripService.AddTrip(trip);
            return Ok();
        }

        [HttpPut("updateTrip/{id}")]
        public IActionResult UpdateTrip(int id, [FromBody]Trip trip)
        {
            _tripService.UpdateTrip(id,trip);
            return Ok();
        }

        [HttpDelete("deleteTrip/{id}")]
        public IActionResult DeleteTrip(int id)
        {
            _tripService.DeleteTrip(id);
            return Ok();
        }
    }
}
