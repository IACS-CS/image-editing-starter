# Image Editing Challenges

In this assignment, you will develop a series of image filters to practice and demonstrate your understanding of image processing. Each challenge level introduces new concepts and increases in complexity. You must complete at least **one** challenge from each of the following sections. I encourage you to try customizing the project a bit by e.g. focusing on one type of image (you could do "sky" images, or faces, or skin tones, or satellite images).

## Level 0 Challenges: Basic Pixel Adjustments

These challenges involve simple adjustments to pixel values. They are designed to get you familiar with manipulating pixel data. Each of these can be done by changing every pixel without any conditional logic.

1. **Brighten Filter**: Increase the brightness of an image by adding a fixed value to each color channel.
2. **Darken Filter**: Decrease the brightness of an image by subtracting a fixed value from each color channel.
3. **Grayscale Filter**: Convert the image to grayscale using the average method (set each channel to the average of R, G, and B).
4. **Noise Filter**: Add random noise to the image by adding a random value to each color channel.
5. **Color Tint**: Give the image a color cast by adding a fixed value to one or two channels (e.g., add to red for a warm tint, add to blue for a cool tint).
6. **Increase Contrast**: Push each color value away from the middle (128) to make bright pixels brighter and dark pixels darker.
7. **Invert Colors**: Create a "negative" of the image by replacing each channel value with 255 minus the original value.

## Level 1 Challenges: Conditional Logic and Pixels

These challenges introduce conditional logic to your filters. Each of these requires using an **if** statement to treat pixels differently depending on their color, brightness, or position.

1. **Threshold Filter**: Implement a filter that sets all pixels to either black or white, depending on a brightness threshold.
2. **Sepia Tone**: Apply a sepia effect to give the image a warm, brownish tone. This requires computing new values from a weighted mix of all three color channels.
3. **Posterize**: Create a filter that replaces all pixels with colors from a fixed
   palette based on proximity, creating the equivalent of e.g. a "4 color" poster.
4. **Warm/Cool Split**: Make dark pixels warmer (shift toward red/orange) and bright pixels cooler (shift toward blue).
5. **Conditional Noise**: Add noise only to certain pixels—for example, only to dark areas or only to pixels in the top half of the image.
6. **Color Channel Swap**: Swap color channels (e.g., swap red and blue) but only for pixels that meet some condition (e.g., above a brightness threshold).
7. **Red-eye Reduction**: Detect pixels that are very red compared to their green and blue values and desaturate them.

## Level 2 Challenges: Using Pixel Data

For this next challenge, take on a slightly more complex task. For example, you
might want to go through the image and extract a color palette from it, or you
could make a black and white filter which first determines the average brightness
before setting pixels. Or you might look at something like a motion blur which
takes pixels e.g. to the left of a pixel and "blurs" them in, or an edge detector
which highlights pixels that are different from those around them.

In most cases, you will want to use one of two techniques:
A. Two passes: make a first pass through to collect information (such as
   the average brightness) and second go through and make changes.
B. Make a copy: Duplicate the pixel data so that you can reference the
   original data while editing the new data.

Choices:
- Edge Detection
- Blur
- Make a border whose color is the average color of the image.
- Black & White filter with a cut-off based on the average brightness of the image.
- Color Palette Extraction: reduce the image to a small set of the most common colors.
- Sharpen: emphasize differences between neighboring pixels to make edges crisper.

## Level 3 Challenges: Working with Options

These challenges involve creating filters with adjustable options, adding complexity and versatility.

1. **Blur Filter**: Implement a blur filter with adjustable blur radius.
2. **Vignette Effect**: Add a vignette effect where the edges of the photo fade to black. The radius of the effect should be adjustable.
3. **Color Shift**: Create a filter that shifts all colors in the image by a certain amount.
4. **Adjustable Noise**: Implement a noise filter where the user can control the intensity and whether the noise affects all channels equally or independently.
5. **Add Options**: Take any filter from Level 0 or Level 1 and add Options so the user can
   customize it.

## Level 4 Challenge: The Ultimate Filter

This is your ultimate challenge where you can showcase your creativity and understanding.

**Create Your Own Filter**: Develop a unique, artistic or purposeful filter. This could be anything from a complex artistic filter to an advanced image processing effect. The filter should include multiple options to adjust its behavior and appearance. You could analyze an image to pull out data, you could simplify, or you could try to take on a task such as changing the way a sky looks or enhancing people's eyes in close-ups of faces.
