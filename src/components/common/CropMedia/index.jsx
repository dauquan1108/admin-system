// TODO HungHVd - 14/04/2023: ...
import React from 'react';
import { Spin } from 'antd';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import CropperLib from 'react-easy-crop';

// Styles
import styles from './styles/index.module.scss';
import './styles/index.css';

// TODO HungHVd: lib crop đang gặp 1 lỗi khi mount trên modal của ant, size crop sẽ bị fix sai, song chỉ cần resize màn hình sẽ lại đúng
class Cropper extends React.PureComponent {
    constructor(props) {
        super(props);
        const { objectFit } = props;

        this.state = {
            objectFit,
            stateStyle: {},
            isLoading: true, // TODO HungHVd: mặc định vào luôn cần load media
        };

        this.viewCropperRef = null;
    }

    componentWillUnmount() {
        clearTimeout(this.cleanTimeout);
    }

    autoFixObjectFit = (width, height) => {
        const { cropSize } = this.props;
        const {
            parentNode: { offsetHeight, offsetWidth },
        } = this.viewCropperRef;
        let stateStyle;
        let aspectContainer;
        if (!cropSize) {
            aspectContainer = offsetWidth / offsetHeight;
            stateStyle = { width: '100%', height: '100%', position: 'relative' };
        } else {
            aspectContainer = cropSize.width / cropSize.height;
            stateStyle = { width: cropSize.width, height: cropSize.height, position: 'relative' };
        }
        // TODO HungHVd: việc quyết định objectFit nó không đơn thuần là so sánh width/height, mà nó còn có sự tương quan với khung chứa nữa
        // TODO HungHVd: tức yếu tố tỷ lệ sẽ quyết định
        const objectFit = aspectContainer > width / height ? 'horizontal-cover' : 'vertical-cover';
        this.setState({ objectFit, stateStyle });
        this.cleanTimeout = setTimeout(() => {
            this.setState({ isLoading: false });
        }, 1000);
    };

    setViewCropperRef = (ref) => {
        this.viewCropperRef = ref;
    };

    render() {
        const {
            title,
            image,
            cropSize,
            cropShape,
            showGrid,
            minZoom,
            maxZoom,
            aspect,
            style,
            classname,
            crop,
            rotation,
            zoom,
            onRotationChange,
            onCropChange,
            onZoomChange,
            onCropComplete,
        } = this.props;
        const { objectFit, stateStyle, isLoading } = this.state;

        if (!image) {
            return null;
        }

        return (
            <div key={image} className={classNames(styles['crop-wrapper'], classname)} title={title}>
                <div style={stateStyle} ref={this.setViewCropperRef} className={classNames(isLoading && styles.hidden)}>
                    <CropperLib
                        key={`${objectFit}_${image}`} // TODO HungHVd: phát sinh bug hiển thị khi chuyển update objectFit -> fix tạm
                        // Thuộc tính
                        image={image}
                        zoom={zoom}
                        crop={crop}
                        rotation={rotation}
                        cropShape={cropShape}
                        objectFit={objectFit}
                        minZoom={minZoom}
                        maxZoom={maxZoom}
                        showGrid={showGrid}
                        cropSize={cropSize}
                        aspect={aspect}
                        // Phương thức
                        onCropChange={onCropChange}
                        onZoomChange={onZoomChange}
                        onRotationChange={onRotationChange}
                        onCropComplete={onCropComplete}
                        onMediaLoaded={({ width, height }) => {
                            this.autoFixObjectFit(width, height);
                        }}
                        classes={{ containerClassName: 'cropContainerClassName', cropAreaClassName: 'cropArea' }}
                        style={style}
                    />
                </div>
                {isLoading && (
                    <div className={styles['wrapper-className-spin']}>
                        <Spin />
                    </div>
                )}
            </div>
        );
    }
}

/**
 * Comp này được thiết kế để wrapper cropper lib, hướng tới 2 tư tưởng chính:
 * 1. cropSize: ko truyền ==> cropArea sẽ ăn theo aspect tương quan với khung chứa
 * nếu aspect có tỷ lệ bằng khung => ôm sát thành phần cha ==> thường được sử dụng trực tiếp - thay thế thành phần cha bằng view crop và thực hiện crop
 * 2. cropSize: chủ động truyền ==> cropArea sẽ nằm trong 1 container chứa
 * ==> thường được sử dụng ở 1 view khác (modal), có thêm các option zoom, select aspect/cropSize
 * **/

Cropper.propTypes = {
    /** TODO HungHVd: tư tưởng sử dụng kết hợp các thuộc tính
     * objectFit sẽ cố gắng fit media (thẻ img - trong t/h là ảnh) theo chiều ngang hoặc dọc
     * còn aspect chỉ quy định tỷ lệ khung cắt
     * nếu tỷ lệ zoom là 1 (tức ko zoom) => thì khung cắt vẫn giữ tỷ lệ đấy song kích thước sẽ fit width/height media
     * vẫn logic trên, song khi cung cấp cropsize, khung cắt sẽ ăn theo kích thước quy định, đồng thời kết hợp với crop
     * để xác định khung cắt nằm ở vị trí tương đối nào so với media
     */
    objectFit: PropTypes.string, // TODO HungHVd: 'contain' | 'horizontal-cover' | 'vertical-cover' => nếu có nhu cầu fit theo chiều ngang/dọc thì chủ động truyền
    cropSize: PropTypes.object, // TODO HungHVd: quy định size cropArea - size ảnh cắt
    cropShape: PropTypes.string, // TODO HungHVd:  'round' | 'rect' cropArea hình tròn/vuông
    showGrid: PropTypes.bool, // TODO HungHVd: có show lưới trong cropArea hay không
    zoom: PropTypes.number, // TODO HungHVd: zoom media trong khoảng từ minZoom đến maxZoom.
    minZoom: PropTypes.number,
    maxZoom: PropTypes.number,
    rotation: PropTypes.number, // TODO HungHVd: quy định độ xoay
    crop: PropTypes.object, // TODO HungHVd: xác định vị trí media, {x:0, y:0} will center the media under the cropper. => tâm điểm ảnh sẽ nằm ở tọa độ nào
    image: PropTypes.string, // TODO HungHVd: link ảnh gốc
    aspect: PropTypes.number, // TODO HungHVd: quy định khung cropArea, theo tỷ lệ width/height.

    title: PropTypes.string,
    style: PropTypes.object, // TODO: { containerStyle: object, mediaStyle: object, cropAreaStyle: object }
    onZoomChange: PropTypes.func,
    onCropComplete: PropTypes.func,
    onRotationChange: PropTypes.func,
    onCropChange: PropTypes.func,
};

Cropper.defaultProps = {
    title: 'Kéo để thay đổi vị trí',
    objectFit: 'contain',
    cropShape: 'round',
    showGrid: true,
    zoom: 1,
    minZoom: 1,
    maxZoom: 3,
    rotation: 0,
    crop: { x: 0, y: 0 },
    aspect: 4 / 3,
    style: {},
    onZoomChange: () => null,
    onCropComplete: () => null,
    onRotationChange: () => null,
    onCropChange: () => null,
};

export default Cropper;
