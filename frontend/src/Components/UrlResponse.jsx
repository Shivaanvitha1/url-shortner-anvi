import { Text } from '@mantine/core';
import Service from '../utils/http';
import { QRCodeSVG } from 'qrcode.react';
import { Image } from '@mantine/core';
import { IconCopy } from '@tabler/icons-react';
import { useClipboard } from '@mantine/hooks';
import { TextInput } from '@mantine/core';
import React from 'react';
const obj = new Service();  


export default function UrlResponse(props) {
   const surl = obj.getBaseURL() + '/api/s/' + props?.response?.shortCode;
   return (
       <div>
           <Text color="blue"> {surl} </Text>
            <QRCodeSVG imageSettings={{
                     excavate: true,
                     src: '/HomeBackground.png',
                     height: 50,
                     width: 50,
                 }} value={surl} size={100}>
                   <Image src={'/HomeBackground.png'} />
            </QRCodeSVG>
            <TextInput value={surl} rightSection={<IconCopy
           onClick={()=>{
               console.log("clicked");
               clipboard.copy(surl)
           }}
           />}/>

       </div>
   )
}

