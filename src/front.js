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
  let armpitDepth = measurements.bicepsCircumference/2;
  let shoulderWidth = measurements.bicepsCircumference/3;
  let bodyWidth = measurements.chestCircumference/2;
  let neckExtension = measurements.bicepsCircumference/4;
  let frontLength = measurements.hpsToHipsFront + measurements.naturalWaistToHip+ measurements.hipsToUpperLeg;
  let legWidth = measurements.hipsCircumference/3;
  let legHeight = measurements.hipsCircumference/3;
  points.crotchLeft = new Point(legWidth, 0)
  points.crotchRight = new Point(bodyWidth-legWidth, 0)
  points.hipLeft = new Point(0, legHeight)
  points.hipRight = new Point(bodyWidth, legHeight)
  points.armpitLeft = new Point(0, frontLength - armpitDepth)
  points.armpitRight = new Point(bodyWidth, frontLength - armpitDepth)
  points.shoulderLeft = new Point(shoulderWidth, frontLength+neckExtension)
  points.shoulderRight = new Point(bodyWidth-shoulderWidth, frontLength+neckExtension)

  paths.seam = new Path()
    .move(points.crotchLeft)
	  .line(points.crotchRight)
    .line(points.hipRight)
    .line(points.armpitRight)
    .line(points.shoulderRight)
    .line(points.shoulderLeft)
    .line(points.armpitLeft)
    .line(points.hipLeft)
    .line(points.crotchLeft)
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
