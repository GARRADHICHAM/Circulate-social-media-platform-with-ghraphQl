
import { useRouter } from 'next/router';
import Cookies from 'js-cookie';

// import updateAvatar from '../user/updateAvatar'
import { Avatar, Button, Box, Slider } from "@mui/material";

import AvatarEditor from "react-avatar-editor";

import React, { useEffect, useState } from 'react'


const UploadAvatar = (props) => {
  const pathavatar = props.avatar
  

  const [userpic, setUserpic] = useState();
  // useEffect(() => {

  //   setUserpic(props.avatar)

  // }, []);
  const [isOpen, setIsOpen] = useState(false);
  const [src, setSrc] = useState(null);
  const [preview, setPreView] = useState(null);
  const [userData, setUserData] = useState({});
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const router = useRouter();

  const toggleModal = () => {
    setIsOpen(!isOpen);
  };

 
  var editor = "";


  const [picture, setPicture] = useState({
    cropperOpen: false,
    img: null,
    zoom: 2,
    croppedImg:  props.data,
  });

  const handleSlider = (event, value) => {
    setPicture({
      ...picture,
      zoom: value
    });
  };

  const handleCancel = () => {
    setPicture({
      ...picture,
      cropperOpen: false
    });
  };

  const setEditorRef = (ed) => {
    editor = ed;
  };

  const handleSave = (e) => {
    if (setEditorRef) {
      const canvasScaled = editor.getImageScaledToCanvas();
      const croppedImg = canvasScaled.toDataURL();

      //save methode==================================================================================

      



      //===============================================================================================

      setPicture({
        ...picture,
        img: null,
        cropperOpen: false,
        croppedImg: croppedImg
      });
    }
  };

  const handleFileChange = (e) => {
    let url = URL.createObjectURL(e.target.files[0]);

    setPicture({
      ...picture,
      img: url,
      cropperOpen: true
    });
  };



  return (
    <>
      <div className="relative" onClick={toggleModal}>
        <label className="flex cursor-pointer ">
          <img className="w-24 h-24  justify-self-center p-1 rounded-full ring-2 ring-gray-300" src={pathavatar} alt="" />

          <span className="bottom-0 left-14 absolute  w-8 h-8 bg-green-400 border-2 border-white  rounded-full">
            <div className='flex items-center justify-center w-6 h-6 '>


              <img src='edittt.png' className=' w-4 h-4 ml-1 mt-0.5' />
              <span className="sr-only">Attach file</span>
              <input type="file" accept="image/*" onChange={handleFileChange}
                className="hidden" />
            </div>

          </span>
        </label>

      </div>





      {/* <Box width="35%">
          <Avatar
            src={picture.croppedImg}
            style={{ width: "100%", height: "auto", padding: "5" }}
          />
          <Button
            variant="contained"
            width="100%"
            style={{ backgroundColor: "red", color: "white" }}
          >
            hola
            <input type="file" accept="image/*" onChange={handleFileChange} />
          </Button>
        </Box> */}

      {picture.cropperOpen && (
        <div className="fixed inset-0 z-10 flex items-center justify-center backdrop-filter backdrop-blur-sm bg-opacity-50">
          <div className="bg-white w-auto p-6 relative rounded-lg">
            <div>
              <Box display="flex">
                <Box display="block">
                  <AvatarEditor
                    ref={setEditorRef}
                    image={picture.img}
                    width={200}
                    height={200}
                    border={50}
                    color={[255, 255, 255, 0.6]} // RGBA
                    rotate={0}
                    scale={picture.zoom}
                  />
                  <Slider
                    aria-label="raceSlider"
                    value={picture.zoom}
                    min={1}
                    max={10}
                    step={0.1}
                    onChange={handleSlider}
                  ></Slider>
                  <Box>
                    <Button variant="contained" onClick={handleCancel}>
                      Cancel
                    </Button>
                    <Button onClick={handleSave}>Save</Button>
                  </Box>
                </Box>
              </Box>
            </div>
          </div>
        </div>
      )}



    </>
  );
};

export default UploadAvatar;
