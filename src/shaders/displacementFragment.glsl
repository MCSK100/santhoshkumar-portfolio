uniform float uTime;
uniform sampler2D uTexture;
uniform vec2 uMouse;
uniform float uIntensity;

varying vec2 vUv;

void main() {
  vec2 uv = vUv;

  // Distance from mouse
  float dist = distance(uv, uMouse);
  float influence = smoothstep(0.5, 0.0, dist) * uIntensity;

  // Displacement
  vec2 displacement = vec2(
    sin(uTime * 2.0 + uv.y * 10.0) * 0.02,
    cos(uTime * 2.0 + uv.x * 10.0) * 0.02
  ) * influence;

  // RGB split
  float rgbSplit = influence * 0.02;

  vec4 r = texture2D(uTexture, uv + displacement + vec2(rgbSplit, 0.0));
  vec4 g = texture2D(uTexture, uv + displacement);
  vec4 b = texture2D(uTexture, uv + displacement - vec2(rgbSplit, 0.0));

  gl_FragColor = vec4(r.r, g.g, b.b, 1.0);
}
