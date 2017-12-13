export default {
  getRandomLocation (latitude, longitude, radiusInMeters) {
    var randomCoordinates = this.getRandomCoordinates(radiusInMeters, true)
    // Earths radius in meters via WGS 84 model.
    const earth = 6378137
    // Offsets in meters.
    const northOffset = randomCoordinates[0]
    const eastOffset = randomCoordinates[1]
    // Offset coordinates in radians.
    const offsetLatitude = northOffset / earth
    const offsetLongitude = eastOffset / (earth * Math.cos(Math.PI * (latitude / 180)))
    // Offset position in decimal degrees.
    return {
      latitude: latitude + (offsetLatitude * (180 / Math.PI)),
      longitude: longitude + (offsetLongitude * (180 / Math.PI))
    }
  },
  getRandomCoordinates (radius, uniform) {
    // Generate two random numbers
    var a = Math.random()
    var b = Math.random()
    // Flip for more uniformity.
    if (uniform) {
      if (b < a) {
        var c = b
        b = a
        a = c
      }
    }
    // It's all triangles.
    return [b * radius * Math.cos(2 * Math.PI * a / b), b * radius * Math.sin(2 * Math.PI * a / b)]
  }
}
