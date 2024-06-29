'use client';

import React from 'react'
import {ShaderGradientCanvas, ShaderGradient} from 'shadergradient';

export default function Canvas() {
  return (
    <div className='fixed w-screen h-screen overflow-hidden -z-10 opacity-70'>
      <ShaderGradientCanvas
        className='absolute w-screen h-screen scale-150 bg-gradient'
      >
        <ShaderGradient
        animate='on'
        control='query'
        // urlString='https://www.shadergradient.co/customize?animate=on&axesHelper=off&bgColor1=%23000000&bgColor2=%23000000&brightness=1.2&cAzimuthAngle=180&cDistance=6&cPolarAngle=90&cameraZoom=1&color1=%23003687&color2=%23002650&color3=%23003675&destination=onCanvas&embedMode=off&envPreset=dawn&format=gif&fov=30&frameRate=10&gizmoHelper=hide&grain=off&lightType=env&pixelDensity=1&positionX=0&positionY=0&positionZ=0&range=enabled&rangeEnd=40&rangeStart=0&reflection=0.1&rotationX=0&rotationY=0&rotationZ=-90&shader=defaults&toggleAxis=false&type=waterPlane&uDensity=1&uFrequency=5.5&uSpeed=0.3&uStrength=3&uTime=0.2&wireframe=false'
        urlString='https://www.shadergradient.co/customize?animate=on&axesHelper=off&bgColor1=%23000000&bgColor2=%23000000&brightness=1.2&cAzimuthAngle=180&cDistance=6&cPolarAngle=90&cameraZoom=1&color1=%23001639&color2=%23002650&color3=%23000810&destination=onCanvas&embedMode=off&envPreset=dawn&format=gif&fov=30&frameRate=10&gizmoHelper=hide&grain=off&lightType=env&pixelDensity=1&positionX=0&positionY=0&positionZ=0&range=enabled&rangeEnd=40&rangeStart=0&reflection=0.1&rotationX=0&rotationY=0&rotationZ=-90&shader=defaults&toggleAxis=false&type=waterPlane&uDensity=1&uFrequency=5.5&uSpeed=0.3&uStrength=3&uTime=0.2&wireframe=false'
        />
      </ShaderGradientCanvas>
    </div>
  )
}