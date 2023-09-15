export function applyFilters(searchLocation, URL, filter) {
  // location name
  // locationName default = california,%20fremont
  searchLocation && (URL = URL + `&locationName=${searchLocation}`)

  // filters
  // remote
  filter?.remote ? (URL = URL + `&RemoteIndicator=True`) : (URL = URL + `&RemoteIndicator=False`)
  // full & part time
  if (!(filter?.fullTime && filter?.partTime)) {
    // full time
    filter?.fullTime == true && (URL = URL + `&PositionScheduleTypeCode=1`)
    // part time
    filter?.partTime == true && (URL = URL + `&PositionScheduleTypeCode=2`)
  }
  // relocate, radius, salary
  filter?.relocate && (URL = URL + `&relocation=True`)
  filter?.radius && (URL = URL + `&radius=${filter?.radius}`)
  filter?.salary && (URL = URL + `&salaryBucket=${filter?.salary}`)

  // include remote jobs, full time, willling to relocate, 75 radius, 75,000 salary

  return URL
}