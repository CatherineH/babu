export default function(part) {
  let {
    options,
	measurements,
    Point,
    Path,
    points,
    paths,
    Snippet,
    snippets,
    complete,
    sa,
    paperless,
    macro
  } = part.shorthand()
  let pi = 3.14159
  let sleeveShoulderLength = options.sleeveLength*(1+pi/2)
  points.cuffFront = new Point(0, 0)
  points.cuffBack = new Point(measurements.bicepsCircumference, 0)
  points.shoulderFront = new Point(measurements.bicepsCircumference, options.sleeveLength)
  points.shoulderBack = new Point(0, options.sleeveLength)
  points.shoulderTop = new Point(measurements.bicepCircumference/2, sleeveShoulderLength)
  points.shoulderBackC1 = new Point(measurements.bicepCircumference/4, sleeveShoulderLength)
  points.shoulderBackC2 = new Point(measurements.bicepCircumference/4, options.sleeveLength)
  points.shoulderFrontC1 = new Point(measurements.bicepCircumference*3/4, options.sleeveLength)
  points.shoulderFrontC2 = new Point(measurements.bicepCircumference*3/4, sleeveShoulderLength)
  paths.seam = new Path()
    .move(points.cuffFront)
	  .line(points.cuffBack)
    .line(points.shoulderFront)
    .curve(points.shoulderFrontC1, points.shoulderFrontC2, points.shoulderTop)
    .curve(points.shoulderBackC1, points.shoulderBackC2, points.shoulderBack)
    .close()
    .attr('class', 'fabric')

  // Complete?
  if (complete) {
    if (sa) {
  }
  // Paperless?
  if (paperless) {
  }
}

  return part
}
