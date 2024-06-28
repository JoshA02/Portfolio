'use client';

import React from 'react'
import {ShaderGradientCanvas, ShaderGradient} from 'shadergradient';
// import * as reactSpring from '@react-spring/three';
// import * as drei from '@react-three/drei'
// import * as fiber from '@react-three/fiber'

export default function Canvas() {
  return (
    <div className='absolute w-full h-full -z-10 animate-fade opacity-0'>
      <ShaderGradientCanvas>
        <ShaderGradient
        animate='on'
        control='query'
        urlString='https://www.shadergradient.co/customize?animate=on&axesHelper=on&bgColor1=%23000000&bgColor2=%23000000&brightness=1.1&cAzimuthAngle=180&cDistance=2.4&cPolarAngle=95&cameraZoom=1&color1=%2300020c&color2=%230d0f43&color3=%2300071e&destination=onCanvas&embedMode=off&envPreset=city&format=gif&fov=45&frameRate=10&grain=off&lightType=3d&pixelDensity=1.3&positionX=0&positionY=-2.1&positionZ=0&range=enabled&rangeEnd=40&rangeStart=0&reflection=0&rotationX=0&rotationY=0&rotationZ=225&shader=defaults&type=plane&uAmplitude=0&uDensity=0.6&uFrequency=5.5&uSpeed=0.2&uStrength=2.5&uTime=0.2&wireframe=false'
        />
      </ShaderGradientCanvas>
    </div>
  )
}