### How to create a new icon

1. Use [svg-to-jsx](https://transform.tools/svg-to-jsx) website to convert the svg to jsx

2. Copy the generated code, except the `<svg>` tag, and paste it in `icon.tsx` in the right switch case statement

3. Remove the `fill` attribute from the `<path>` tag
