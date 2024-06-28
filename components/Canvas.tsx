'use client';

import React from 'react'
import {ShaderGradientCanvas, ShaderGradient} from 'shadergradient';

export default function Canvas() {
  return (
    <div className='absolute overflow-hidden w-full h-full -z-10 bg-gradient'>
      <ShaderGradientCanvas className='absolute w-full h-full' style={{transform: 'scale(1.6)'}}>
        <ShaderGradient
        animate='on'
        control='query'
        // urlString='https://www.shadergradient.co/customize?animate=on&axesHelper=on&bgColor1=%23000000&bgColor2=%23000000&brightness=1.1&cAzimuthAngle=180&cDistance=2.4&cPolarAngle=95&cameraZoom=1&color1=%2300020c&color2=%230d0f43&color3=%2300071e&destination=onCanvas&embedMode=off&envPreset=city&format=gif&fov=45&frameRate=10&grain=off&lightType=3d&pixelDensity=1.3&positionX=0&positionY=-2.1&positionZ=0&range=enabled&rangeEnd=40&rangeStart=0&reflection=0&rotationX=0&rotationY=0&rotationZ=225&shader=defaults&type=plane&uAmplitude=0&uDensity=0.6&uFrequency=5.5&uSpeed=0.2&uStrength=2.5&uTime=0.2&wireframe=false'
        // urlString='https://www.shadergradient.co/customize?animate=on&axesHelper=off&bgColor1=%23000000&bgColor2=%23000000&brightness=1.2&cAzimuthAngle=180&cDistance=6&cPolarAngle=90&cameraZoom=1&color1=%23003687&color2=%23002650&color3=%23003675&destination=onCanvas&embedMode=off&envPreset=dawn&format=gif&fov=30&frameRate=10&gizmoHelper=hide&grain=off&lightType=env&pixelDensity=1&positionX=0&positionY=0&positionZ=0&range=enabled&rangeEnd=40&rangeStart=0&reflection=0.1&rotationX=0&rotationY=0&rotationZ=-90&shader=defaults&toggleAxis=false&type=waterPlane&uDensity=1&uFrequency=5.5&uSpeed=0.3&uStrength=3&uTime=0.2&wireframe=false'
        urlString='https://www.shadergradient.co/customize?animate=on&axesHelper=off&bgColor1=%23000000&bgColor2=%23000000&brightness=1.2&cAzimuthAngle=180&cDistance=6&cPolarAngle=90&cameraZoom=1&color1=%23001639&color2=%23002650&color3=%23000810&destination=onCanvas&embedMode=off&envPreset=dawn&format=gif&fov=30&frameRate=10&gizmoHelper=hide&grain=off&lightType=env&pixelDensity=1&positionX=0&positionY=0&positionZ=0&range=enabled&rangeEnd=40&rangeStart=0&reflection=0.1&rotationX=0&rotationY=0&rotationZ=-90&shader=defaults&toggleAxis=false&type=waterPlane&uDensity=1&uFrequency=5.5&uSpeed=0.3&uStrength=3&uTime=0.2&wireframe=false'
        />
      </ShaderGradientCanvas>
    </div>
  )
}