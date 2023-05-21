// TODO HungHVd - 14/04/2023: ...
import React from 'react';

// Components
import Cropper from '../../../common/CropMedia';

function CropAvatar({url, cropDataRef}) {
    const [zoom, setZoom] = React.useState(1);
    const [crop, setCrop] = React.useState(undefined);
    const onCropComplete = (croppedArea, _croppedAreaPixels) => {
        cropDataRef.current = _croppedAreaPixels;
    };
    return (
        <Cropper
            image={url}
            zoom={zoom}
            crop={crop}
            onCropComplete={onCropComplete}
            onCropChange={setCrop}
            onZoomChange={setZoom}
            cropSize={{
                width: 384,
                height: 384,
            }}
        />
    );
}

export default CropAvatar;
