import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

import { completeprofile, process, processCircle } from './assets';
import { useState } from 'react';

export default function CoreValue(){
  
    return(
        <Grid container spacing={10} sx={{ mt: 8 }} item xs={12} className='w-100%'>
       
          <Typography variant="h1" gutterBottom style={{ textAlign: 'center', width: '100%', fontFamily: 'ClashDisplay-Variable', fontWeight: '600', fontSize: '42px', marginBottom: '40px', marginTop: '40px' }}>
            Process
            </Typography>
            <div className='w-100% relative'>
              {process}
              <div className='circle-animation'  style={{position:'absolute',top:"1605px",left:"140px",display:"inline-block",width:"fit-content",borderRadius:"100px" }}> 
               <svg
    width="189"
    height="189"
    viewBox="0 0 189 189"
    fill="none"
    // style={{boxShadow: "0px 0px 47.4427px 9.03671px #32D94B, inset -7.03775px 17.8014px 19.8713px #000000, inset 9.52167px -9.52167px 52.9902px -7.45174px rgba(223, 223, 223, 0.28)",borderRadius:"100px"}}
    xmlns="http://www.w3.org/2000/svg"
  >
    <g filter="url(#filter0_ii_1585_1501)">
      <circle cx="94.0368" cy="94.0368" r="94.0368" fill="#0E1803" />
    </g>
    <circle
      cx="94.0368"
      cy="94.0368"
      r="88.448"
      stroke="url(#paint0_radial_1585_1501)"
      stroke-width="11.1776"
    />
    <defs>
      <filter
        id="filter0_ii_1585_1501"
        x="-7.03775"
        y="-9.52167"
        width="204.634"
        height="215.396"
        filterUnits="userSpaceOnUse"
        color-interpolation-filters="sRGB"
      >
        <feFlood flood-opacity="0" result="BackgroundImageFix" />
        <feBlend
          mode="normal"
          in="SourceGraphic"
          in2="BackgroundImageFix"
          result="shape"
        />
        <feColorMatrix
          in="SourceAlpha"
          type="matrix"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          result="hardAlpha"
        />
        <feMorphology
          radius="7.45174"
          operator="dilate"
          in="SourceAlpha"
          result="effect1_innerShadow_1585_1501"
        />
        <feOffset dx="9.52167" dy="-9.52167" />
        <feGaussianBlur stdDeviation="26.4951" />
        <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
        <feColorMatrix
          type="matrix"
          values="0 0 0 0 0.875 0 0 0 0 0.875 0 0 0 0 0.875 0 0 0 0.28 0"
        />
        <feBlend
          mode="normal"
          in2="shape"
          result="effect1_innerShadow_1585_1501"
        />
        <feColorMatrix
          in="SourceAlpha"
          type="matrix"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          result="hardAlpha"
        />
        <feOffset dx="-7.03775" dy="17.8014" />
        <feGaussianBlur stdDeviation="9.93565" />
        <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
        <feColorMatrix
          type="matrix"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 1 0"
        />
        <feBlend
          mode="normal"
          in2="effect1_innerShadow_1585_1501"
          result="effect2_innerShadow_1585_1501"
        />
      </filter>
      <radialGradient
        id="paint0_radial_1585_1501"
        cx="0"
        cy="0"
        r="1"
        gradientUnits="userSpaceOnUse"
        gradientTransform="translate(94.0368 94.0368) scale(94.0368)"
      >
        <stop stop-color="#006700" />
        <stop offset="0.886239" stop-color="#093809" />
        <stop offset="0.944422" stop-color="#00DE01" />
        <stop offset="0.974604" stop-color="#69E96A" />
        <stop offset="0.983382" stop-color="#6DF16E" />
        <stop offset="0.988395" stop-color="#6DF06E" />
      </radialGradient>
    </defs>
    <image  href='/images/Step-01.png' x="45" y="50" width="100" height="80" />
    </svg></div>
              <div className='circle-animation' style={{position:'absolute',top:"1605px",left:"395px",display:"inline-block",width:"fit-content",borderRadius:"100px"}}>  <svg
    width="189"
    height="189"
    viewBox="0 0 189 189"
    fill="none"
    // style={{boxShadow: "0px 0px 47.4427px 9.03671px #32D94B, inset -7.03775px 17.8014px 19.8713px #000000, inset 9.52167px -9.52167px 52.9902px -7.45174px rgba(223, 223, 223, 0.28)",borderRadius:"100px"}}
    xmlns="http://www.w3.org/2000/svg"
  >
    <g filter="url(#filter0_ii_1585_1501)">
      <circle cx="94.0368" cy="94.0368" r="94.0368" fill="#0E1803" />
    </g>
    <circle
      cx="94.0368"
      cy="94.0368"
      r="88.448"
      stroke="url(#paint0_radial_1585_1501)"
      stroke-width="11.1776"
    />
    <defs>
      <filter
        id="filter0_ii_1585_1501"
        x="-7.03775"
        y="-9.52167"
        width="204.634"
        height="215.396"
        filterUnits="userSpaceOnUse"
        color-interpolation-filters="sRGB"
      >
        <feFlood flood-opacity="0" result="BackgroundImageFix" />
        <feBlend
          mode="normal"
          in="SourceGraphic"
          in2="BackgroundImageFix"
          result="shape"
        />
        <feColorMatrix
          in="SourceAlpha"
          type="matrix"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          result="hardAlpha"
        />
        <feMorphology
          radius="7.45174"
          operator="dilate"
          in="SourceAlpha"
          result="effect1_innerShadow_1585_1501"
        />
        <feOffset dx="9.52167" dy="-9.52167" />
        <feGaussianBlur stdDeviation="26.4951" />
        <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
        <feColorMatrix
          type="matrix"
          values="0 0 0 0 0.875 0 0 0 0 0.875 0 0 0 0 0.875 0 0 0 0.28 0"
        />
        <feBlend
          mode="normal"
          in2="shape"
          result="effect1_innerShadow_1585_1501"
        />
        <feColorMatrix
          in="SourceAlpha"
          type="matrix"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          result="hardAlpha"
        />
        <feOffset dx="-7.03775" dy="17.8014" />
        <feGaussianBlur stdDeviation="9.93565" />
        <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
        <feColorMatrix
          type="matrix"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 1 0"
        />
        <feBlend
          mode="normal"
          in2="effect1_innerShadow_1585_1501"
          result="effect2_innerShadow_1585_1501"
        />
      </filter>
      <radialGradient
        id="paint0_radial_1585_1501"
        cx="0"
        cy="0"
        r="1"
        gradientUnits="userSpaceOnUse"
        gradientTransform="translate(94.0368 94.0368) scale(94.0368)"
      >
        <stop stop-color="#006700" />
        <stop offset="0.886239" stop-color="#093809" />
        <stop offset="0.944422" stop-color="#00DE01" />
        <stop offset="0.974604" stop-color="#69E96A" />
        <stop offset="0.983382" stop-color="#6DF16E" />
        <stop offset="0.988395" stop-color="#6DF06E" />
      </radialGradient>
    </defs>
    <image  href='/images/Step-02.png' x="45" y="50" width="100" height="80" />
  </svg></div>
              <div className='circle-animation' style={{position:'absolute',top:"1605px",left:"645px",display:"inline-block",width:"fit-content",borderRadius:"100px"}}>  <svg
    width="189"
    height="189"
    viewBox="0 0 189 189"
    fill="none"
    // style={{boxShadow: "0px 0px 47.4427px 9.03671px #32D94B, inset -7.03775px 17.8014px 19.8713px #000000, inset 9.52167px -9.52167px 52.9902px -7.45174px rgba(223, 223, 223, 0.28)",borderRadius:"100px"}}
    xmlns="http://www.w3.org/2000/svg"
  >
    <g filter="url(#filter0_ii_1585_1501)">
      <circle cx="94.0368" cy="94.0368" r="94.0368" fill="#0E1803" />
    </g>
    <circle
      cx="94.0368"
      cy="94.0368"
      r="88.448"
      stroke="url(#paint0_radial_1585_1501)"
      stroke-width="11.1776"
    />
    <defs>
      <filter
        id="filter0_ii_1585_1501"
        x="-7.03775"
        y="-9.52167"
        width="204.634"
        height="215.396"
        filterUnits="userSpaceOnUse"
        color-interpolation-filters="sRGB"
      >
        <feFlood flood-opacity="0" result="BackgroundImageFix" />
        <feBlend
          mode="normal"
          in="SourceGraphic"
          in2="BackgroundImageFix"
          result="shape"
        />
        <feColorMatrix
          in="SourceAlpha"
          type="matrix"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          result="hardAlpha"
        />
        <feMorphology
          radius="7.45174"
          operator="dilate"
          in="SourceAlpha"
          result="effect1_innerShadow_1585_1501"
        />
        <feOffset dx="9.52167" dy="-9.52167" />
        <feGaussianBlur stdDeviation="26.4951" />
        <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
        <feColorMatrix
          type="matrix"
          values="0 0 0 0 0.875 0 0 0 0 0.875 0 0 0 0 0.875 0 0 0 0.28 0"
        />
        <feBlend
          mode="normal"
          in2="shape"
          result="effect1_innerShadow_1585_1501"
        />
        <feColorMatrix
          in="SourceAlpha"
          type="matrix"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          result="hardAlpha"
        />
        <feOffset dx="-7.03775" dy="17.8014" />
        <feGaussianBlur stdDeviation="9.93565" />
        <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
        <feColorMatrix
          type="matrix"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 1 0"
        />
        <feBlend
          mode="normal"
          in2="effect1_innerShadow_1585_1501"
          result="effect2_innerShadow_1585_1501"
        />
      </filter>
      <radialGradient
        id="paint0_radial_1585_1501"
        cx="0"
        cy="0"
        r="1"
        gradientUnits="userSpaceOnUse"
        gradientTransform="translate(94.0368 94.0368) scale(94.0368)"
      >
        <stop stop-color="#006700" />
        <stop offset="0.886239" stop-color="#093809" />
        <stop offset="0.944422" stop-color="#00DE01" />
        <stop offset="0.974604" stop-color="#69E96A" />
        <stop offset="0.983382" stop-color="#6DF16E" />
        <stop offset="0.988395" stop-color="#6DF06E" />
      </radialGradient>
    </defs>

    <image  href='/images/Step-03.png' x="45" y="50" width="100" height="80" />
  </svg></div>
              <div className='circle-animation' style={{position:'absolute',top:"1605px",left:"900px",display:"inline-block",width:"fit-content",borderRadius:"100px"}}>  <svg
    width="189"
    height="189"
    viewBox="0 0 189 189"
    fill="none"
    // style={{boxShadow: "0px 0px 47.4427px 9.03671px #32D94B, inset -7.03775px 17.8014px 19.8713px #000000, inset 9.52167px -9.52167px 52.9902px -7.45174px rgba(223, 223, 223, 0.28)",borderRadius:"100px"}}
    xmlns="http://www.w3.org/2000/svg"
  >
    <g filter="url(#filter0_ii_1585_1501)">
      <circle cx="94.0368" cy="94.0368" r="94.0368" fill="#0E1803" />
    </g>
    <circle
      cx="94.0368"
      cy="94.0368"
      r="88.448"
      stroke="url(#paint0_radial_1585_1501)"
      stroke-width="11.1776"
    />
    <defs>
      <filter
        id="filter0_ii_1585_1501"
        x="-7.03775"
        y="-9.52167"
        width="204.634"
        height="215.396"
        filterUnits="userSpaceOnUse"
        color-interpolation-filters="sRGB"
      >
        <feFlood flood-opacity="0" result="BackgroundImageFix" />
        <feBlend
          mode="normal"
          in="SourceGraphic"
          in2="BackgroundImageFix"
          result="shape"
        />
        <feColorMatrix
          in="SourceAlpha"
          type="matrix"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          result="hardAlpha"
        />
        <feMorphology
          radius="7.45174"
          operator="dilate"
          in="SourceAlpha"
          result="effect1_innerShadow_1585_1501"
        />
        <feOffset dx="9.52167" dy="-9.52167" />
        <feGaussianBlur stdDeviation="26.4951" />
        <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
        <feColorMatrix
          type="matrix"
          values="0 0 0 0 0.875 0 0 0 0 0.875 0 0 0 0 0.875 0 0 0 0.28 0"
        />
        <feBlend
          mode="normal"
          in2="shape"
          result="effect1_innerShadow_1585_1501"
        />
        <feColorMatrix
          in="SourceAlpha"
          type="matrix"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          result="hardAlpha"
        />
        <feOffset dx="-7.03775" dy="17.8014" />
        <feGaussianBlur stdDeviation="9.93565" />
        <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
        <feColorMatrix
          type="matrix"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 1 0"
        />
        <feBlend
          mode="normal"
          in2="effect1_innerShadow_1585_1501"
          result="effect2_innerShadow_1585_1501"
        />
      </filter>
      <radialGradient
        id="paint0_radial_1585_1501"
        cx="0"
        cy="0"
        r="1"
        gradientUnits="userSpaceOnUse"
        gradientTransform="translate(94.0368 94.0368) scale(94.0368)"
      >
        <stop stop-color="#006700" />
        <stop offset="0.886239" stop-color="#093809" />
        <stop offset="0.944422" stop-color="#00DE01" />
        <stop offset="0.974604" stop-color="#69E96A" />
        <stop offset="0.983382" stop-color="#6DF16E" />
        <stop offset="0.988395" stop-color="#6DF06E" />
      </radialGradient>
    </defs>
    <image  href='/images/Step-04.png' x="45" y="50" width="100" height="80" />
  </svg></div>
              <div className='circle-animation' style={{position:'absolute',top:"1605px",left:"1150px",display:"inline-block",width:"fit-content",borderRadius:"100px"}}>  <svg
    width="189"
    height="189"
    viewBox="0 0 189 189"
    fill="none"
    // style={{boxShadow: "0px 0px 47.4427px 9.03671px #32D94B, inset -7.03775px 17.8014px 19.8713px #000000, inset 9.52167px -9.52167px 52.9902px -7.45174px rgba(223, 223, 223, 0.28)",borderRadius:"100px"}}
    xmlns="http://www.w3.org/2000/svg"
  >
    <g filter="url(#filter0_ii_1585_1501)">
      <circle cx="94.0368" cy="94.0368" r="94.0368" fill="#0E1803" />
    </g>
    <circle
      cx="94.0368"
      cy="94.0368"
      r="88.448"
      stroke="url(#paint0_radial_1585_1501)"
      stroke-width="11.1776"
    />
    <defs>
      <filter
        id="filter0_ii_1585_1501"
        x="-7.03775"
        y="-9.52167"
        width="204.634"
        height="215.396"
        filterUnits="userSpaceOnUse"
        color-interpolation-filters="sRGB"
      >
        <feFlood flood-opacity="0" result="BackgroundImageFix" />
        <feBlend
          mode="normal"
          in="SourceGraphic"
          in2="BackgroundImageFix"
          result="shape"
        />
        <feColorMatrix
          in="SourceAlpha"
          type="matrix"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          result="hardAlpha"
        />
        <feMorphology
          radius="7.45174"
          operator="dilate"
          in="SourceAlpha"
          result="effect1_innerShadow_1585_1501"
        />
        <feOffset dx="9.52167" dy="-9.52167" />
        <feGaussianBlur stdDeviation="26.4951" />
        <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
        <feColorMatrix
          type="matrix"
          values="0 0 0 0 0.875 0 0 0 0 0.875 0 0 0 0 0.875 0 0 0 0.28 0"
        />
        <feBlend
          mode="normal"
          in2="shape"
          result="effect1_innerShadow_1585_1501"
        />
        <feColorMatrix
          in="SourceAlpha"
          type="matrix"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          result="hardAlpha"
        />
        <feOffset dx="-7.03775" dy="17.8014" />
        <feGaussianBlur stdDeviation="9.93565" />
        <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
        <feColorMatrix
          type="matrix"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 1 0"
        />
        <feBlend
          mode="normal"
          in2="effect1_innerShadow_1585_1501"
          result="effect2_innerShadow_1585_1501"
        />
      </filter>
      <radialGradient
        id="paint0_radial_1585_1501"
        cx="0"
        cy="0"
        r="1"
        gradientUnits="userSpaceOnUse"
        gradientTransform="translate(94.0368 94.0368) scale(94.0368)"
      >
        <stop stop-color="#006700" />
        <stop offset="0.886239" stop-color="#093809" />
        <stop offset="0.944422" stop-color="#00DE01" />
        <stop offset="0.974604" stop-color="#69E96A" />
        <stop offset="0.983382" stop-color="#6DF16E" />
        <stop offset="0.988395" stop-color="#6DF06E" />
      </radialGradient>
    </defs>
    <image  href='/images/Step-05.png' x="45" y="50" width="100" height="80" />
  </svg></div>
            </div>
          
        </Grid>
    );
}